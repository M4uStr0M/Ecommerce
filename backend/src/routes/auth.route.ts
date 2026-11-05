import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import { asyncHandler } from "../utills/asyncHandler.js";
import { clerkClient, getAuth } from "@clerk/express";


export const authRouter = Router()


authRouter.post('/sync', requireAuth, asyncHandler(
    async (req, res) => {
        const { userId } = getAuth(req)
       
        const clerkUser = await clerkClient.users.getUser(userId)
      
        const exactEmailFromUserInfo = clerkUser.emailAddresses.find(
            item => item.id === clerkUser.primaryEmailAddressId
        ) || clerkUser.emailAddresses[0]


        const email = exactEmailFromUserInfo?.emailAddress

    }
))
