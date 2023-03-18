const redis = require("redis");
const { promisify } = require("util");

const redisClient = redis.createClient();

const incrAsync = promisify(client.incr).bind(client);
const saddAsync = promisify(client.sadd).bind(client);
const sismemberAsync = promisify(client.sismember).bind(client);

module.exports = {
  redisClient,
  incrAsync,
  saddAsync,
  sismemberAsync,
};
