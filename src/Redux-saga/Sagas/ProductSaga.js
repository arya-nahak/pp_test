import { call, put, takeLatest } from "redux-saga/effects";
import { getProductApi } from "../../API/Contents";
import {
  Failure,
  Success,
} from "../Action/Action";

export function* productListSaga() {
  try {
    const callData = yield call(getProductApi);
    yield put(Success(callData.data));
  } catch (error) {
    yield put(Failure(error));
  }
}

export function* watchProductList() {
  yield takeLatest("REQUEST", productListSaga);
}
