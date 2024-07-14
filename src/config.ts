// configuring environment variables
import dotenv from 'dotenv';

dotenv.config();

export const port = Number(process.env.PORT) || 3000;
export const corsConfig = {
  origin: process.env.CORS_ORIGIN || '*',
};

export const cacheConfig = {
  expiry: Number(process.env.CACHE_EXPIRY) || 3600,
};

export const redisConfig = {
  url: process.env.REDIS_URL || '',
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: Number(process.env.REDIS_PORT) || 6379,
  user: process.env.REDIS_USER || '',
  password: process.env.REDIS_PASSWORD || '',
};
