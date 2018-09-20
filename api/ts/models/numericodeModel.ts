import * as redis from "redis";
import { numToLetterMapper } from "../utils";

export function decipherCode(code: string): string {
  return code.split(" ").reduce((acc: string, code: string) => {
    const num = Number(code);

    if (isNaN(num))
      throw new Error("Numericode code must be numeric 🙄");

    if (num % 27 !== 0) {
      acc += " ";
    } else {
      acc += numToLetterMapper(num);
    }

    return acc;
  }, "");
}

export async function persistNumericode(code: string): Promise<void> {
  // persist to redis db
}

export async function getNumericode(): Promise<string> {
  // get from redis
}