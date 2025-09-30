"use client";

import {
	AlertCircleIcon,
	FileArchiveIcon,
	FileIcon,
	FileSpreadsheetIcon,
	FileTextIcon,
	HeadphonesIcon,
	ImageIcon,
	Trash2Icon,
	UploadIcon,
	VideoIcon,
	XIcon,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	type FileUploadActions,
	type FileUploadState,
	formatBytes,
} from "@/hooks/use-file-upload";

const getFileIcon = (file: { file: File | { type: string; name: string } }) => {
	const fileType = file.file instanceof File ? file.file.type : file.file.type;
	const fileName = file.file instanceof File ? file.file.name : file.file.name;

	const iconMap = {
		pdf: {
			icon: FileTextIcon,
			conditions: (type: string, name: string) =>
				type.includes("pdf") ||
				name.endsWith(".pdf") ||
				type.includes("word") ||
				name.endsWith(".doc") ||
				name.endsWith(".docx"),
		},
		archive: {
			icon: FileArchiveIcon,
			conditions: (type: string, name: string) =>
				type.includes("zip") ||
				type.includes("archive") ||
				name.endsWith(".zip") ||
				name.endsWith(".rar"),
		},
		excel: {
			icon: FileSpreadsheetIcon,
			conditions: (type: string, name: string) =>
				type.includes("excel") ||
				name.endsWith(".xls") ||
				name.endsWith(".xlsx"),
		},
		video: {
			icon: VideoIcon,
			conditions: (type: string) => type.includes("video/"),
		},
		audio: {
			icon: HeadphonesIcon,
			conditions: (type: string) => type.includes("audio/"),
		},
		image: {
			icon: ImageIcon,
			conditions: (type: string) => type.startsWith("image/"),
		},
	};

	for (const { icon: Icon, conditions } of Object.values(iconMap)) {
		if (conditions(fileType, fileName)) {
			return <Icon className="size-5 opacity-60" />;
		}
	}

	return <FileIcon className="size-5 opacity-60" />;
};

const getFilePreview = (file: {
	file: File | { type: string; name: string; url?: string };
}) => {
	const fileType = file.file instanceof File ? file.file.type : file.file.type;
	const fileName = file.file instanceof File ? file.file.name : file.file.name;

	const renderImage = (src: string) => (
		<Image
			src={src}
			alt={fileName}
			className="size-full rounded-t-[inherit] object-cover"
			width={1000}
			height={800}
			unoptimized={true}
		/>
	);

	return (
		<div className="flex aspect-square items-center justify-center overflow-hidden rounded-t-[inherit] bg-accent">
			{fileType.startsWith("image/") ? (
				file.file instanceof File ? (
					(() => {
						const previewUrl = URL.createObjectURL(file.file);
						return renderImage(previewUrl);
					})()
				) : file.file.url ? (
					renderImage(file.file.url)
				) : (
					<ImageIcon className="size-5 opacity-60" />
				)
			) : (
				getFileIcon(file)
			)}
		</div>
	);
};

type Props = {
	state: FileUploadState;
	actions: FileUploadActions;
	maxSizeMB: number;
	maxFiles: number;
};

export function MultiMediaUploaderWithPreview({
	state,
	actions,
	maxSizeMB,
	maxFiles,
}: Props) {
	const { files, isDragging, errors } = state;
	const {
		handleDragEnter,
		handleDragLeave,
		handleDragOver,
		handleDrop,
		openFileDialog,
		removeFile,
		clearFiles,
		getInputProps,
	} = actions;

	// const [
	//   { files, isDragging, errors },
	//   {
	//     handleDragEnter,
	//     handleDragLeave,
	//     handleDragOver,
	//     handleDrop,
	//     openFileDialog,
	//     removeFile,
	//     clearFiles,
	//     getInputProps,
	//   },
	// ] = useFileUpload({
	//   multiple: true,
	//   maxFiles,
	//   maxSize,
	//   initialFiles,
	// });

	return (
		<div className="flex flex-col gap-2">
			{/* Drop area */}
			<div
				onDragEnter={handleDragEnter}
				onDragLeave={handleDragLeave}
				onDragOver={handleDragOver}
				onDrop={handleDrop}
				data-dragging={isDragging || undefined}
				data-files={files.length > 0 || undefined}
				className="relative flex min-h-52 flex-col items-center not-data-[files]:justify-center overflow-hidden rounded-xl border border-input border-dashed p-4 transition-colors has-[input:focus]:border-ring has-[input:focus]:ring-[3px] has-[input:focus]:ring-ring/50 data-[dragging=true]:bg-accent/50"
			>
				<input
					{...getInputProps()}
					className="sr-only"
					aria-label="Upload image file"
				/>
				{files.length > 0 ? (
					<div className="flex w-full flex-col gap-3">
						<div className="flex items-center justify-between gap-2">
							<h3 className="truncate font-medium text-sm">
								Files ({files.length})
							</h3>
							<div className="flex gap-2">
								<Button variant="outline" size="sm" onClick={openFileDialog}>
									<UploadIcon
										className="-ms-0.5 size-3.5 opacity-60"
										aria-hidden="true"
									/>
									Add files
								</Button>
								<Button variant="outline" size="sm" onClick={clearFiles}>
									<Trash2Icon
										className="-ms-0.5 size-3.5 opacity-60"
										aria-hidden="true"
									/>
									Remove all
								</Button>
							</div>
						</div>

						<div className="grid grid-cols-2 gap-4 md:grid-cols-3">
							{files.map((file) => (
								<div
									key={file.id}
									className="relative flex flex-col rounded-md border bg-background"
								>
									{getFilePreview(file)}
									<Button
										onClick={() => removeFile(file.id)}
										size="icon"
										className="-top-2 -right-2 absolute size-6 rounded-full border-2 border-background shadow-none focus-visible:border-background"
										aria-label="Remove image"
									>
										<XIcon className="size-3.5" />
									</Button>
									<div className="flex min-w-0 flex-col gap-0.5 border-t p-3">
										<p className="truncate font-medium text-[13px]">
											{file.file.name}
										</p>
										<p className="truncate text-muted-foreground text-xs">
											{formatBytes(file.file.size)}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				) : (
					<div className="flex flex-col items-center justify-center px-4 py-3 text-center">
						<div
							className="mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border bg-background"
							aria-hidden="true"
						>
							<ImageIcon className="size-4 opacity-60" />
						</div>
						<p className="mb-1.5 font-medium text-sm">Drop your files here</p>
						<p className="text-muted-foreground text-xs">
							Max {maxFiles} files ∙ Up to {maxSizeMB}MB
						</p>
						<Button variant="outline" className="mt-4" onClick={openFileDialog}>
							<UploadIcon className="-ms-1 opacity-60" aria-hidden="true" />
							Select images
						</Button>
					</div>
				)}
			</div>

			{errors.length > 0 && (
				<div
					className="flex items-center gap-1 text-destructive text-xs"
					role="alert"
				>
					<AlertCircleIcon className="size-3 shrink-0" />
					<span>{errors[0]}</span>
				</div>
			)}
		</div>
	);
}
