"use client";

import { InputCombo } from "@/components/custom-ui/input-combo";
import { PasswordInput } from "@/components/custom-ui/password-input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ACCEPTED_IMAGE_TYPES,
  RegisterFormValues,
  registerSchema,
} from "@/features/auth/auth.schema";
import { ProfileImageUpload } from "@/features/auth/profile-image-upload";
import { SocialLoginLink } from "@/features/auth/social-login-link";
import { authClient as auth } from "@/lib/auth-client";
import { useEdgeStore } from "@/lib/edgestore";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Mail, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const { edgestore } = useEdgeStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      acceptTerms: true,
    },
  });

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      //  upload image
      const uploadedImage = await edgestore.publicFiles.upload({
        file: data.image?.[0],
        // onProgressChange: (progress) => {console.log(progress);},
      });

      const result = await auth.signUp.email({
        email: data.email,
        password: data.password,
        name: data.name,
        image: uploadedImage.url,
      });

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl">
          <div className="bg-card border-4 border-border rounded-3xl p-8 shadow-2xl relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-yellow-400 text-black px-6 py-2 rounded-full border-2 border-black shadow-lg font-bold text-sm">
                Create Account!
              </div>
            </div>

            <div className="text-center mb-8 mt-4">
              <h1 className="text-3xl lg:text-4xl font-black mb-2">
                Sign <span className="text-yellow-500">Up</span>
              </h1>
              <p className="text-muted-foreground text-sm">
                Join us to explore amazing opportunities.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <InputCombo
                  id="name"
                  type="text"
                  label="Full Name"
                  placeholder="John Doe"
                  icon={User}
                  error={errors.name}
                  registration={register("name")}
                />

                <InputCombo
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
                  placeholder="Create a password"
                  error={errors.password}
                  registration={register("password")}
                />

                <PasswordInput
                  id="confirmPassword"
                  label="Confirm Password"
                  placeholder="Confirm your password"
                  error={errors.confirmPassword}
                  registration={register("confirmPassword")}
                />
              </div>

              <ProfileImageUpload
                previewImage={previewImage}
                registration={register("image")}
                error={errors.image}
                acceptedTypes={ACCEPTED_IMAGE_TYPES}
                onChange={handleImageChange}
              />

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  defaultChecked={true}
                  {...register("acceptTerms")}
                  onCheckedChange={(checked) => {
                    const event = {
                      target: {
                        name: "acceptTerms",
                        value: checked,
                      },
                    };
                    register("acceptTerms").onChange(event);
                  }}
                />
                <label htmlFor="terms" className="text-sm text-foreground">
                  I accept the{" "}
                  <Link
                    href="/"
                    className="text-yellow-600 hover:text-yellow-500"
                  >
                    terms and conditions
                  </Link>
                </label>
              </div>
              {errors.acceptTerms && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.acceptTerms.message}
                </p>
              )}

              {errors.root && (
                <p className="text-red-500 text-sm text-center">
                  {errors.root.message}
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-bold py-3 text-lg rounded-lg shadow-lg border-2 border-black flex items-center justify-center space-x-2 group"
              >
                <span>
                  {isSubmitting ? "Creating Account..." : "Create Account"}
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <div className="mt-6">
              <SocialLoginLink />
            </div>
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
