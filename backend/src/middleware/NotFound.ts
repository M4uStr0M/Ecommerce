import type { Request, Response, NextFunction } from 'express'
import { fail } from '../utills/envelope.js'



export function notFound(req:Request, res:Response){
    res.status(404).json(fail("Request url is not found"))
}