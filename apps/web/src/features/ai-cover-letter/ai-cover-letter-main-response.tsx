import { Copy } from "lucide-react";
import { EosIconsLoading } from "@/components/icons";
import { Button } from "@/components/retroui";
import { TextSkeleton } from "@/components/skeletons";
import { copyToClipboard } from "@/helpers/copy-to-clipboard";

type Props = {
	isCoverLetterGenerating: boolean;
	finalCoverLetterContent?: string;
};

export const AiCoverLetterMainResponse = ({
	isCoverLetterGenerating,
	finalCoverLetterContent,
}: Props) => {
	const handleCopy = () => {
		copyToClipboard(finalCoverLetterContent || "");
	};
	return (
		<div>
			<div className="mb-6 flex items-center justify-between">
				<h2 className="mb-4 flex items-center gap-x-2 font-bold text-2xl">
					{isCoverLetterGenerating ? (
						<>
							<span>Generating your cover letter.......</span>
							<EosIconsLoading />
						</>
					) : (
						"Your AI-Generated Cover Letter"
					)}
				</h2>
				<Button className="gap-x-2" onClick={handleCopy}>
					<Copy className="size-4" />
					<span>Copy</span>
				</Button>
			</div>

			{isCoverLetterGenerating ? (
				<div className="flex flex-col items-center justify-center space-y-7">
					<TextSkeleton className="w-full min-w-full" />
					<span className="text-center text-gray-500">
						This might take some times, please be patient
					</span>
				</div>
			) : (
				<pre> {finalCoverLetterContent} </pre>
			)}
		</div>
	);
};
