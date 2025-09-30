import { GoogleGenAI } from '@google/genai';

export const googleGenAI = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEN_AI_API });
