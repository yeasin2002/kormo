'use client';

import { Button, Label } from '@/components/retroui';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircleIcon, Mail, Sparkles, User } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';

import { ComboSelect, InputCombo, LoaderDots, TextareaCombo } from '@/components/custom-ui';
import DocUpload from '@/components/custom-ui/doc-upload';
import { writingTones } from '@/data/writing-tone.data';
import { aiCoverLetterSchema, aiCoverLetterSchemaValues } from '@/features/ai-cover-letter';
import { useFileUpload } from '@/hooks/use-file-upload';
import { Suitcase } from 'iconoir-react';
import { useEffect } from 'react';
import { extractTextFromPdf } from './helper/pdf-to-text';

const maxSizeMB = 5;
const maxSize = maxSizeMB * 1024 * 1024;

type Props = {
  onSubmitComplete: ({
    data,
    cvText,
  }: {
    data: aiCoverLetterSchemaValues;
    cvText: string;
  }) => Promise<void>;
};

export const AiCoverMainForm = ({ onSubmitComplete }: Props) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,

    formState: { errors, isSubmitting },
  } = useForm<aiCoverLetterSchemaValues>({
    resolver: zodResolver(aiCoverLetterSchema),
  });

  const [{ files, isDragging, errors: fileErrors }, action] = useFileUpload({
    accept: '.pdf',
    maxSize,
  });

  useEffect(() => {
    const actualFile = files[0]?.file instanceof File ? files[0].file : null;
    setValue('cv', actualFile);

    return () => {
      setValue('cv', null);
    };
  }, [files, setValue]);

  const onSubmit = async (data: aiCoverLetterSchemaValues) => {
    try {
      console.log(data);
      const result = await extractTextFromPdf(data.cv!);

      onSubmitComplete({
        data,
        cvText: result.text,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <DocUpload
        state={{ files, isDragging, errors: fileErrors }}
        action={action}
        maxSizeMB={maxSizeMB}
        err={errors?.cv?.message?.toString()}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <InputCombo
          id="email"
          type="email"
          label="Email Address"
          placeholder="example@email.com"
          icon={Mail}
          error={errors.jobTitle}
          registration={register('jobTitle')}
        />

        <InputCombo
          id="yourName"
          label="Your Name"
          placeholder="John Doe"
          icon={User}
          error={errors.yourName}
          registration={register('yourName')}
        />
      </div>

      <div className="flex items-center gap-4">
        <InputCombo
          id="jobTitle"
          label="Job Title"
          placeholder="Enter the job title here..."
          icon={Suitcase}
          error={errors.jobTitle}
          registration={register('jobTitle')}
          wrapperClassName="w-full"
        />

        <div>
          <Label htmlFor="tone" className="text-foreground text-sm font-bold">
            Cover Letter Tone
          </Label>
          <Controller
            name="coverLetterTone"
            control={control}
            render={({ field }) => (
              <ComboSelect
                value={field.value}
                onValueChange={field.onChange}
                menuItem={writingTones}
                label="Select Tone"
                className="!bg-card rounded-lg py-3.5 text-sm"
              />
            )}
          />
          {errors.coverLetterTone && (
            <div className="text-destructive mt-2 flex items-center gap-1 text-xs" role="alert">
              <AlertCircleIcon className="size-3 shrink-0" />
              <span>{errors.coverLetterTone.message}</span>
            </div>
          )}
        </div>
      </div>

      <TextareaCombo
        label="Job Description"
        placeholder="Enter the job description here..."
        required
        registration={register('jobDescription')}
        errors={errors.jobDescription?.message}
      />

      <TextareaCombo
        label="Additional Instructions"
        placeholder="Write your Prompt here..."
        required
        registration={register('additionalInstructions')}
        errors={errors.additionalInstructions?.message}
      />

      <Button
        type="submit"
        className="group flex min-h-14 w-full items-center justify-center space-x-2 rounded-lg py-2 text-lg font-bold shadow-lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <LoaderDots />
        ) : (
          <>
            <Sparkles className="h-5 w-5 group-hover:animate-pulse" />
            <span>Generate Cover Letter</span>
          </>
        )}
      </Button>
    </form>
  );
};
