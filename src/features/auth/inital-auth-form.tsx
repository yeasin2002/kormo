"use client";

import { Input } from "@/components/retroui";
import { SparklesStars } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Github, Google } from "iconoir-react";
import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AuthForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className=" bg-background text-foreground relative overflow-hidden">
        <SparklesStars />
        {/* Main Login Content */}
        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            {/* Login Card */}
            <div className="bg-card border-4 border-border rounded-3xl p-8 shadow-2xl relative">
              {/* Welcome Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-yellow-400 text-black px-6 py-2 rounded-full border-2 border-black shadow-lg font-bold text-sm">
                  Welcome Back!
                </div>
              </div>

              {/* Header */}
              <div className="text-center mb-8 mt-4">
                <h1 className="text-3xl lg:text-4xl font-black mb-2">
                  Sign <span className="text-yellow-500">In</span>
                </h1>
                <p className="text-muted-foreground">
                  Access your account to continue building amazing things
                </p>
              </div>

              {/* Login Form */}
              <form className="space-y-6">
                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 bg-background border-2 border-border rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-bold text-foreground mb-2"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 pr-10 bg-background border-2 border-border rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
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
                    className="text-yellow-600 hover:text-yellow-500 font-medium transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Sign In Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-bold py-3 text-lg rounded-lg shadow-lg border-2 border-black flex items-center justify-center space-x-2 group"
                >
                  <span>Sign In</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>

              {/* Divider */}
              <div className="my-6 flex items-center">
                <div className="flex-1 border-t-2 border-border"></div>
                <span className="px-4 text-sm font-bold text-muted-foreground bg-card">
                  OR
                </span>
                <div className="flex-1 border-t-2 border-border"></div>
              </div>

              {/* Social Login */}
              <div className="space-y-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full bg-background text-foreground border-2 border-border hover:bg-muted font-semibold py-3 rounded-lg shadow-sm flex items-center justify-center space-x-2"
                >
                  <Github className="w-5 h-5" />
                  <span>Continue with GitHub</span>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full bg-background text-foreground border-2 border-border hover:bg-muted font-semibold py-3 rounded-lg shadow-sm flex items-center justify-center space-x-2"
                >
                  <Google />
                  <span>Continue with Google</span>
                </Button>
              </div>

              {/* Sign Up Link */}
              <div className="mt-8 text-center">
                <p className="text-muted-foreground">
                  {`Don't`} have an account?{" "}
                  <Link
                    href="/signup"
                    className="text-yellow-600 hover:text-yellow-500 font-bold transition-colors"
                  >
                    Sign up for free
                  </Link>
                </p>
              </div>
            </div>

            {/* Security Notice */}
            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground">
                🔒 Your data is protected with industry-standard encryption
              </p>
            </div>
          </div>
        </div>

        {/* Fun Login Badge */}
        {/* <div className="fixed bottom-6 right-6 bg-blue-400 text-black px-4 py-2 rounded-lg border-2 border-black shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
          <span className="text-sm font-bold">Secure Login ✨</span>
        </div> */}
      </div>
    </>
  );
}
