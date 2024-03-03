import { z } from "zod"

export const searchFormSchema = z.object({
    query:
        z.string().min(1, 'Please specify your search')
})

export type TSearchFormSchema = z.infer<typeof searchFormSchema>
