import express from 'express'
import { connectDB } from './config/db.js'
import { env } from './config/env.js'
import { errorHandler } from './middleware/errorHandler.js'
import { notFound } from './middleware/NotFound.js'
import cors from 'cors'
import { ok } from './utills/envelope.js'

const app = express()
app.use(express.json())

app.use(cors({
    origin: env.FRONTEND_URL,
    credentials: true
}
))
app.get('/health', (_req, res) => {
    res.status(200).json(ok({ message: "Server is healthy," }))
})


app.use(notFound)
app.use(errorHandler)

async function main() {
    await connectDB()
    const PORT = env.PORT ? +env.PORT : 3000
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}

main().catch((er) => {
    console.log(`Server cannont running due to ${er}`)
    process.exit(1)
})