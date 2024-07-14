import redis from 'redis';
import { promisify } from 'util';
import logger from '@utils/logger';
import { redisConfig } from 'src/config';

const redisClient = redis.createClient(redisConfig);

redisClient.on('connect', () => {
  logger.info('Connected to Redis');
});

redisClient.on('error', (err) => {
  logger.error(`Redis error: ${err}`);
});

export const getAsync = promisify(redisClient.get).bind(redisClient);
export const setAsync = promisify(redisClient.set).bind(redisClient);

export default redisClient;
