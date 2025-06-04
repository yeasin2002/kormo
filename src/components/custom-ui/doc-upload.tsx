"use client";

import { AlertCircleIcon, Check, ImageUpIcon } from "lucide-react";

import {
  type FileUploadState,
  FileUploadActions,
} from "@/hooks/use-file-upload";

type DocUploadProps = {
  state: FileUploadState;
  action: FileUploadActions;
  maxSizeMB?: number;
  err?: string | undefined;
};

export default function DocUpload({
  state,
  action,
  maxSizeMB,
  err,
}: DocUploadProps) {
  const { files, isDragging } = state;
  const {
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    openFileDialog,
    // removeFile,
    getInputProps,
  } = action;

  const previewUrl = files[0] || null;

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <div
          role="button"
          onClick={openFileDialog}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          data-dragging={isDragging || undefined}
          className="!bg-background border-input hover:bg-background data-[dragging=true]:bg-background has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[img]:border-none has-[input:focus]:ring-[3px]"
        >
          <input
            {...getInputProps()}
            className="sr-only"
            aria-label="Upload file"
          />
          <div className="flex flex-col items-center justify-center px-4 py-3 text-center">
            <div
              className="bg-card mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border"
              aria-hidden="true"
            >
              {previewUrl ? (
                <Check className="size-5 opacity-60 text-green-600" />
              ) : (
                <ImageUpIcon className="size-5 opacity-60" />
              )}
            </div>
            {!previewUrl ? (
              <>
                <p className="mb-1.5 text-sm font-medium">
                  Drag and drop your document here
                </p>

                <p className="text-muted-foreground text-xs">
                  Max size: {maxSizeMB}MB
                </p>
              </>
            ) : (
              <p>{previewUrl?.file?.name}</p>
            )}
          </div>
        </div>
      </div>

      {err && (
        <div
          className="text-destructive flex items-center gap-1 text-xs"
          role="alert"
        >
          <AlertCircleIcon className="size-3 shrink-0" />
          <span>{err}</span>
        </div>
      )}
    </div>
  );
}
