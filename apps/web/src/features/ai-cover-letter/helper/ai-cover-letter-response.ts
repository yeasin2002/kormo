'use server';

import { googleGenAI } from '@/lib/google-gen-Ai-instanace';
import { aiCoverLetterSchemaValues } from '../cover-letter-form-schema';

export const AiCoverLetterResponse = async ({
  data,
  cvText,
}: {
  data: aiCoverLetterSchemaValues;
  cvText: string;
}) => {
  try {
    const { jobTitle, jobDescription, yourName, additionalInstructions, coverLetterTone } = data;

    const prompt = `Write a professional cover letter with the following details:
    Job Title: ${jobTitle}
    Job Description: ${jobDescription}
    Candidate Name: ${yourName}
    CV Content: ${cvText}
    Tone: ${coverLetterTone}z
    Additional Instructions: ${additionalInstructions || 'None'}
    
    The cover letter should be professional, engaging, and highlight relevant experience from the CV.
    Give me a response in plain text only with proper formatting for a cover letter.
    Do not include any HTML or markdown formatting. The response should be concise and to the point
    
    .`;

    const result = await googleGenAI.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: prompt,
      config: { maxOutputTokens: 300 },
    });
    const text = result.text;

    return {
      success: true,
      message: text,
    };
  } catch (error) {
    console.error('Error generating cover letter:', error);
    return {
      success: false,
      message: 'Failed to generate cover letter. Please try again.',
    };
  }
};
