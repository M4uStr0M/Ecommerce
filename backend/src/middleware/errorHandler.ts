
import type { Request, Response, NextFunction } from 'express'
import { AppError } from '../utills/AppError.js'
import { fail } from '../utills/envelope.js'

export function errorHandler(
    err:unknown,
    _req: Request,
    res : Response,
    _next : NextFunction

){
    if(err instanceof AppError){
     return   res.status(err.statusCode).json(fail(err.message, "APP ERROR"))
    }

    console.error("error", err)

    return res.status(500).json(fail("Internal server error", "INTERNAL"))
}