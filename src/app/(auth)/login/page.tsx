"use client";

import { LoaderDots } from "@/components/custom-ui/loader-dots";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { AuthInput } from "@/features/auth/auth-input";
import { PasswordInput } from "@/features/auth/password-input";
import { SocialLoginLink } from "@/features/auth/social-login-link";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().default(true).optional(),
});
type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: true,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      console.log(data);
      // TODO: Implement login functionality
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center px-6 py-4 md:py-12">
        <div className="w-full max-w-md">
          <div className="bg-card border-4 border-border rounded-3xl p-8 shadow-2xl relative">
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
              <p className="text-muted-foreground text-sm">
                Login to explore our amazing opportunities.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <AuthInput
                id="email"
                type="email"
                label="Email Address"
                placeholder="your@email.com"
                icon={Mail}
                error={errors.email}
                registration={register("email")}
              />

              <PasswordInput
                id="password"
                label="Password"
                placeholder="Enter your password"
                error={errors.password}
                registration={register("password")}
              />

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <Checkbox {...register("rememberMe")} defaultChecked={true} />
                  <span className="text-foreground font-medium">
                    Remember me
                  </span>
                </label>
                <Link
                  href="/"
                  className="text-yellow-600 hover:text-yellow-500 font-medium transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-bold py-3 text-lg rounded-lg shadow-lg border-2 border-black flex items-center justify-center space-x-2 group"
              >
                {!isSubmitting ? (
                  <>
                    <span> Sign in </span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                ) : (
                  <LoaderDots className="-translate-x-9" />
                )}
              </Button>
            </form>
            <SocialLoginLink isLoginPage />
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              🔒 Your data is protected with industry-standard encryption
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
