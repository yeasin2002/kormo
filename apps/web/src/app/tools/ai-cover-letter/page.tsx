"use client";

// biome-ignore assist/source/organizeImports: <>
import {
	AiCoverLetterMainResponse,
	type aiCoverLetterSchemaValues,
	CoverLetterFeatures,
	CoverLetterHeading,
	DecorativeElements,
} from "@/features/ai-cover-letter";
import { AiCoverMainForm } from "@/features/ai-cover-letter/ai-cover-main-form";
import { orpc } from "@/utils/orpc";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
// import { useMutation } from "@tanstack/react-query";

export default function CoverLetterGenerator() {
	const [isNext, _setIsNext] = useState(false);
	const [isCoverLetterGenerating, setIsCoverLetterGenerating] = useState(false);
	const [finalCoverLetterContent, setFinalCoverLetterContent] = useState("");

	type Overwrite<T, U> = Omit<T, keyof U> & U;
	type aiCoverLetterStringValues = Overwrite<
		aiCoverLetterSchemaValues,
		{ cv: string }
	>;

	const { mutateAsync: generateCoverLetterMutation } = useMutation({
		mutationFn: (input: aiCoverLetterStringValues) =>
			orpc.generateCoverLetter.mutationOptions({
				input: {
					cvText: input.cv,
					jobDescription: input.jobDescription,
					additionalInstructions: input.additionalInstructions,
				},
			}),
	});

	const onSubmitComplete = async ({
		data,
		cvText,
	}: {
		data: aiCoverLetterSchemaValues;
		cvText: string;
	}) => {
		try {
			setIsCoverLetterGenerating(true);
			//   setIsNext(true);

			const finalResponse = await generateCoverLetterMutation({
				cv: cvText,
				jobDescription: data.jobDescription,
				additionalInstructions: data.additionalInstructions,
			});
			console.log("🚀 ~ finalResponse:", finalResponse);

			// if (finalResponse.error) {
			// 	toast.error(`Server: ${finalResponse.error}`);
			// 	return;
			// }
			// toast.success("Cover letter generated");
			// console.log("cover letter text:", finalResponse.data);

			// update UI with generated content
			// setFinalCoverLetterContent(finalResponse.data ?? "");
		} catch (error) {
			console.error(error);
			toast.error("Failed to generate cover letter. Please try again later.");
		}
	};

	return (
		<div className="relative min-h-screen overflow-hidden bg-background text-foreground">
			<DecorativeElements />

			<main className="container mx-auto px-6 py-12">
				<div className="mx-auto max-w-7xl">
					<CoverLetterHeading />

					<div className="rounded-3xl border-4 border-border bg-card p-8 shadow-xl">
						{isNext ? (
							<AiCoverLetterMainResponse
								isCoverLetterGenerating={isCoverLetterGenerating}
								finalCoverLetterContent={finalCoverLetterContent}
							/>
						) : (
							<AiCoverMainForm onSubmitComplete={onSubmitComplete} />
						)}
						{isNext || <CoverLetterFeatures />}
					</div>
				</div>
			</main>
		</div>
	);
}
