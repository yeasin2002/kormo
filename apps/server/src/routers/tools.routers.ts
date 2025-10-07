import { google } from "@ai-sdk/google";
import { generateObject } from "ai";
import chalk from "chalk";
import express from "express";
import { z } from "zod";

const tools = express();

tools.use("/ai-cover-letter-generate", async (req, res) => {
	try {
		console.log(chalk.bgRed("body:"), req.body);
		// const { jobDescription, additionalInstructions, cvText } = req.body;

		const prompt = `Write a professional cover letter with the following details:
							Job Description: ${req.body.jobDescription}
							CV Content: ${req.body.cvText}
							Additional Instructions: ${req.body.additionalInstructions || "None"}

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

		return res
			.status(200)
			.json({ error: null, data: result.object.coverLetter });
	} catch (error) {
		console.error("Error generating cover letter:", error);
		if (error instanceof Error) {
			return res.status(500).json({ error: error.message, data: null });
		}
		return res.status(500).json({
			error: "Failed to generate cover letter. Please try again.",
			data: null,
		});
	}
});

export { tools as toolsRouter };
