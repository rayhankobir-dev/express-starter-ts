import { Request, Response, NextFunction } from 'express';
import logger from '@utils/logger';

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const clientIp =
    req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  logger.info(`[${clientIp}] ${req.method} ${req.url}`);
  next();
};

export default loggerMiddleware;
