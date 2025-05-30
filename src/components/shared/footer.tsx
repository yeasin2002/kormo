import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Twitter,
} from "lucide-react";
import { Button } from "../retroui";
import { Input } from "../retroui/Input";

export const Footer = () => {
  return (
    <footer className="border-t-4 border-border bg-card mt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Newsletter Signup Section */}
          <div className="bg-yellow-400 rounded-2xl p-8 lg:p-12 border-4 border-black shadow-xl mb-16 relative overflow-hidden">
            <div className="relative z-10 text-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                Stay in the <span className="underline">loop</span>
              </h3>
              <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
                Get the latest updates, design tips, and exclusive templates
                delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white border-2 border-black rounded-lg px-4 py-3 text-black placeholder:text-gray-500 focus:ring-2 focus:ring-black"
                />
                <Button className="bg-black text-white hover:bg-gray-800 border-2 border-black rounded-lg px-6 py-3 font-semibold flex items-center space-x-2">
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 text-black/20">
              <Sparkles className="w-8 h-8" />
            </div>
            <div className="absolute bottom-4 left-4 text-black/20">
              <Sparkles className="w-6 h-6" />
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-background rounded-full" />
                </div>
                <span className="text-2xl font-bold text-foreground">
                  RetroUI
                </span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Building unique and playful websites with React, Tailwind CSS,
                and modern design principles.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-2 border-border hover:bg-muted rounded-lg"
                >
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-2 border-border hover:bg-muted rounded-lg"
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-2 border-border hover:bg-muted rounded-lg"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-2 border-border hover:bg-muted rounded-lg"
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-lg font-bold text-foreground mb-6">
                Product
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Components
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Templates
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Figma Kit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Changelog
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="text-lg font-bold text-foreground mb-6">
                Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-bold text-foreground mb-6">
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t-2 border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-muted-foreground text-center md:text-left">
                © 2024 RetroUI. All rights reserved. Made with ❤️ for creators.
              </p>
              <div className="flex items-center space-x-6">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
