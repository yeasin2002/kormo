"use client";

import { Label } from "@/components/retroui";
import { FileText, Upload } from "lucide-react";
import { useCallback } from "react";

type Props = {
  file: File | null;
  onFileChange: (file: File | null) => void;
  label?: string;
  accept?: string;
  maxSize?: number; // in MB
};

export const FileUploader = ({
  file,
  onFileChange,
  label = "Upload Your Resume",
  accept = ".pdf,.doc,.docx",
  maxSize = 5, // 5MB default
}: Props) => {
  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (!files || files.length === 0) {
        onFileChange(null);
        return;
      }

      const selectedFile = files[0];
      // Check file size (convert maxSize from MB to bytes)
      if (selectedFile.size > maxSize * 1024 * 1024) {
        alert(`File size must be less than ${maxSize}MB`);
        return;
      }

      onFileChange(selectedFile);
    },
    [maxSize, onFileChange]
  );

  const handleDragOver = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
    },
    []
  );

  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();

      const files = event.dataTransfer.files;
      if (!files || files.length === 0) return;

      const droppedFile = files[0];

      // Check if the file type is accepted
      if (
        !accept
          .split(",")
          .some((type) =>
            droppedFile.name
              .toLowerCase()
              .endsWith(type.trim().replace(".", ""))
          )
      ) {
        alert("Please upload a valid file type");
        return;
      }

      // Check file size
      if (droppedFile.size > maxSize * 1024 * 1024) {
        alert(`File size must be less than ${maxSize}MB`);
        return;
      }

      onFileChange(droppedFile);
    },
    [accept, maxSize, onFileChange]
  );

  return (
    <div>
      <Label htmlFor="file-upload" className="text-lg font-bold mb-2 block">
        {label}
      </Label>
      <div
        className="border-2 border-dashed border-border rounded-xl p-8 text-center bg-background"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          id="file-upload"
          type="file"
          accept={accept}
          onChange={handleFileChange}
          className="hidden"
        />
        <label
          htmlFor="file-upload"
          className="flex flex-col items-center justify-center cursor-pointer"
        >
          <Upload className="w-12 h-12 text-muted-foreground mb-4" />
          {file ? (
            <div className="flex items-center space-x-2 text-foreground">
              <FileText className="w-5 h-5" />
              <span className="font-medium">{file.name}</span>
            </div>
          ) : (
            <>
              <p className="text-lg font-bold text-foreground mb-1">
                Drag & drop your file here
              </p>
              <p className="text-muted-foreground">
                or{" "}
                <span className="text-purple-500 font-bold">browse files</span>{" "}
                {accept.replace(/\./g, "").toUpperCase()}
              </p>
            </>
          )}
        </label>
      </div>
    </div>
  );
};
