import { Request, Response, NextFunction } from 'express';
import { getAsync } from '@utils/redis';
import logger from '@utils/logger';

const cacheMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const key = req.originalUrl;
  try {
    const cachedResponse = await getAsync(key);

    if (cachedResponse) {
      logger.info(`Cache hit for ${key}`);
      return res.send(JSON.parse(cachedResponse));
    }

    logger.info(`Cache miss for ${key}`);
    res.sendResponse = res.send;
    res.send = async (body) => {
      await setAsync(key, JSON.stringify(body), 'EX', 3600); // Cache for 1 hour
      res.sendResponse(body);
      return res;
    };

    next();
  } catch (error) {
    logger.error(`Error in cache middleware: ${error.message}`);
    next();
  }
};

export default cacheMiddleware;
