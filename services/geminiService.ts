
import { GoogleGenAI, Type } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateGigDetails = async (title: string, category: string) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Act as a professional freelance consultant. Help me write a professional gig description for a service titled "${title}" in the category "${category}". Provide a compelling description and 5 relevant tags.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          description: { type: Type.STRING },
          tags: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          suggestedPrice: { type: Type.NUMBER }
        },
        required: ["description", "tags", "suggestedPrice"]
      }
    }
  });

  return JSON.parse(response.text || '{}');
};

export const getSmartSearchSuggestions = async (query: string) => {
    const ai = getAI();
    const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Given the search query "${query}" for a freelance service marketplace, suggest 5 specific search terms or service categories that users usually look for.`,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
            }
        }
    });
    return JSON.parse(response.text || '[]');
}
