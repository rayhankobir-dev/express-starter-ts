import { Request, Response, NextFunction } from 'express';
import AppError from '@utils/helpers/AppError';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // Check if the error is an instance of AppError or a subclass
  if (err instanceof AppError) {
    return res.status(err.status).json({
      error: {
        message: err.message,
        code: err.code,
      },
    });
  }

  // Handle other types of errors (fallback)
  res.status(500).json({
    error: {
      message: 'Internal Server Error',
      code: 'ERR_INTERNAL_SERVER',
    },
  });
};
