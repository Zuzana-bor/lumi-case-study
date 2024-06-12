import { z } from 'zod';

export const formSchema = z.object({
  client: z
    .string({ required_error: 'select a client' })
    .min(2, { message: 'too short' })
    .max(50, { message: 'too long' }),
  product: z.string({ required_error: 'select a product' }),
  dob: z.date({ required_error: 'select a date' }),
});
