import { takeLatest, call, put } from "redux-saga/effects";

import { NUMERICODE_UPDATE } from "./action-types";
import actionCreators from './actions';
import * as api from "./api";
// import { Action } from "./reducer";

function* decipherCode(action: any /*Action*/) {
  const { code } = action.payload;
  try {
    const text: string = yield call(api.decipherCode, code);
    yield put(actionCreators.decodedResult(text));
  } catch (error) {
    console.error("ERROR DECODING", error);
    yield put(actionCreators.errorDecoding(error.message));
  }
}

function* mySaga() {
  yield takeLatest(NUMERICODE_UPDATE, decipherCode);
}

export default mySaga;