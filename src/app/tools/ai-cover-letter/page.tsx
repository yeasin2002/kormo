'use client';

import {
  AiCoverLetterMainResponse,
  aiCoverLetterSchemaValues,
  CoverLetterFeatures,
  CoverLetterHeading,
  DecorativeElements,
} from '@/features/ai-cover-letter';
import { AiCoverMainForm } from '@/features/ai-cover-letter/ai-cover-main-form';
import { AiCoverLetterResponse } from '@/features/ai-cover-letter/helper/ai-cover-letter-response';
import { useState } from 'react';

export default function CoverLetterGenerator() {
  const [isNext, setIsNext] = useState(false);
  const [isCoverLetterGenerating, setIsCoverLetterGenerating] = useState(false);

  const onSubmitComplete = async ({
    data,
    cvText,
  }: {
    data: aiCoverLetterSchemaValues;
    cvText: string;
  }) => {
    try {
      console.table({ data, cvText });

      setIsCoverLetterGenerating(true);
      setIsNext(true);

      // final part

      const finalResponse = await AiCoverLetterResponse();
      console.log(finalResponse);
    } catch (error) {
      console.error(error);
    } finally {
      setIsCoverLetterGenerating(false);
    }
  };

  return (
    <>
      <div className="bg-background text-foreground relative min-h-screen overflow-hidden">
        <DecorativeElements />

        <main className="container mx-auto px-6 py-12">
          <div className="mx-auto max-w-7xl">
            <CoverLetterHeading />

            <div className="bg-card border-border rounded-3xl border-4 p-8 shadow-xl">
              {isNext ? (
                <AiCoverLetterMainResponse isCoverLetterGenerating={isCoverLetterGenerating} />
              ) : (
                <AiCoverMainForm onSubmitComplete={onSubmitComplete} />
              )}
              {isNext || <CoverLetterFeatures />}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
