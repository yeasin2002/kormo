"use client";

import { Button, Input } from "@/components/retroui";
import { Eye, EyeOff, Mail, QrCode, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Left Side - Login Form */}
          <div className="flex items-center justify-center p-6 lg:p-12 relative">
            {/* Mobile Header */}
            <div className="absolute top-6 left-6 lg:hidden">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-background rounded-full" />
                </div>
                <span className="text-xl font-bold">TechJobs</span>
              </Link>
            </div>

            <div className="w-full max-w-md">
              {/* Login Form */}
              <form className="space-y-6">
                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-foreground mb-3"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-background border-2 border-border rounded-lg px-4 py-4 text-base focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 pr-12"
                      required
                    />
                    <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-bold text-foreground mb-3"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-background border-2 border-border rounded-lg px-4 py-4 text-base focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 pr-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-2 border-border bg-background checked:bg-yellow-400 checked:border-black focus:ring-2 focus:ring-yellow-400"
                    />
                    <span className="text-foreground font-medium">
                      Remember me
                    </span>
                  </label>
                  <Link
                    // href="/forgot-password"
                    href="/"
                    className="text-foreground hover:text-yellow-500 font-medium transition-colors"
                  >
                    Recover password
                  </Link>
                </div>

                {/* Sign In Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-purple-500 text-white hover:bg-purple-600 font-bold py-4 text-lg rounded-lg shadow-lg border-2 border-black flex items-center justify-center space-x-2 group"
                >
                  <span>Sign in</span>
                </Button>
              </form>

              {/* Divider */}
              <div className="my-8 flex items-center">
                <div className="flex-1 border-t-2 border-border"></div>
                <span className="px-4 text-sm font-bold text-muted-foreground bg-background">
                  or
                </span>
                <div className="flex-1 border-t-2 border-border"></div>
              </div>

              {/* QR Code Login */}
              <Button
                variant="outline"
                size="lg"
                className="w-full bg-background text-foreground border-2 border-border hover:bg-muted font-semibold py-4 rounded-lg shadow-sm flex items-center justify-center space-x-2"
              >
                <QrCode className="w-5 h-5" />
                <span>Log in with QR code</span>
              </Button>

              {/* Sign Up Link */}
              <div className="mt-8">
                <p className="text-foreground">
                  You {`don't `}have an account?{" "}
                  <Link
                    href="/signup"
                    className="font-bold text-foreground hover:text-yellow-500 transition-colors"
                  >
                    Create an account
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Job Platform Content */}
          <div className="hidden lg:flex flex-col justify-center p-12 bg-gradient-to-br from-purple-400 via-purple-500 to-pink-400 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 text-black/20">
              <Sparkles className="w-16 h-16" />
            </div>
            <div className="absolute top-32 right-20 text-black/20">
              <Sparkles className="w-12 h-12" />
            </div>
            <div className="absolute bottom-20 left-16 text-black/20">
              <Sparkles className="w-20 h-20" />
            </div>

            {/* Floating Job Cards */}
            <div className="relative z-10">
              {/* Earnings Card */}
              <div className="absolute top-0 right-0 bg-white rounded-2xl p-4 border-2 border-black shadow-lg transform rotate-3 hover:rotate-0 transition-transform">
                <div className="text-xs text-gray-600 mb-1">Money in</div>
                <div className="text-2xl font-black text-black">$45,230.50</div>
                <div className="flex justify-between text-xs text-gray-600 mt-2">
                  <div>
                    <div className="font-bold">2,145</div>
                    <div>Earned</div>
                  </div>
                  <div>
                    <div className="font-bold">1,890</div>
                    <div>Jobs</div>
                  </div>
                </div>
              </div>

              {/* Job Stats Card */}
              <div className="absolute top-20 left-0 bg-white rounded-2xl p-4 border-2 border-black shadow-lg transform -rotate-2 hover:rotate-0 transition-transform">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-600">Active</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-xl font-black text-black">127 Jobs</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-green-400 h-2 rounded-full w-3/4"></div>
                </div>
              </div>

              {/* Profile Card */}
              <div className="absolute top-40 right-20 bg-white rounded-2xl p-4 border-2 border-black shadow-lg transform rotate-1 hover:rotate-0 transition-transform">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">JS</span>
                  </div>
                  <div>
                    <div className="font-bold text-black text-sm">
                      John Smith
                    </div>
                    <div className="text-xs text-gray-600">
                      john@techcorp.com
                    </div>
                  </div>
                </div>
                <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full inline-block">
                  Available
                </div>
                <div className="flex justify-between mt-3 text-xs">
                  <div>
                    <div className="font-bold text-black">$85.00</div>
                    <div className="text-gray-600">Rate/hr</div>
                  </div>
                  <div>
                    <div className="font-bold text-black">24</div>
                    <div className="text-gray-600">Projects</div>
                  </div>
                </div>
              </div>

              {/* Job Task Cards */}
              <div className="absolute bottom-0 left-10 space-y-3">
                <div className="bg-purple-100 rounded-lg p-3 border-2 border-black shadow-md transform -rotate-1">
                  <div className="text-xs text-purple-600 mb-1">
                    🎨 Design Task
                  </div>
                  <div className="font-bold text-black text-sm">
                    Update design system
                  </div>
                </div>
                <div className="bg-blue-100 rounded-lg p-3 border-2 border-black shadow-md transform rotate-2">
                  <div className="text-xs text-blue-600 mb-1">
                    📋 Management
                  </div>
                  <div className="font-bold text-black text-sm">
                    Assign new tasks
                  </div>
                </div>
                <div className="bg-green-100 rounded-lg p-3 border-2 border-black shadow-md transform -rotate-2">
                  <div className="text-xs text-green-600 mb-1">
                    💻 Development
                  </div>
                  <div className="font-bold text-black text-sm">
                    Build mobile app
                  </div>
                </div>
              </div>

              {/* Notification Cards */}
              <div className="absolute bottom-20 right-0 space-y-2">
                <div className="bg-white rounded-lg p-2 border-2 border-black shadow-md text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="font-bold">New job posted</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-2 border-2 border-black shadow-md text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="font-bold">Payment received</span>
                  </div>
                </div>
              </div>

              {/* Company Logos */}
              <div className="absolute top-60 left-20 flex space-x-2">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">G</span>
                </div>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">M</span>
                </div>
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">N</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-1/4 right-8 bg-yellow-400 text-black px-3 py-2 rounded-lg border-2 border-black shadow-lg transform rotate-12">
              <span className="text-sm font-bold">Hiring!</span>
            </div>
            <div className="absolute bottom-1/3 right-16 bg-white text-black px-3 py-2 rounded-lg border-2 border-black shadow-lg transform -rotate-6">
              <span className="text-sm font-bold">Remote</span>
            </div>
            <div className="absolute top-1/2 left-8 bg-green-400 text-black px-3 py-2 rounded-lg border-2 border-black shadow-lg transform rotate-6">
              <span className="text-sm font-bold">$120/hr</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
