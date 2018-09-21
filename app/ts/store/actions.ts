import { NUMERICODE_INPUT, DECODED_NUMERICODE, DECODING_ERROR } from "./action-types";

export interface Actions {
  handleNumericodeInput: (code: string) => void;
  decodedResult: (text: string) => void;
  errorDecoding: (message: string) => void;
}

const actionCreators = {
  handleNumericodeInput: (code: string) => ({
    type: NUMERICODE_INPUT,
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