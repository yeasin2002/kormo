import { z } from "zod";

export const aiCoverLetterSchema = z.object({
  cv: z
    .instanceof(FileList)
    .refine(
      (files) => files?.length === 1,
      "Please select a single file to upload"
    ),
  jobTitle: z.string().min(1, "Job title is required"),
  jobDescription: z.string().min(1, "Job description is required"),
  yourName: z.string().min(1, "Your name is required"),
  additionalInstructions: z.string().optional(),
  coverLetterTone: z.string().min(1, "Cover letter tone is required"),
});

export type aiCoverLetterSchemaValues = z.infer<typeof aiCoverLetterSchema>;
