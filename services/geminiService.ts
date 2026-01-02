
import { GoogleGenAI } from "@google/genai";

export const generateDescription = async (apartmentName: string, features: string[]) => {
  // Create a fresh instance for each call to ensure the latest API key is used
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a luxury hospitality-focused marketing description for a short-term rental named "${apartmentName}" that features ${features.join(', ')}.`,
      config: {
        systemInstruction: "You are an expert luxury real estate copywriter. Write compelling, high-end descriptions that emphasize comfort, style, and unique local experiences. Keep descriptions under 80 words.",
        temperature: 0.7,
      }
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini Content Generation Error:", error);
    return `Welcome to ${apartmentName}. A premium urban residence featuring ${features.join(', ')}. Experience the city in unparalleled comfort.`;
  }
};
