import { z } from 'zod';

export const aiCoverLetterSchema = z.object({
  // cv: z.any().refine((value) => value, {
  //   message: 'CV is required',
  // }),
  cv: z
    .custom<File>((file) => file instanceof File, {
      message: 'File is required',
    })
    .nullable(),
  jobTitle: z.string().min(1, 'Job title is required'),
  jobDescription: z.string().min(1, 'Job description is required'),
  yourName: z.string().min(1, 'Your name is required'),
  additionalInstructions: z.string().optional(),
  coverLetterTone: z.string().min(1, 'Cover letter tone is required'),
});

export type aiCoverLetterSchemaValues = z.infer<typeof aiCoverLetterSchema>;
