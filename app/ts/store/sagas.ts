import { takeLatest, call, put } from "redux-saga/effects";

import { FETCH_NUMERICODE, NUMERICODE_INPUT } from './action-types';
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

function* fetchCode() {
  try {
    const code: string = yield call(api.fetchCode);
    yield put(actionCreators.handleInputChange(code));
  } catch (error) {
    console.error("ERROR FETCHING CODE", error);
    yield put(actionCreators.errorDecoding(error.message));
  }
}

function* mySaga() {
  yield takeLatest(NUMERICODE_INPUT, decipherCode);
  yield takeLatest(FETCH_NUMERICODE, fetchCode);
}

export default mySaga;