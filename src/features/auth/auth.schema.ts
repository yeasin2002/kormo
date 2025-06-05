'use client';

import { z } from 'zod';

export const MAX_FILE_SIZE = 5000000; // 5MB
export const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(100, 'Password is too long'),
  rememberMe: z.boolean(),
});

export const registerSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters')
      .max(100, 'Password is too long'),
    confirmPassword: z.string(),
    image: z.custom<File>((file) => file instanceof File, {
      message: 'File is required',
    }),
    // image: z.custom<FileList>((file) => file instanceof FileList, {
    //   message: 'Profile image is required',
    // }),
    // image: z
    //   .unknown()
    //   .transform((value) => value as FileList)
    //   .refine((value) => value, { message: 'CV is required' }),

    // refine((value) => value, { message: 'CV is required' }),
    // z
    //     .unknown()
    //     .transform((value) => {
    //       return value as FileList;
    //     })
    // image: z
    //   .instanceof(FileList)
    //   .refine((files) => files?.length > 0, 'Profile image is required')
    //   .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB`)
    //   .refine(
    //     (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
    //     'Only .jpg, .jpeg, .png and .webp formats are supported',
    //   ),

    acceptTerms: z.boolean().refine((val) => val, 'You must accept the terms and conditions'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export type LoginFormValues = z.infer<typeof loginSchema>;
export type RegisterFormValues = z.infer<typeof registerSchema>;
