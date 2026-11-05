import mongoose from 'mongoose'
import { env } from './env.js'

export const connectDB = async () => {
    try {

        await mongoose.connect(env.MONGO_URI)
        console.log("Database succesfully connect")
    } catch (error) {
        console.log(`Database cannot connect due to ${error}`)
        throw error
    }
}