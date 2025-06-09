import { Text } from '@/components/retroui';
import { ToolsCardItem } from './tools-card-item';

const tools = [
  {
    title: 'AI Cover Letter Generator',
    description:
      'This tool helps you generate a professional AI-driven cover letter quickly and easily, tailored to the job description and your resume.',
    link: '/tools/ai-cover-letter',
  },
  {
    title: 'Image to Text extractor',
    description: `This tool helps you extract text from images, making it easier to work with text data.`,
    link: '/tools/ai-cover-letter',
  },
];

export const ToolsList = () => {
  return (
    <section className="mb-16">
      <Text as="h2" className="mb-2 text-black">
        Available Tools
      </Text>

      <div className="mt-7 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolsCardItem {...tool} key={tool.title} />
        ))}
        <div className="bg-card text-foreground flex size-full items-center justify-center rounded-lg border border-gray-700 p-6 shadow-lg">
          <p className="text-muted-foreground font-sans text-xl">Coming More!</p>
        </div>
      </div>
    </section>
  );
};
