import { Github, Sun } from "lucide-react";
import React from "react";
import { Button } from "../retroui/Button";

export const NavBar = () => {
  return (
    <nav className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-8">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-black rounded-full" />
        </div>
        <span className="text-xl font-bold">RetroUI</span>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <a
          href="#"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Documentation
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Components
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Blogs
        </a>
      </div>

      <div className="flex items-center space-x-3">
        <Button
          variant="outline"
          size="sm"
          className="hidden sm:flex items-center space-x-2 bg-transparent border-gray-600 text-white hover:bg-gray-800"
        >
          <Github className="w-4 h-4" />
          <span>Star on GitHub</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="bg-transparent border-gray-600 text-white hover:bg-gray-800"
        >
          <Sun className="w-4 h-4" />
        </Button>
      </div>
    </nav>
  );
};
