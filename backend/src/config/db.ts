import mongoose from 'mongoose'
import { env } from './env.js'

export const connectDB = async () => {
    try {

        await mongoose.connect(env.MONGO_URI)
        console.log("Databse succesfully connect")
    } catch (error) {
        console.log(`Database cannot connect due to ${error}`)
        process.exit(1)
    }
}