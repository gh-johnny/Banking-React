import { z } from "zod"

export const searchFormSchema = z.object({
    query: z.string({
        required_error: 'Please specify your search'
    })
})

export type TSearchFormSchema = z.infer<typeof searchFormSchema>
