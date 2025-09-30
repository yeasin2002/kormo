"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import {
	AiCoverLetterMainResponse,
	type aiCoverLetterSchemaValues,
	CoverLetterFeatures,
	CoverLetterHeading,
	DecorativeElements,
} from "@/features/ai-cover-letter";
import { AiCoverMainForm } from "@/features/ai-cover-letter/ai-cover-main-form";
import { AiCoverLetterResponse } from "@/features/ai-cover-letter/helper/ai-cover-letter-response";

export default function CoverLetterGenerator() {
	const [isNext, setIsNext] = useState(false);
	const [isCoverLetterGenerating, setIsCoverLetterGenerating] = useState(false);
	const [finalCoverLetterContent, setFinalCoverLetterContent] = useState("");

	const onSubmitComplete = async ({
		data,
		cvText,
	}: {
		data: aiCoverLetterSchemaValues;
		cvText: string;
	}) => {
		try {
			setIsCoverLetterGenerating(true);
			setIsNext(true);

			const finalResponse = await AiCoverLetterResponse({ data, cvText });
			if (!finalResponse.success) throw new Error(finalResponse.message);
			setFinalCoverLetterContent(finalResponse.message!);
		} catch (error) {
			console.error(error);
			toast.error("Failed to generate cover letter. Please try again later.");
		} finally {
			setIsCoverLetterGenerating(false);
		}
	};

	return (
		<>
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
		</>
	);
}
