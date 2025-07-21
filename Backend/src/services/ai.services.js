import { GoogleGenAI } from "@google/genai";
import config from "../config/config.js";

const ai = new GoogleGenAI({
  apiKey: config.geminiApiKey,
});

export async function generateCaption(file) {

  const base64Image = new Buffer.from(file.Buffer).toString("base64");

  const contents = [
    {
      inlineData: {
        mimeType: file.mimeType,
        data: base64Image,
      },
    },
    { text: "Caption this image." },
  ];


  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: contents,
  });

  return response.text;
}
