import formidable from "formidable";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const config = {
  api: {
    bodyParser: false,
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
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return sendJson(res, 405, { message: `Method ${req.method} Not Allowed` });
  }

  const form = formidable({
    keepExtensions: true,
    maxFileSize: 5 * 1024 * 1024, // 5MB limit
  });

  try {
    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        else resolve([fields, files]);
      });
    });

    // Extract primary identifiers safely
    const fullName = Array.isArray(fields.Full_Name) ? fields.Full_Name[0] : fields.Full_Name;
    const nameStr = Array.isArray(fields.Name) ? fields.Name[0] : fields.Name;
    const senderName = nameStr || fullName || "Applicant";

    const emailStr = Array.isArray(fields.Email) ? fields.Email[0] : fields.Email;
    const fallbackEmailStr = Array.isArray(fields.email) ? fields.email[0] : fields.email;
    const senderEmail = emailStr || fallbackEmailStr || "No Email";
    
    const phoneStr = Array.isArray(fields.Phone) ? fields.Phone[0] : fields.Phone;
    const phoneNumStr = Array.isArray(fields.phone) ? fields.phone[0] : fields.phone;
    const senderPhone = phoneStr || phoneNumStr || "N/A";

    const formType = Array.isArray(fields.formType) ? fields.formType[0] : fields.formType;
    const subjectToken = Array.isArray(fields._subject) ? fields._subject[0] : fields._subject;

    const determinedFormType = formType || subjectToken || "Web Form";
    const finalSubject = `Zarkoon Security - New ${determinedFormType} from ${senderName}`;

    // Dynamically build the email body exactly as requested
    let dynamicBody = `Form Type: ${determinedFormType}\n`;
    dynamicBody += `Sender Name: ${senderName}\n`;
    dynamicBody += `Email: ${senderEmail}\n`;
    dynamicBody += `Phone: ${senderPhone}\n\n`;

    const message = Array.isArray(fields.Message) ? fields.Message[0] : fields.Message;
    if (message) {
      dynamicBody += `Message: ${message}\n\n`;
    }

    dynamicBody += `Additional Details:\n`;
    dynamicBody += `--------------------------------------------------------\n`;
    
    // Extrapolate any other unique fields dynamically
    for (const [key, value] of Object.entries(fields)) {
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

    const file = Array.isArray(files.attachment) ? files.attachment[0] : files.attachment;

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

    // Send the email
    await transporter.sendMail(mailOptions);

    return sendJson(res, 200, { success: true, message: "Application sent successfully!" });
  } catch (error) {
    console.error("Error processing form:", error);
    return sendJson(res, 500, { success: false, message: "Server error", error: error.message });
  }
}
