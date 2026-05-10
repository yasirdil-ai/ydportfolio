import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const genAI = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY || '' 
});

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

  // AI Intelligence Route
  app.post("/api/ai", async (req, res) => {
    const { topic, module, tone, audience } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      return res.status(503).json({ error: "AI Intelligence Engine not configured. Please check environment variables." });
    }

    const modulePrompts: Record<string, string> = {
      campaign: "Generate a strategic campaign concept, GTM angles, and positioning directions.",
      crm: "Generate advanced email workflows, lead nurturing concepts, and admissions funnel messaging.",
      growth: "Generate paid campaign ideas, demand generation angles, and funnel optimization experiments.",
      storytelling: "Generate premium brand narratives, executive messaging, and thought leadership hooks."
    };

    const prompt = `Act as a senior Marketing Growth Leader and CRM Expert. 
    For the topic: "${topic}", targeted at "${audience}" with a "${tone}" tone, 
    perform a deep strategic analysis for the "${module}" module.
    
    Instruction: ${modulePrompts[module] || modulePrompts.campaign}
    
    Return a structured JSON response with exactly these keys:
    - campaignName (A sophisticated, high-impact name)
    - audienceStrategy (Detailed psychological or behavioral approach)
    - keyMessaging (Array of 3 core brand pillars/messages)
    - channels (Array of 3-4 most effective distribution channels)
    - ctaExamples (Array of 2 compelling Call-to-Actions)
    - positioningHooks (Array of 2 unique value propositions)
    - insights (Object containing: recommendedChannels, audienceBehavior, suggestedWorkflow, engagementPotential)
    
    The tone must be executive-grade, credible, and focused on modern growth systems.`;

    try {
      const result = await genAI.models.generateContent({ 
        model: "gemini-3-flash-preview", 
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              campaignName: { type: Type.STRING },
              audienceStrategy: { type: Type.STRING },
              keyMessaging: { type: Type.ARRAY, items: { type: Type.STRING } },
              channels: { type: Type.ARRAY, items: { type: Type.STRING } },
              ctaExamples: { type: Type.ARRAY, items: { type: Type.STRING } },
              positioningHooks: { type: Type.ARRAY, items: { type: Type.STRING } },
              insights: {
                type: Type.OBJECT,
                properties: {
                  recommendedChannels: { type: Type.STRING },
                  audienceBehavior: { type: Type.STRING },
                  suggestedWorkflow: { type: Type.STRING },
                  engagementPotential: { type: Type.STRING }
                },
                required: ["recommendedChannels", "audienceBehavior", "suggestedWorkflow", "engagementPotential"]
              }
            },
            required: ["campaignName", "audienceStrategy", "keyMessaging", "channels", "ctaExamples", "positioningHooks", "insights"]
          }
        }
      });

      const responseText = result.text;
      
      if (!responseText) {
        throw new Error("Empty response from AI");
      }

      const parsed = JSON.parse(responseText);
      res.json(parsed);
    } catch (error) {
      console.error("AI Error:", error);
      res.status(500).json({ error: "Failed to generate AI intelligence. Please try again." });
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
