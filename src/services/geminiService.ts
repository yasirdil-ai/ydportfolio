import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY || '' 
});

export interface AIOutcome {
  campaignName: string;
  audienceStrategy: string;
  keyMessaging: string[];
  channels: string[];
  ctaExamples: string[];
  positioningHooks: string[];
  insights: {
    recommendedChannels: string;
    audienceBehavior: string;
    suggestedWorkflow: string;
    engagementPotential: string;
  };
}

export const generateMarketingIntelligence = async (
  topic: string, 
  module: 'campaign' | 'crm' | 'growth' | 'storytelling', 
  tone: string = 'professional', 
  audience: string = 'general'
): Promise<AIOutcome> => {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY is not configured');
  }

  const modulePrompts = {
    campaign: "Generate a strategic campaign concept, GTM angles, and positioning directions.",
    crm: "Generate advanced email workflows, lead nurturing concepts, and admissions funnel messaging.",
    growth: "Generate paid campaign ideas, demand generation angles, and funnel optimization experiments.",
    storytelling: "Generate premium brand narratives, executive messaging, and thought leadership hooks."
  };

  const prompt = `Act as a senior Marketing Growth Leader and CRM Expert. 
  For the topic: "${topic}", targeted at "${audience}" with a "${tone}" tone, 
  perform a deep strategic analysis for the "${module}" module.
  
  Instruction: ${modulePrompts[module]}
  
  Return a structured JSON response with exactly these keys:
  - campaignName (A sophisticated, high-impact name)
  - audienceStrategy (Detailed psychological or behavioral approach)
  - keyMessaging (Array of 3 core brand pillars/messages)
  - channels (Array of 3-4 most effective distribution channels)
  - ctaExamples (Array of 2 compelling Call-to-Actions)
  - positioningHooks (Array of 2 unique value propositions)
  - insights (Object containing: recommendedChannels, audienceBehavior, suggestedWorkflow, engagementPotential)
  
  The tone must be executive-grade, credible, and focused on modern growth systems.`;

  const response = await ai.models.generateContent({
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

  const text = response.text;
  if (!text) throw new Error('No response from intelligence engine');
  
  return JSON.parse(text) as AIOutcome;
};
