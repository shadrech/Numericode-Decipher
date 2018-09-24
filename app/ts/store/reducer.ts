import iassign = require("immutable-assign");
import { returntypeof } from "react-redux-typescript";

import actionCreators from './actions';
import { NUMERICODE_UPDATE, NUMERICODE_INPUT, DECODED_NUMERICODE, DECODING_ERROR, FETCH_NUMERICODE } from './action-types';

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
    case FETCH_NUMERICODE: {
      return iassign(
        state,
        s => {
          s.isLoading = true;
          return s;
        }
      )
    }
    case NUMERICODE_UPDATE: {
      return iassign(
        state,
        s => {
          s.isLoading = false;
          s.numericode = action.payload.code;
          s.error = null;
          return s;
        }
      );
    }
    case NUMERICODE_INPUT: {
      return iassign(
        state,
        s => {
          s.isLoading = true;
          s.numericode = action.payload.code;
          s.error = null;
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
          s.error = null;
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

export default reducer;