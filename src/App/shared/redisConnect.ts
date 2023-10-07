import { createClient } from 'redis'
import config from '../../config'
import { logger } from './logger'

const redisClient = createClient({
  url: config.redis.url,
})

redisClient.on('error', err => {
  console.log(err)
  logger.error('RedisError', err)
})
redisClient.on('connect', () => {
  logger.info('Redis connected'), console.log('Redis Connected')
})

const connect = async (): Promise<void> => {
  await redisClient.connect()
}

export const RedisClient = {
  connect,
}
