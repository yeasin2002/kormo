import { publicProcedure } from "@/lib/orpc";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { z } from "zod";

const aiCoverLetterInputSchema = z.object({
	cvText: z.string().min(1, "CV text is required"),
	jobTitle: z.string().min(1, "Job title is required"),
	jobDescription: z.string().min(1, "Job description is required"),
	yourName: z.string().min(1, "Your name is required"),
	additionalInstructions: z.string().optional(),
	coverLetterTone: z.string().min(1, "Cover letter tone is required"),
});

export const generateCoverLetterWithOrpc = publicProcedure
	.input(aiCoverLetterInputSchema)
	.handler(async ({ input }) => {
		try {
			const {
				jobTitle,
				jobDescription,
				yourName,
				additionalInstructions,
				coverLetterTone,
				cvText,
			} = input;

			const prompt = `Write a professional cover letter with the following details:
    Job Title: ${jobTitle}
    Job Description: ${jobDescription}
    Candidate Name: ${yourName}
    CV Content: ${cvText}
    Tone: ${coverLetterTone}
    Additional Instructions: ${additionalInstructions || "None"}
    
    The cover letter should be professional, engaging, and highlight relevant experience from the CV.
    Give me a response in plain text only with proper formatting for a cover letter.
    Do not include any HTML or markdown formatting. The response should be concise and to the point.`;

			const result = await generateText({
				model: google("gemini-2.0-flash"),
				prompt: prompt,
			});

			return { error: null, data: result.text };
		} catch (error) {
			console.error("Error generating cover letter:", error);
			if (error instanceof Error) {
				return { error: error.message, data: null };
			}
			return {
				error: "Failed to generate cover letter. Please try again.",
				data: null,
			};
		}
	});
