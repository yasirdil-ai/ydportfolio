import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Email Configuration
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // API contact route
  app.post("/api/contact", async (req, res) => {
    const { name, email, category, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      // 1. Send lead email to consultant
      await transporter.sendMail({
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        to: "ydnkonline@gmail.com",
        replyTo: email,
        subject: `New Portfolio Enquiry — ${category || 'General'}`,
        text: `Name: ${name}\nEmail: ${email}\nInquiry Type: ${category}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #0d1117;">New Portfolio Enquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Inquiry Type:</strong> ${category}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        `,
      });

      // 2. Send auto-response to sender
      await transporter.sendMail({
        from: `"Yasir Dil" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Thank You for Your Enquiry",
        text: `Hello ${name},\n\nThank you for reaching out through my portfolio website.\n\nI’ve received your enquiry and will get back to you as soon as possible.\n\nBest regards,\nYasir Dil\nhttps://ydnk.online`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333;">
            <p>Hello <strong>${name}</strong>,</p>
            <p>Thank you for reaching out through my portfolio website.</p>
            <p>I’ve received your enquiry and will get back to you as soon as possible.</p>
            <p>Best regards,<br/><strong>Yasir Dil</strong><br/><a href="https://ydnk.online">ydnk.online</a></p>
          </div>
        `,
      });

      res.status(200).json({ message: "Inquiry sent successfully" });
    } catch (error) {
      console.error("Email error:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
