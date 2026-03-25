import formidable from "formidable";
import nodemailer from "nodemailer";
if (process.env.NODE_ENV !== "production") {
  try {
    const dotenv = await import("dotenv");
    dotenv.config();
  } catch (e) {
    console.log("dotenv config bypassed in production");
  }
}

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true, // often helps prevent Vercel complaining about no res.end
  },
};

const sendJson = (res, statusCode, data) => {
  if (typeof res.status === "function") {
    return res.status(statusCode).json(data);
  }
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  return res.end(JSON.stringify(data));
};

export default async function handler(req, res) {
  // CORS setup for production (Vercel routes sometimes need explicit CORS if fetched from different origins)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');

  if (req.method === 'OPTIONS') {
    return sendJson(res, 200, {});
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST", "OPTIONS"]);
    return sendJson(res, 405, { message: `Method ${req.method} Not Allowed` });
  }

  const form = formidable({
    keepExtensions: true,
    maxFileSize: 5 * 1024 * 1024, // 5MB limit
  });

  let parsedFields, parsedFiles;

  try {
    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          console.error("Formidable Parse Error:", err);
          reject(err);
        } else {
          resolve([fields, files]);
        }
      });
    });
    parsedFields = fields;
    parsedFiles = files;
  } catch (parseError) {
    console.error("Error specifically during file/form parsing:", parseError);
    return sendJson(res, 500, { success: false, message: "Form Parse failed", error: parseError.message });
  }

  try {
    // Extract primary identifiers safely
    const fullName = Array.isArray(parsedFields.Full_Name) ? parsedFields.Full_Name[0] : parsedFields.Full_Name;
    const nameStr = Array.isArray(parsedFields.Name) ? parsedFields.Name[0] : parsedFields.Name;
    const senderName = nameStr || fullName || "Applicant";

    const emailStr = Array.isArray(parsedFields.Email) ? parsedFields.Email[0] : parsedFields.Email;
    const fallbackEmailStr = Array.isArray(parsedFields.email) ? parsedFields.email[0] : parsedFields.email;
    const senderEmail = emailStr || fallbackEmailStr || "No Email";
    
    const phoneStr = Array.isArray(parsedFields.Phone) ? parsedFields.Phone[0] : parsedFields.Phone;
    const phoneNumStr = Array.isArray(parsedFields.phone) ? parsedFields.phone[0] : parsedFields.phone;
    const senderPhone = phoneStr || phoneNumStr || "N/A";

    const formType = Array.isArray(parsedFields.formType) ? parsedFields.formType[0] : parsedFields.formType;
    const subjectToken = Array.isArray(parsedFields._subject) ? parsedFields._subject[0] : parsedFields._subject;

    const determinedFormType = formType || subjectToken || "Web Form";
    const finalSubject = `Zarkoon Security - New ${determinedFormType} from ${senderName}`;

    // Dynamically build the email body exactly as requested
    let dynamicBody = `Form Type: ${determinedFormType}\n`;
    dynamicBody += `Sender Name: ${senderName}\n`;
    dynamicBody += `Email: ${senderEmail}\n`;
    dynamicBody += `Phone: ${senderPhone}\n\n`;

    const message = Array.isArray(parsedFields.Message) ? parsedFields.Message[0] : parsedFields.Message;
    if (message) {
      dynamicBody += `Message: ${message}\n\n`;
    }

    dynamicBody += `Additional Details:\n`;
    dynamicBody += `--------------------------------------------------------\n`;
    
    // Extrapolate any other unique fields dynamically
    for (const [key, value] of Object.entries(parsedFields)) {
      // Exclude implicitly mapped metadata & standard keys
      const excludedKeys = ['formType', '_subject', '_captcha', '_template', 'Name', 'Full_Name', 'Email', 'email', 'Phone', 'phone', 'Message'];
      if (excludedKeys.includes(key)) continue;
      
      const parsedValue = Array.isArray(value) ? value[0] : value;
      if (parsedValue && parsedValue.trim() !== '') {
        const readableKey = key.replace(/_/g, ' ');
        dynamicBody += `${readableKey}: ${parsedValue}\n`;
      }
    }
    dynamicBody += `--------------------------------------------------------\n`;

    const file = Array.isArray(parsedFiles.attachment) ? parsedFiles.attachment[0] : parsedFiles.attachment;

    console.log("Setting up Nodemailer transporter...");
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      console.error("CRITICAL ERROR: Missing GMAIL_USER or GMAIL_PASS environment variables.");
    }

    // Create Nodemailer transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Setup email data
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to yourself (client's email)
      replyTo: senderEmail,
      subject: finalSubject,
      text: dynamicBody,
      attachments: file
        ? [
            {
              filename: file.originalFilename || "CV_Attachment.pdf",
              path: file.filepath,
            },
          ]
        : [],
    };

    console.log(`Sending email to ${process.env.GMAIL_USER} for subject: ${finalSubject}`);
    
    try {
      // Send the email
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully: ", info.messageId);
      return sendJson(res, 200, { success: true, message: "Application sent successfully!" });
    } catch (mailError) {
      console.error("Nodemailer Send Error:", mailError);
      return sendJson(res, 500, { success: false, message: "Email delivery failed", error: mailError.message });
    }

  } catch (error) {
    console.error("General Error processing fields:", error);
    return sendJson(res, 500, { success: false, message: "Server error stringifying fields", error: error.message });
  }
}
