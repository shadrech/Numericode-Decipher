import * as redis from "redis";
import * as bluebird from "bluebird";
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const client = redis.createClient();

class DBError extends Error {
  public dbError: Error;

  constructor(message, err) {
    super(message);
    this.dbError = err;
  }
}

client.on("error", err => {
  const error: DBError = new DBError("Error connecting to db", err);
  console.error("REDIS ERROR", error);
  throw error;
});

export default client;
