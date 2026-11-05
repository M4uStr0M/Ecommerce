import { getAuth } from '@clerk/express'
import type { Request, Response, NextFunction } from 'express'
import { AppError } from '../utills/AppError.js'
import { userModel } from '../models/user.model.js'
import { asyncHandler } from '../utills/asyncHandler.js'

export function requireAuth(req: Request, res: Response, next: NextFunction) {
    const { userId } = getAuth(req)
    if (!userId) {
        return next(new AppError(401, "User not logged, Please login account"))
    }
    next()
} 

export async function getDbUserFromReq(req:Request) {
    const { userId} = getAuth(req)

    if (!userId) {
        return new AppError(401, "User not logged, Please login account")
    } 


    const dbUser = await userModel.findOne({clerkUserId : userId})
    if (!dbUser) {
        return new AppError(401 , "User not found, Please register account")
    } 
  return dbUser
}

export const requireAdmin = asyncHandler(
    async ( req: Request, res: Response, next : NextFunction) =>{
        const exactCurrentUser = await getDbUserFromReq(req)
        if(exactCurrentUser.role !== 'admin'){
            throw new AppError(403, "Admin only access")
        }
        next() 
    }

)