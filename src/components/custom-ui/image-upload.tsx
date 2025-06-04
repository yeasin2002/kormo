import { cn } from "@/lib/utils";
import { Loader2, Upload, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface ImageUploadProps {
  previewImage: string | null;
  registration: UseFormRegisterReturn;
  error?: FieldError;
  acceptedTypes: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ImageUpload = ({
  previewImage,
  registration,
  error,
  acceptedTypes,
  onChange,
}: ImageUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      const file = files[0];
      if (acceptedTypes.includes(file.type)) {
        const event = {
          target: {
            files: [file],
          },
        } as unknown as React.ChangeEvent<HTMLInputElement>;
        onChange(event);
      }
    }
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    await onChange(e);
    setIsLoading(false);
  };

  const handleRemoveImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const event = {
      target: {
        files: null,
        value: "",
      },
    } as unknown as React.ChangeEvent<HTMLInputElement>;
    onChange(event);
  };

  return (
    <div className="flex items-center space-x-4">
      <div
        className={cn(
          "relative w-24 h-24 border-2 border-dashed rounded-lg overflow-hidden transition-all duration-200 group",
          isDragging
            ? "border-yellow-400 bg-yellow-50/10 scale-105"
            : "border-border",
          error ? "border-red-500" : "",
          "hover:border-yellow-400 hover:bg-yellow-50/5"
        )}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <Loader2 className="w-8 h-8 text-muted-foreground animate-spin" />
          </div>
        ) : previewImage ? (
          <div className="relative w-full h-full group">
            <Image
              src={previewImage}
              alt="Preview"
              fill
              className="object-cover transition-transform duration-200 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
              <button
                onClick={handleRemoveImage}
                className="p-1 bg-red-500 rounded-full text-white hover:bg-red-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full p-2 text-center">
            <Upload className="w-8 h-8 text-muted-foreground mb-1 group-hover:text-yellow-400 transition-colors" />
            <span className="text-xs text-muted-foreground">Drop or Click</span>
          </div>
        )}
        <input
          type="file"
          {...registration}
          onChange={handleChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          accept={acceptedTypes.join(",")}
        />
      </div>
      <div className="flex-1">
        <p className="text-sm text-muted-foreground">
          Upload a profile picture. Max size 5MB.
        </p>
        {error && (
          <p className="text-red-500 text-sm mt-1">{error.message as string}</p>
        )}
      </div>
    </div>
  );
};
