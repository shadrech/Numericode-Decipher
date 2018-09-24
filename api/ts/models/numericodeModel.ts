import { redisClient } from "../db";
import { numToLetterMapper, constants } from "../utils";

export function diviseTo27Root(num: number) {
  const root = num / 27;
  if (root <= 27) return root;
  else return diviseTo27Root(root);
}

export function decipherCode(codeString: string): string {
  return codeString.split(" ").reduce((acc: string, code: string) => {
    const num = Number(code);

    if (isNaN(num))
      throw new Error("Numericode code must be numeric 🙄");

    if (num >= 27) {
      const root = diviseTo27Root(num);
      if (Number.isInteger(root)) {
        acc += numToLetterMapper(root);
      } else {
        acc += " ";        
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