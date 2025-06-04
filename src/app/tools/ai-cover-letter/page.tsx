"use client";

import type React from "react";

import { Input, Label } from "@/components/retroui";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

import {
  AlertCircle,
  CheckCircle,
  FileText,
  Sparkles,
  Upload,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function CoverLetterGenerator() {
  const [file, setFile] = useState<File | null>(null);
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [candidateName, setCandidateName] = useState("");
  const [instructions, setInstructions] = useState("");
  const [tone, setTone] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [coverLetter, setCoverLetter] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    // Simulate API call with timeout
    setTimeout(() => {
      setIsGenerating(false);
      setCoverLetter(`Dear Hiring Manager,

I am writing to express my enthusiastic interest in the ${jobTitle} position at your company. With my background and skills, I believe I would be a valuable addition to your team.

[This is where the AI-generated cover letter would appear, tailored to the job description and using the ${tone} tone as requested.]

Thank you for considering my application. I look forward to the opportunity to discuss how my qualifications align with your needs.

Sincerely,
${candidateName}`);
      setShowResult(true);
    }, 2000);
  };

  const tones = [
    "Appreciative",
    "Assertive",
    "Awestruck",
    "Candid",
    "Casual",
    "Cautionary",
    "Compassionate",
    "Convincing",
    "Critical",
    "Earnest",
    "Enthusiastic",
    "Formal",
    "Funny",
    "Humble",
    "Humorous",
    "Informative",
    "Inspirational",
    "Joyful",
    "Passionate",
    "Thoughtful",
  ];

  return (
    <>
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        {/* Header */}
        <header className="border-b-2 border-border bg-card">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-background rounded-full" />
                </div>
                <span className="text-xl font-bold">TechJobs</span>
              </Link>

              {/* Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link
                  href="/jobs"
                  className="text-foreground hover:text-yellow-500 font-medium transition-colors"
                >
                  Jobs
                </Link>
                <Link
                  href="/login"
                  className="text-foreground hover:text-yellow-500 font-medium transition-colors"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Decorative Elements */}
        <div className="absolute top-40 left-10 text-foreground opacity-20">
          <Sparkles className="w-16 h-16" />
        </div>
        <div className="absolute bottom-40 right-10 text-yellow-500 opacity-30">
          <Sparkles className="w-12 h-12" />
        </div>
        <div className="absolute top-1/3 right-20 text-purple-500 opacity-20">
          <Zap className="w-20 h-20" />
        </div>

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

            {!showResult ? (
              <div className="bg-card border-4 border-border rounded-3xl p-8 shadow-xl">
                <form onSubmit={handleGenerate} className="space-y-6">
                  {/* Resume Upload */}
                  <div>
                    <Label
                      htmlFor="resume"
                      className="text-lg font-bold mb-2 block"
                    >
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
                              <span className="text-purple-500 font-bold">
                                browse files
                              </span>{" "}
                              (PDF, DOC, DOCX)
                            </p>
                          </>
                        )}
                      </label>
                    </div>
                  </div>

                  {/* Job Title */}
                  <div>
                    <Label
                      htmlFor="jobTitle"
                      className="text-lg font-bold mb-2 block"
                    >
                      Job Title
                    </Label>
                    <Input
                      id="jobTitle"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      placeholder="e.g. Frontend Developer"
                      className="bg-background border-2 border-border rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-purple-400"
                      required
                    />
                  </div>

                  {/* Job Description */}
                  <div>
                    <Label
                      htmlFor="jobDescription"
                      className="text-lg font-bold mb-2 block"
                    >
                      Job Description
                    </Label>
                    <Textarea
                      id="jobDescription"
                      value={jobDescription}
                      onChange={(e) => setJobDescription(e.target.value)}
                      placeholder="Paste the full job description here..."
                      className="bg-background border-2 border-border rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-purple-400 min-h-[150px]"
                      required
                    />
                  </div>

                  {/* Candidate Name */}
                  <div>
                    <Label
                      htmlFor="candidateName"
                      className="text-lg font-bold mb-2 block"
                    >
                      Your Name
                    </Label>
                    <Input
                      id="candidateName"
                      value={candidateName}
                      onChange={(e) => setCandidateName(e.target.value)}
                      placeholder="e.g. John Smith"
                      className="bg-background border-2 border-border rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-purple-400"
                      required
                    />
                  </div>

                  {/* Additional Instructions */}
                  <div>
                    <Label
                      htmlFor="instructions"
                      className="text-lg font-bold mb-2 block"
                    >
                      Additional Instructions (Optional)
                    </Label>
                    <Input
                      id="instructions"
                      value={instructions}
                      onChange={(e) => setInstructions(e.target.value)}
                      placeholder="e.g. Highlight my project management experience"
                      className="bg-background border-2 border-border rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-purple-400"
                    />
                  </div>

                  {/* Cover Letter Tone */}
                  <div>
                    <Label
                      htmlFor="tone"
                      className="text-lg font-bold mb-2 block"
                    >
                      Cover Letter Tone
                    </Label>
                    <Select value={tone} onValueChange={setTone} required>
                      <SelectTrigger className="bg-background border-2 border-border rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-purple-400">
                        <SelectValue placeholder="Select a tone" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border-2 border-border">
                        {tones.map((t) => (
                          <SelectItem
                            key={t}
                            value={t}
                            className="focus:bg-purple-100 dark:focus:bg-purple-900"
                          >
                            {t}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Generate Button */}
                  <Button
                    type="submit"
                    disabled={isGenerating}
                    className="w-full bg-purple-500 text-white hover:bg-purple-600 font-bold py-4 text-lg rounded-lg shadow-lg border-2 border-black flex items-center justify-center space-x-2 group"
                  >
                    {isGenerating ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                        <span>Generating...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
                        <span>Generate Cover Letter</span>
                      </>
                    )}
                  </Button>
                </form>

                {/* Features */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-yellow-100 dark:bg-yellow-900/20 border-2 border-border rounded-xl p-4 shadow-md">
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                      <span className="font-bold">AI-Powered</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Our AI analyzes your resume and the job description to
                      create a tailored cover letter.
                    </p>
                  </div>
                  <div className="bg-purple-100 dark:bg-purple-900/20 border-2 border-border rounded-xl p-4 shadow-md">
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      <span className="font-bold">Customizable</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Choose from 20 different tones to match the company
                      culture and your personality.
                    </p>
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900/20 border-2 border-border rounded-xl p-4 shadow-md">
                    <div className="flex items-center space-x-2 mb-2">
                      <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="font-bold">Professional</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Get a professionally written cover letter that highlights
                      your relevant skills and experience.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-card border-4 border-border rounded-3xl p-8 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Your Cover Letter</h2>
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      className="border-2 border-border hover:bg-muted"
                      onClick={() => setShowResult(false)}
                    >
                      Edit
                    </Button>
                    <Button className="bg-purple-500 text-white hover:bg-purple-600 border-2 border-black">
                      Download
                    </Button>
                  </div>
                </div>

                <div className="bg-background border-2 border-border rounded-xl p-6 mb-6">
                  <pre className="whitespace-pre-wrap font-sans text-foreground">
                    {coverLetter}
                  </pre>
                </div>

                <div className="bg-yellow-100 dark:bg-yellow-900/20 border-2 border-border rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Sparkles className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                    <span className="font-bold">Pro Tip</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Always personalize your cover letter further before sending.
                    Add specific details about the company and why {`you're`}
                    excited about this particular role.
                  </p>
                </div>
              </div>
            )}
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
