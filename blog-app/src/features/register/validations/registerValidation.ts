import * as z from 'zod';

export const registerValidation = z.object({
  email: z.email('Email format is invalid').min(1, 'Email is required'),
  password: z
    .string()
    .min(1, 'Password is required')
    .max(25, 'Password have maximum 25 characters'),
});
