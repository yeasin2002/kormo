import { z } from "zod";

export const aiCoverLetterSchema = z.object({
	cv: z
		.custom<File>((file) => file instanceof File, {
			message: "File is required",
		})
		.nullable(),
	jobDescription: z.string().min(1, "Job description is required"),
	additionalInstructions: z.string().optional(),
});

export type aiCoverLetterSchemaValues = z.infer<typeof aiCoverLetterSchema>;

// cv: z.any().refine((value) => value, {
//   message: 'CV is required',
// }),
