"use client";

import { useState } from "react";
import { MultiMediaUploaderWithPreview } from "@/components/custom-ui/multi-file-with-preview-uploader";
import { Button } from "@/components/retroui";
import { useFileUpload } from "@/hooks/use-file-upload";

const maxSizeMB = 5;
const maxSize = maxSizeMB * 1024 * 1024; // 5MB default
const maxFiles = 6;

export default function CoverLetterGenerator() {
	const [imgError, setImgError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const [texts, setTexts] = useState<string[]>([]);

	const [{ files, isDragging, errors: fileErrors }, action] = useFileUpload({
		accept: "image/png,image/jpeg,image/jpg",
		maxSize,
		multiple: true,
		maxFiles,
	});

	const handleSumit = async () => {
		// e.preventDefault();
		// e: React.FormEvent<HTMLFormElement>
		try {
			if (!files || files.length < 1 || files.length > 5) {
				alert("Please select between 1 and 5 images.");
				return;
			}

			const formData = new FormData();
			// Array.from(files).forEach((fileWithPreview) => {
			//   formData.append('images', fileWithPreview);
			// });

			setLoading(true);
			const res = await fetch("/api/img-to-text", {
				method: "POST",
				body: formData,
			});

			const data = await res.json();
			console.log(data);
			setTexts(data.texts);
			setLoading(false);
		} catch (error) {
			console.error("Error during form submission:", error);
			setImgError(
				"An error occurred while processing your request. Please try again.",
			);
			return;
		}
	};

	return (
		<section className="min-h-screen">
			<div className="container relative mx-auto space-y-5 overflow-hidden rounded-3xl border-4 border-border bg-card p-8 px-6 py-12 text-foreground shadow-xl">
				<div className="space-y-8">
					<MultiMediaUploaderWithPreview
						actions={action}
						state={{ files, isDragging, errors: fileErrors }}
						maxSizeMB={maxSizeMB}
						maxFiles={maxFiles}
					/>
					{imgError && (
						<div className="mt-2 text-destructive text-sm">{imgError}</div>
					)}
					<Button
						className="px-20 py-3"
						type="submit"
						disabled={loading}
						onClick={handleSumit}
					>
						{loading ? "Processing..." : "Generate Text"}
					</Button>
				</div>

				{texts.length > 0 && (
					<div>
						<h2>Generated Text</h2>
						{texts?.map((text, index) => (
							<p key={index}>{text}</p>
						))}
					</div>
				)}
			</div>
		</section>
	);
}
