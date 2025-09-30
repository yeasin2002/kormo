'use client';

import { InputCombo } from '@/components/custom-ui/input-combo';
import { LoaderDots } from '@/components/custom-ui/loader-dots';
import { PasswordInput } from '@/components/custom-ui/password-input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { SocialLoginLink } from '@/features/auth/social-login-link';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';

import { loginSchema, type LoginFormValues } from '@/features/auth/auth.schema';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const authResponse = await authClient.signIn.email({
        email: data.email,
        password: data.password,
        rememberMe: data.rememberMe,
      });

      if (authResponse.error) throw new Error(authResponse.error.message);
      // const user = authResponse.data.user;

      toast.success('Login successful!');
      router.push('/');
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        return toast.error(error.message || 'Failed to login. Please try again.');
      } else {
        return toast.error('Failed to login. Please try again.');
      }
    }
  };

  return (
    <>
      <div className="flex items-center justify-center px-6 py-4 md:py-12">
        <div className="w-full max-w-md">
          <div className="bg-card border-border relative rounded-3xl border-4 p-8 shadow-2xl">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
              <div className="rounded-full border-2 border-black bg-yellow-400 px-6 py-2 text-sm font-bold text-black shadow-lg">
                Welcome Back!
              </div>
            </div>

            {/* Header */}
            <div className="mt-4 mb-8 text-center">
              <h1 className="mb-2 text-3xl font-black lg:text-4xl">
                Sign <span className="text-yellow-500">In</span>
              </h1>
              <p className="text-muted-foreground text-sm">
                Login to explore our amazing opportunities.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <InputCombo
                id="email"
                type="email"
                label="Email Address"
                placeholder="your@email.com"
                icon={Mail}
                error={errors.email}
                registration={register('email')}
              />

              <PasswordInput
                id="password"
                label="Password"
                placeholder="Enter your password"
                error={errors.password}
                registration={register('password')}
              />

              <div className="flex items-center justify-between text-sm">
                <label className="flex cursor-pointer items-center space-x-2">
                  <Checkbox {...register('rememberMe')} defaultChecked={true} />
                  <span className="text-foreground font-medium">Remember me</span>
                </label>
                <Link
                  href="/"
                  className="font-medium text-yellow-600 transition-colors hover:text-yellow-500"
                >
                  Forgot password?
                </Link>
              </div>

              {errors.root && (
                <p className="text-center text-sm text-red-500">{errors.root.message}</p>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="group flex w-full items-center justify-center space-x-2 rounded-lg border-2 border-black bg-yellow-400 py-3 text-lg font-bold text-black shadow-lg hover:bg-yellow-500"
              >
                {!isSubmitting ? (
                  <>
                    <span> Sign in </span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                ) : (
                  <LoaderDots className="-translate-x-9" />
                )}
              </Button>
            </form>
            <SocialLoginLink isLoginPage />
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
