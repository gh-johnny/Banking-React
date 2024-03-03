import { z } from 'zod';

export const newTransactionFormZodSchema = z.object({
    description:
        z.string({
            required_error: 'A description is required',
        }),
    price: z.string({
        required_error: 'A price is required'
    }),
    category:
        z.string({
            required_error: 'A category is required',
        }),
    type:
        z.enum(['entry', 'exit']),
})

export type TNewTransactionFormZodSchema = z.infer<typeof newTransactionFormZodSchema>
