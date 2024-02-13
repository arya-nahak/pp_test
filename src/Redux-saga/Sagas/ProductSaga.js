import { call, put, takeLatest } from "redux-saga/effects";
import { getProductApi, getquery } from "../../API/Contents";
import {
  Failure,
  Success,
  aQFailure,
  aQSuccess,
} from "../Action/Action";

export function* productListSaga() {
  try {
    const callData = yield call(getProductApi);
    yield put(Success(callData.data));
  } catch (error) {
    yield put(Failure(error));
  }
}

export function* queryproductListSaga({payload}) {
  // console.log()

  try {
    const callData = yield call(getquery,payload);
    yield put(aQSuccess(callData.data));
  } catch (error) {
    yield put(aQFailure(error));
  }
}

export function* watchProductList() {
  yield takeLatest("REQUEST", productListSaga);
  yield takeLatest("ADFREQUEST", queryproductListSaga);
}
