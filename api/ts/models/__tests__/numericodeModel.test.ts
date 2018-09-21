import { redisClient } from "../../db";
import { decipherCode } from '../numericodeModel';

interface Message {
  encoded: string;
  decoded: string;
}
const messages: Message[] = [
  {
    encoded: "8 5 12 12 15",
    decoded: "HELLO"
  }, {
    encoded: "13 27 26 5",
    decoded: "M ZE"
  }, {
    encoded: "432 21 19 5832 5 135 14 6561 59049 15 486 275562",
    decoded: ""
  }, {
    encoded: "20 486 21 513 19 324 5 21924 540 135 3 8",
    decoded: ""
  }, {
    encoded: "8 5 324 8748 295245 730 23 405 13122 12 108",
    decoded: ""
  },
]

describe("NUMERICODE MODEL", function() {
  afterAll(function() {
    redisClient.quit();
  });
  
  describe("decipherCode", function() {
    const { encoded, decoded } = messages[0];
    it(`must decipher ${encoded} to ${decoded}`, function() {
      expect(decipherCode(encoded)).toEqual(decoded);
    });
  })
})