import { redisClient } from "../db";
import { numToLetterMapper, constants } from "../utils";

export function divisibleBy27Root(num: number) {
  const root = num / 27;
  if (root <= 27) return root;
  else return divisibleBy27Root(root);
}

export function decipherCode(codeString: string): string {
  return codeString.split(" ").reduce((acc: string, code: string) => {
    const num = Number(code);

    if (isNaN(num))
      throw new Error("Numericode code must be numeric 🙄");

    if (num >= 27) {
      if (num % 27 !== 0) {
        acc += " ";
      } else {
        acc += numToLetterMapper(divisibleBy27Root(num));
      }
    } else {
      acc += numToLetterMapper(num);
    }

    return acc;
  }, "");
}

export function persistNumericode(code: string, callback = () => null): void {
  // persist to redis db
  redisClient.set(constants.NUMERICODE_DB_KEY, code, callback);
}

export async function getNumericode(): Promise<string> {
  // get from redis
  const code = await redisClient.getAsync(constants.NUMERICODE_DB_KEY);
  return code;
}