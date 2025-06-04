import { Button } from "@/components/retroui";
import { Copy } from "lucide-react";

export const AiCoverLetterMainResponse = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold mb-4">
          Your AI-Generated Cover Letter
        </h2>
        <Button className="gap-x-2">
          <Copy className="size-4" />
          <span>Copy</span>
        </Button>
      </div>
      <p>
        🧃 Minimal Cover Letter (To the Point) Hey Fahim, I’m Yeasin—a student
        and software engineer who loves working with JavaScript frameworks like
        Nuxt and building real-world products. I saw your opening for a
        part-time Full Stack Dev and it’s exactly the kind of opportunity I’m
        looking for. I’ve built full stack projects (like a hotel management
        system using Nuxt and MongoDB) and have solid experience across frontend
        and backend. I’m familiar with Next.js and can get up to speed fast. 20
        hours a week sounds perfect and I’m pumped to contribute to a startup
        MVP. Attaching my resume. Would love to chat more! Best, Yeasin
      </p>
    </div>
  );
};
