import { createClient } from '@redis/client';
import logger from './logger';

let redisClient = createClient({
  url: 'redis://localhost:6379'
});

redisClient.on('err', (err) => logger.error('Redis errro', err));
redisClient.on('connect', (err) => logger.info('Redis connected'));

const connect = async (): Promise<void> => {
  await redisClient.connect();
};

export const RedisClient = {
  connect
};
