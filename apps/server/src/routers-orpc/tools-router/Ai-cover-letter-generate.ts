import "dotenv/config";

import { google } from "@ai-sdk/google";
import { generateObject } from "ai";
import { z } from "zod";
import { publicProcedure } from "@/lib/orpc";

const aiCoverLetterInputSchema = z.object({
	cvText: z.string().min(1, "CV text is required"),
	jobDescription: z.string().min(1, "Job description is required"),
	additionalInstructions: z.string().optional(),
});

export const generateCoverLetterWithOrpc = publicProcedure
	.input(aiCoverLetterInputSchema)
	.handler(async ({ input }) => {
		try {
			const { jobDescription, additionalInstructions, cvText } = input;

			const prompt = `Write a professional cover letter with the following details:
    Job Description: ${jobDescription}
    CV Content: ${cvText}
    Additional Instructions: ${additionalInstructions || "None"}
    
    The cover letter should be professional, engaging, and highlight relevant experience from the CV.
    Give me a response in plain text only with proper formatting for a cover letter.
    Do not include any HTML or markdown formatting. The response should be concise and to the point.`;

			const result = await generateObject({
				model: google("gemini-2.5-flash"),
				prompt: prompt,
				schema: z.object({
					coverLetter: z.string(),
					jobTitle: z.string().describe("Job title from that job description"),
					description: z
						.string()
						.describe("A short  Job description from that job description"),
				}),
			});

			return { error: null, data: result.object.coverLetter };
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
