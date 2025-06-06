import { EosIconsLoading } from '@/components/icons';
import { Button } from '@/components/retroui';
import { TextSkeleton } from '@/components/skeletons';
import { Copy } from 'lucide-react';
type Props = {
  isCoverLetterGenerating: boolean;
};

export const AiCoverLetterMainResponse = ({ isCoverLetterGenerating }: Props) => {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="mb-4 flex items-center gap-x-2 text-2xl font-bold">
          {isCoverLetterGenerating ? (
            <>
              <span>Generating your cover letter.......</span>
              <EosIconsLoading />
            </>
          ) : (
            'Your AI-Generated Cover Letter'
          )}
        </h2>
        <Button className="gap-x-2">
          <Copy className="size-4" />
          <span>Copy</span>
        </Button>
      </div>

      {isCoverLetterGenerating ? (
        <div className="flex flex-col items-center justify-center space-y-7">
          <TextSkeleton className="w-full min-w-full" />
          <span className="text-center text-gray-500">
            This might take some times, please be patient
          </span>
        </div>
      ) : (
        <p>
          🧃 Minimal Cover Letter (To the Point) Hey Fahim, I’m Yeasin—a student and software
          engineer who loves working with JavaScript frameworks like Nuxt and building real-world
          products. I saw your opening for a part-time Full Stack Dev and it’s exactly the kind of
          opportunity I’m looking for. I’ve built full stack projects (like a hotel management
          system using Nuxt and MongoDB) and have solid experience across frontend and backend. I’m
          familiar with Next.js and can get up to speed fast. 20 hours a week sounds perfect and I’m
          pumped to contribute to a startup MVP. Attaching my resume. Would love to chat more! Best,
          Yeasin
        </p>
      )}
    </div>
  );
};
