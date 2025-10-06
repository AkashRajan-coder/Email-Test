import transporter from "./transporter.js";

export const sendTestEmail = async () => {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "rajanakash331@gmail.com",
      subject: "Test Email from Render",
      text: "Hello! This is a test email.",
    });
    console.log("Email sent successfully!");
  } catch (err) {
    console.error("Email send failed:", err);
  }
};

sendTestEmail();
