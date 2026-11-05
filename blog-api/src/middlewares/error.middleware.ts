import { NextFunction, Request, Response } from 'express';

export function ErrorMiddleware(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  res.status(500).json({
    success: true,
    message: error?.message,
    data: null,
  });
}
