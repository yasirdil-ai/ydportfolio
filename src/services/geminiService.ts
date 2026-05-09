import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY || '' 
});

export const generateMarketingCopy = async (topic: string, type: 'slogan' | 'ad' | 'social') => {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY is not configured');
  }

  const prompt = `Generate 5 creative ${type === 'slogan' ? 'marketing slogans' : type === 'ad' ? 'ad copy variations' : 'social media posts'} for the following topic: ${topic}. 
  The tone should be professional yet engaging, suitable for a high-end marketing agency or consultant.
  Return the results as a list of strings within a JSON object.`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          results: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        },
        required: ["results"]
      }
    }
  });

  const text = response.text;
  if (!text) throw new Error('No response from AI');
  
  const parsed = JSON.parse(text);
  return parsed.results as string[];
};
