"use client";

import { Button, Label } from "@/components/retroui";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Sparkles } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { ComboSelect, FileUploader, InputCombo } from "@/components/custom-ui";
import { writingTones } from "@/data/writing-tone.data";
import {
  aiCoverLetterSchema,
  aiCoverLetterSchemaValues,
  CoverLetterFeatures,
  CoverLetterHeading,
  DecorativeElements,
} from "@/features/ai-cover-letter";

export default function CoverLetterGenerator() {
  // const [file, setFile] = useState<File | null>(null);
  const [tone, setTone] = useState("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<aiCoverLetterSchemaValues>({
    resolver: zodResolver(aiCoverLetterSchema),
  });

  const onSubmit = async (data: aiCoverLetterSchemaValues) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        <CoverLetterHeading />
        <DecorativeElements />
        {/* Main Content */}
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Page Title */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
                AI Cover Letter{" "}
                <span className="text-purple-500">Generator</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Create a professional, tailored cover letter in seconds with our
                AI-powered tool.
              </p>
            </div>

            <div className="bg-card border-4 border-border rounded-3xl p-8 shadow-xl">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <Controller
                  name="cv"
                  control={control}
                  render={({ field }) => (
                    <FileUploader
                      handleFileChange={(e) => {
                        const file =
                          e.target.files && e.target.files[0]
                            ? e.target.files[0]
                            : null;
                        field.onChange(file);
                      }}
                      file={
                        field.value instanceof FileList
                          ? field.value[0] ?? null
                          : field.value
                      }
                      onFileChange={(file) => {
                        field.onChange(file);
                      }}
                    />
                  )}
                />

                <InputCombo
                  id="email"
                  type="email"
                  label="Email Address"
                  placeholder="example@email.com"
                  icon={Mail}
                  error={errors.jobTitle}
                  registration={register("jobTitle")}
                />

                <div>
                  <Label
                    htmlFor="jobDescription"
                    className="text-lg font-bold mb-2 block"
                  >
                    Job Description
                  </Label>
                  <Textarea
                    {...register("jobDescription")}
                    placeholder="Paste the full job description here..."
                    className="bg-background border-2 border-border rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-purple-400 min-h-[150px]"
                    required
                  />
                </div>

                <InputCombo
                  id="yourName"
                  label="Your Name"
                  placeholder="John Doe"
                  icon={Mail}
                  error={errors.yourName}
                  registration={register("yourName")}
                />

                <InputCombo
                  id="additionalInstructions"
                  type="text"
                  label="Additional Instructions"
                  placeholder="your proms"
                  error={errors.additionalInstructions}
                  registration={register("additionalInstructions")}
                />

                <div>
                  <Label
                    htmlFor="tone"
                    className="text-lg font-bold mb-2 block"
                  >
                    Cover Letter Tone
                  </Label>
                  <ComboSelect
                    value={tone}
                    setValue={setTone}
                    menuItem={writingTones}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full  font-bold py-2 text-lg rounded-lg shadow-lg  flex items-center justify-center space-x-2 group"
                  disabled={isSubmitting}
                >
                  <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
                  <span>Generate Cover Letter</span>
                </Button>
              </form>

              <CoverLetterFeatures />
            </div>
          </div>
        </main>
        {/* Floating Elements */}
        <div className="fixed bottom-6 right-6 bg-yellow-400 text-black px-4 py-2 rounded-lg border-2 border-black shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300 hidden md:block">
          <span className="text-sm font-bold">AI-Powered ✨</span>
        </div>
      </div>
    </>
  );
}
