import { z } from 'zod'
import 'dotenv/config'
import process from 'node:process'


const envSchema = z.object({
    PORT: z.string().default("3000"),
    MONGO_URI: z.string(),
    FRONTEND_URL : z.string()
})


function createEnv(env: NodeJS.ProcessEnv) {
    const result = envSchema.safeParse(env)
    if (!result.success) throw new Error(result.error.message)
    return result.data

}

export const env = createEnv(process.env)