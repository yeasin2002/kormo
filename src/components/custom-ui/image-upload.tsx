import { cn } from '@/lib/utils';
import { Loader2, Upload, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

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
        value: '',
      },
    } as unknown as React.ChangeEvent<HTMLInputElement>;
    onChange(event);
  };

  return (
    <div className="flex items-center space-x-4">
      <div
        className={cn(
          'group relative h-24 w-24 overflow-hidden rounded-lg border-2 border-dashed transition-all duration-200',
          isDragging ? 'scale-105 border-yellow-400 bg-yellow-50/10' : 'border-border',
          error ? 'border-red-500' : '',
          'hover:border-yellow-400 hover:bg-yellow-50/5',
        )}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {isLoading ? (
          <div className="flex h-full items-center justify-center">
            <Loader2 className="text-muted-foreground h-8 w-8 animate-spin" />
          </div>
        ) : previewImage ? (
          <div className="group relative h-full w-full">
            <Image
              src={previewImage}
              alt="Preview"
              fill
              className="object-cover transition-transform duration-200 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <button
                onClick={handleRemoveImage}
                className="rounded-full bg-red-500 p-1 text-white transition-colors hover:bg-red-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center p-2 text-center">
            <Upload className="text-muted-foreground mb-1 h-8 w-8 transition-colors group-hover:text-yellow-400" />
            <span className="text-muted-foreground text-xs">Drop or Click</span>
          </div>
        )}
        <input
          type="file"
          {...registration}
          onChange={handleChange}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          accept={acceptedTypes.join(',')}
        />
      </div>
      <div className="flex-1">
        <p className="text-muted-foreground text-sm">Upload a profile picture. Max size 5MB.</p>
        {error && <p className="mt-1 text-sm text-red-500">{error.message as string}</p>}
      </div>
    </div>
  );
};
