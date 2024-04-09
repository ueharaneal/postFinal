import * as z from 'zod'

export const ScheduleSchema = z.object({
    name: z.string(),
    date: z.string(),
    time: z.string(),
    duration: z.string()

}) 