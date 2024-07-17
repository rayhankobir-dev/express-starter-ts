import { Request, Response, NextFunction } from 'express';
import AppError from '@src/utils/helpers/AppError';

export default function errorHandleMiddleware(
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  const code = err.error || 'ERR_INTERNAL_SERVER';
  const response: any = {
    status: status,
    error: code,
    message,
  };
  console.log(err);
  if (err.errors && err.errors.length > 0) {
    response.errors = err.errors;
  }

  res.status(status).json(response);
}
