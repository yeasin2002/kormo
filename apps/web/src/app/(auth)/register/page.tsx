"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Mail, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ImageUpload, LoaderDots } from "@/components/custom-ui";
import { InputCombo } from "@/components/custom-ui/input-combo";
import { PasswordInput } from "@/components/custom-ui/password-input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	ACCEPTED_IMAGE_TYPES,
	type RegisterFormValues,
	registerSchema,
} from "@/features/auth/auth.schema";
import { SocialLoginLink } from "@/features/auth/social-login-link";
import { authClient as auth } from "@/lib/auth-client";
import { useEdgeStore } from "@/lib/edgestore";

export default function RegisterPage() {
	const [previewImage, setPreviewImage] = useState<string | null>(null);
	const router = useRouter();
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
		const userAvatar = data.image[0];
		try {
			//  upload image
			const uploadedImage = await edgestore.publicFiles.upload({
				file: userAvatar,
			});

			const authResponse = await auth.signUp.email({
				email: data.email,
				password: data.password,
				name: data.name,
				image: uploadedImage.url,
			});

			if (authResponse.error) throw new Error(authResponse.error.message);
			router.push("/");
		} catch (error) {
			console.error(error);

			if (error instanceof Error) {
				return toast.error(
					error.message || "Failed to login. Please try again.",
				);
			}
			return toast.error("Failed to login. Please try again.");
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
					<div className="relative rounded-3xl border-4 border-border bg-card p-8 shadow-2xl">
						<div className="-top-4 -translate-x-1/2 absolute left-1/2 transform">
							<div className="rounded-full border-2 border-black bg-yellow-400 px-6 py-2 font-bold text-black text-sm shadow-lg">
								Create Account!
							</div>
						</div>

						<div className="mt-4 mb-8 text-center">
							<h1 className="mb-2 font-black text-3xl lg:text-4xl">
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

							<div className="space-y-2">
								<label className="block font-bold text-foreground text-sm">
									Profile Picture
								</label>
								<ImageUpload
									previewImage={previewImage}
									registration={register("image")}
									error={errors.image}
									acceptedTypes={ACCEPTED_IMAGE_TYPES}
									onChange={handleImageChange}
								/>
							</div>

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
								<label htmlFor="terms" className="text-foreground text-sm">
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
								<p className="mt-1 text-red-500 text-sm">
									{errors.acceptTerms.message}
								</p>
							)}

							{errors.root && (
								<p className="text-center text-red-500 text-sm">
									{errors.root.message}
								</p>
							)}

							<Button
								type="submit"
								size="lg"
								disabled={isSubmitting}
								className="group flex w-full cursor-pointer items-center justify-center space-x-2 rounded-lg border-2 border-black bg-yellow-400 py-3 font-bold text-black text-lg shadow-lg hover:bg-yellow-500"
							>
								{isSubmitting ? (
									<LoaderDots className="-translate-x-8" />
								) : (
									<>
										<span>Create Account</span>
										<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
									</>
								)}
							</Button>
						</form>

						<div className="mt-6">
							<SocialLoginLink />
						</div>
					</div>

					<div className="mt-6 text-center">
						<p className="text-muted-foreground text-xs">
							🔒 Your data is protected with industry-standard encryption
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
