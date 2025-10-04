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
import { client } from "@/utils/orpc";
import { useState } from "react";
import toast from "react-hot-toast";
// import {useQerry} from '@orpc/tanstack-query'
// import { useMutation } from "@tanstack/react-query";

export default function CoverLetterGenerator() {
	const [isNext, _setIsNext] = useState(false);
	const [isCoverLetterGenerating, setIsCoverLetterGenerating] = useState(false);
	const [finalCoverLetterContent, setFinalCoverLetterContent] = useState("");

	// const { mutateAsync: generateCoverLetterMutation } = useMutation({
	// 		mutationFn: () => client.generateCoverLetter(),
	// 	});
	// const { mutateAsync: generateCoverLetterMutation } =client.generateCoverLetter();

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
			// const finalResponse = await generateCoverLetterMutation({
			//   input: {
			//     cvText,
			//     jobTitle: data.jobTitle,
			//     jobDescription: data.jobDescription,
			//     yourName: data.yourName,
			//     coverLetterTone: data.coverLetterTone,
			//     additionalInstructions: data.additionalInstructions,
			//   },
			// });

			const finalResponse = await client.generateCoverLetter({
				input: {
					cvText,
					jobDescription: data.jobDescription,
					additionalInstructions: data.additionalInstructions,
				},
			});

			if (finalResponse.error) {
				toast.error(`Server: ${finalResponse.error}`);
				return;
			}
			toast.success("Cover letter generated");
			console.log("cover letter text:", finalResponse.data);

			// update UI with generated content
			setFinalCoverLetterContent(finalResponse.data ?? "");
		} catch (error) {
			console.error(error);
			toast.error("Failed to generate cover letter. Please try again later.");
		} finally {
			setIsCoverLetterGenerating(false);
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
