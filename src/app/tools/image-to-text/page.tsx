'use client';

import { MultiMediaUploaderWithPreview } from '@/components/custom-ui/multi-file-with-preview-uploader';
import { Button } from '@/components/retroui';
import { useFileUpload } from '@/hooks/use-file-upload';
import { useState } from 'react';

const maxSizeMB = 5;
const maxSize = maxSizeMB * 1024 * 1024; // 5MB default
const maxFiles = 6;

export default function CoverLetterGenerator() {
  const [imgError, setImgError] = useState<string | null>(null);

  const [{ files, isDragging, errors: fileErrors }, action] = useFileUpload({
    accept: 'image/svg+xml,image/png,image/jpeg,image/jpg,image/gif',
    maxSize,
    multiple: true,
    maxFiles,
  });

  const handleSumit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (fileErrors.length > 0) {
      setImgError('Please upload a valid image.');
      return;
    }
    console.log('Files submitted:', files);
  };

  return (
    <>
      <div className="bg-background text-foreground relative min-h-screen overflow-hidden">
        <form
          className="bg-card border-border container mx-auto space-y-5 rounded-3xl border-4 p-8 px-6 py-12 shadow-xl"
          onSubmit={handleSumit}
        >
          <MultiMediaUploaderWithPreview
            actions={action}
            state={{ files, isDragging, errors: fileErrors }}
            maxSizeMB={maxSizeMB}
            maxFiles={maxFiles}
          />
          {imgError && <div className="text-destructive mt-2 text-sm">{imgError}</div>}
          <Button className="px-20 py-3" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}
