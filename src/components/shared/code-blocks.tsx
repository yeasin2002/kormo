"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Button } from "../retroui/Button";

const CodeBlocks = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('npx shadcn add "retroui.dev/r/button.json"');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="flex items-center space-x-2 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 font-mono text-sm">
      <span className="text-gray-400">npx shadcn add</span>
      <span className="text-yellow-400">{`"retroui.dev/r/button.json"`}</span>
      <Button
        size="sm"
        onClick={copyToClipboard}
        className="h-6 w-6 p-0 text-gray-400 hover:text-white"
      >
        {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
      </Button>
    </div>
  );
};

export default CodeBlocks;
