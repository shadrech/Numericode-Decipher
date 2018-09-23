import { NUMERICODE_INPUT, NUMERICODE_UPDATE, DECODED_NUMERICODE, DECODING_ERROR } from "./action-types";

export interface Actions {
  decodedResult: (text: string) => void;
  errorDecoding: (message: string) => void;
  updateNumericode: (code: string) => void;
}

const actionCreators = {
  updateNumericode: (code: string) => ({
    type: NUMERICODE_UPDATE,
    payload: { code }
  }),
  decodedResult: (text: string) => ({
    type: DECODED_NUMERICODE,
    payload: { text }
  }),
  errorDecoding: (message: string) => ({
    type: DECODING_ERROR,
    payload: { message }
  })
};

export default actionCreators;
