'use client';

import { Label } from '@/components/retroui';
import { FileText, Upload } from 'lucide-react';
import { useCallback } from 'react';

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
  label = 'Upload Your Resume',
  accept = '.pdf,.doc,.docx',
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
    [maxSize, onFileChange],
  );

  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  }, []);

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
          .split(',')
          .some((type) => droppedFile.name.toLowerCase().endsWith(type.trim().replace('.', '')))
      ) {
        alert('Please upload a valid file type');
        return;
      }

      // Check file size
      if (droppedFile.size > maxSize * 1024 * 1024) {
        alert(`File size must be less than ${maxSize}MB`);
        return;
      }

      onFileChange(droppedFile);
    },
    [accept, maxSize, onFileChange],
  );

  return (
    <div>
      <Label htmlFor="file-upload" className="mb-2 block text-lg font-bold">
        {label}
      </Label>
      <div
        className="border-border bg-background rounded-xl border-2 border-dashed p-8 text-center"
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
          className="flex cursor-pointer flex-col items-center justify-center"
        >
          <Upload className="text-muted-foreground mb-4 h-12 w-12" />
          {file ? (
            <div className="text-foreground flex items-center space-x-2">
              <FileText className="h-5 w-5" />
              <span className="font-medium">{file.name}</span>
            </div>
          ) : (
            <>
              <p className="text-foreground mb-1 text-lg font-bold">Drag & drop your file here</p>
              <p className="text-muted-foreground">
                or <span className="font-bold text-purple-500">browse files</span>{' '}
                {accept.replace(/\./g, '').toUpperCase()}
              </p>
            </>
          )}
        </label>
      </div>
    </div>
  );
};
