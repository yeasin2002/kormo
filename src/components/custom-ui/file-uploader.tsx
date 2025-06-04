"use client";

import { Label } from "@/components/retroui";

import { FileText, Upload } from "lucide-react";

type Props = {
  file?: File | null;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFileChange?: (file: File | null) => void;
};

export const FileUploader = ({ file, handleFileChange }: Props) => {
  return (
    <div>
      <Label htmlFor="resume" className="text-lg font-bold mb-2 block">
        Upload Your Resume
      </Label>
      <div className="border-2 border-dashed border-border rounded-xl p-8 text-center bg-background">
        <input
          id="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="hidden"
        />
        <label
          htmlFor="resume"
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
                Drag & drop your resume here
              </p>
              <p className="text-muted-foreground">
                or{" "}
                <span className="text-purple-500 font-bold">browse files</span>{" "}
                (PDF, DOC, DOCX)
              </p>
            </>
          )}
        </label>
      </div>
    </div>
  );
};
