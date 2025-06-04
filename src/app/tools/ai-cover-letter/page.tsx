"use client";

import {
  AiCoverLetterMainResponse,
  aiCoverLetterSchemaValues,
  CoverLetterFeatures,
  CoverLetterHeading,
  DecorativeElements,
} from "@/features/ai-cover-letter";
import { AiCoverMainForm } from "@/features/ai-cover-letter/ai-cover-main-form";
import { useState } from "react";

export default function CoverLetterGenerator() {
  const [isNext, setIsNext] = useState(false);

  const onSubmit = async (data: aiCoverLetterSchemaValues) => {
    try {
      console.log(data);
      setIsNext(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        <DecorativeElements />

        <main className="container mx-auto px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <CoverLetterHeading />

            <div className="bg-card border-4 border-border rounded-3xl p-8 shadow-xl">
              {isNext ? (
                <AiCoverLetterMainResponse />
              ) : (
                <AiCoverMainForm onSubmit={onSubmit} />
              )}
              {isNext || <CoverLetterFeatures />}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
