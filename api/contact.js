import formidable from "formidable";
import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

const sendJson = (res, statusCode, data) => {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  return res.end(JSON.stringify(data));
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
  if (req.method === 'OPTIONS') return sendJson(res, 200, {});
  if (req.method !== "POST") return sendJson(res, 405, { message: "Method Not Allowed" });

  const form = formidable({ keepExtensions: true, maxFileSize: 5 * 1024 * 1024 });

  try {
    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err); else resolve([fields, files]);
      });
    });

    const senderName = fields.Name?.[0] || fields.Full_Name?.[0] || "Applicant";
    const senderEmail = fields.Email?.[0] || fields.email?.[0] || "No Email";
    const senderPhone = fields.Phone?.[0] || fields.phone?.[0] || "N/A";
    const formType = fields.formType?.[0] || fields._subject?.[0] || "Web Form";
    const message = fields.Message?.[0] || "No message provided.";

    const finalSubject = `Zarkoon Security - New Inquiry (${formType}) from ${senderName}`;
    let dynamicBody = `Form Type: ${formType}\nSender Name: ${senderName}\nEmail: ${senderEmail}\nPhone: ${senderPhone}\n\nMessage: ${message}\n`;

    const commonHosts = [
      { service: 'gmail', host: 'smtp.gmail.com', name: 'Gmail Service' },
      { host: 'smtp.zoho.eu', name: 'Zoho EU' },
      { host: 'smtp.zoho.com', name: 'Zoho Global' },
    ];

    let lastError = null;

    for (const hostInfo of commonHosts) {
      console.log(`Diagnostic: Testing ${hostInfo.name} for info@zarkoonsecurity.co.uk...`);
      try {
        const transporter = nodemailer.createTransport({
          ...(hostInfo.service ? { service: hostInfo.service } : { host: hostInfo.host, port: 465, secure: true }),
          auth: {
            user: 'info@zarkoonsecurity.co.uk',
            pass: 'URruP2yw8E2Z',
          },
        });

        const mailOptions = {
          from: '"Zarkoon Security" <info@zarkoonsecurity.co.uk>',
          to: 'info@zarkoonsecurity.co.uk',
          replyTo: senderEmail,
          subject: finalSubject,
          text: dynamicBody,
          attachments: files.attachment ? [{ filename: files.attachment[0].originalFilename, path: files.attachment[0].filepath }] : [],
        };

        const info = await transporter.sendMail(mailOptions);
        console.log(`Diagnostic Success: Email sent via ${hostInfo.name}! (ID: ${info.messageId})`);
        return sendJson(res, 200, { success: true, message: `Email delivered via ${hostInfo.name}` });
      } catch (err) {
        console.error(`${hostInfo.name} Attempt Failed:`, err.message);
        lastError = err;
        // Continue to the next host if it's an Auth error
      }
    }

    // If we reach here, all 3 failed
    return sendJson(res, 535, { 
      success: false, 
      message: "Authentication failed on all attempted mail servers (Gmail, Zoho EU, Zoho Global).", 
      error: lastError.message 
    });

  } catch (error) {
    console.error("Critical API Error:", error);
    return sendJson(res, 500, { success: false, message: "Critical Server Error", error: error.message });
  }
}
