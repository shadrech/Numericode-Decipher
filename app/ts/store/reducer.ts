import iassign = require("immutable-assign");
import { returntypeof } from "react-redux-typescript";

import actionCreators from './actions';
import { NUMERICODE_INPUT, DECODED_NUMERICODE, DECODING_ERROR } from './action-types';

export const actions = Object.values(actionCreators).map(returntypeof);
export type Action = typeof actions[number];

export type State = {
  numericode: string;
  decoded: string;
  isLoading: boolean;
  error: string;
}
const INITIAL_STATE: State = {
  numericode: "",
  decoded: "",
  isLoading: false,
  error: null
}

function reducer(state: State = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case NUMERICODE_INPUT: {
      return iassign(
        state,
        s => {
          s.isLoading = true;
          s.numericode = action.payload.code;
          return s;
        }
      );
    }
    case DECODED_NUMERICODE: {
      return iassign(
        state,
        s => {
          s.isLoading = false;
          s.decoded = action.payload.text;
          return s;
        }
      );
    }
    case DECODING_ERROR: {
      return iassign(
        state,
        s => {
          s.isLoading = false,
          s.error = action.payload.message;
          return s;
        }
      )
    }
    default:
      return INITIAL_STATE;
  }
}