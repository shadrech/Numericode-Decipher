import { redisClient } from "../../db";
import { decipherCode, divisibleBy27Root } from '../numericodeModel';

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
    decoded: "PUSHEENICORN"
  }, {
    encoded: "20 486 21 513 19 324 5 21924 540 135 3 8",
    decoded: "TRUSSLE TECH"
  }, {
    encoded: "8 5 324 8748 295245 730 23 405 13122 12 108",
    decoded: "HELLO WORLD"
  },
]

afterAll(function() {
  redisClient.quit();
});

describe("NUMERICODE MODEL", function() {
  describe("divisibleBy27Root", function() {
    it("must return 14 if 275562 is passed in", function() {
      expect(divisibleBy27Root(275562)).toEqual(14);
    })
  });

  describe("decipherCode", function() {
    let { encoded, decoded } = messages[0];
    it(`must decipher '${encoded}' to ${decoded}`, function() {
      expect(decipherCode(encoded)).toEqual(decoded);
    });

    decoded = messages[1].decoded;
    encoded = messages[1].encoded;
    it(`must decipher '${encoded}' to ${decoded}`, function() {
      expect(decipherCode(encoded)).toEqual(decoded);
    });

    decoded = messages[2].decoded;
    encoded = messages[2].encoded;
    it(`must decipher '${encoded}' to ${decoded}`, function() {
      expect(decipherCode(encoded)).toEqual(decoded);
    });

    decoded = messages[3].decoded;
    encoded = messages[3].encoded;
    it(`must decipher '${encoded}' to ${decoded}`, function() {
      expect(decipherCode(encoded)).toEqual(decoded);
    });

    decoded = messages[4].decoded;
    encoded = messages[4].encoded;
    it(`must decipher '${encoded}' to ${decoded}`, function() {
      expect(decipherCode(encoded)).toEqual(decoded);
    });
  })
})