import { z } from 'zod';

export const newTransactionFormZodSchema = z.object({
    description:
        z.string().min(1, 'A description is required'),
    price:
        z.string().min(1, 'A price is required'),
    category:
        z.string().min(1, 'A category is required'),
    type:
        z.enum(['entry', 'exit']),
})

export type TNewTransactionFormZodSchema = z.infer<typeof newTransactionFormZodSchema>
