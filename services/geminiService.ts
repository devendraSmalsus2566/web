
import { GoogleGenAI } from "@google/genai";

// Use process.env.API_KEY directly and initialize within the function scope
export const getGeminiResponse = async (prompt: string, history: { role: string; content: string }[], currentLanguage: string = 'en') => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    You are the Senior Technical Sales Engineer for "Trilochana Infotech Pvt Ltd Solution". 
    You are a polyglot and must communicate fluently in English, Hindi, Marathi, Gujarati, or Urdu based on the user's preference or the current UI language (${currentLanguage}).

    Primary Goal: Assist customers in selecting 3D printing hardware or services.

    Available Products:
    1. Trilo-I1 Industrial ($8,499): Huge build volume, PEEK compatible.
    2. Trilo-F3 Pro ($1,299): Pro desktop, 500mm/s speed.
    3. S5 Ultra Resin ($2,199): 12K detail.
    4. Flux Mini X-2 ($549): Reliable entry-level.

    Communication Rules:
    - If the user speaks in Hindi, Marathi, Gujarati, or Urdu, respond in that same language with technical precision.
    - Be professional and helpful.
    - Ask about their specific engineering requirements (strength, detail, heat resistance).
  `;

  try {
    // Map existing history to Gemini SDK format
    const formattedHistory = history.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }],
    }));

    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction,
        temperature: 0.6,
      },
      history: formattedHistory,
    });

    // sendMessage to the model
    const response = await chat.sendMessage({ message: prompt });
    // Use .text property directly as per latest SDK guidelines
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but our technical systems are experiencing a momentary lag. How else can I assist you?";
  }
};
