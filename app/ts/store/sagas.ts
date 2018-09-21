import { takeEvery, call, put } from "redux-saga/effects";

import { NUMERICODE_INPUT } from "./action-types";
import actionCreators from './actions';
import * as api from "./api";
// import { Action } from "./reducer";

function* decipherCode(action: any) {
  try {
    const text: string = yield call(api.decipherCode, action.payload.code);
    yield put(actionCreators.decodedResult(text));
  } catch (error) {
    console.error("ERROR DECODING", error);
    yield put(actionCreators.errorDecoding(error.message));
  }
}

function* mySaga() {
  yield takeEvery(NUMERICODE_INPUT, decipherCode);
}

export default mySaga;