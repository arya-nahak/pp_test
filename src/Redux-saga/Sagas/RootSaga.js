import { all } from "redux-saga/effects";
import { watchProductList } from "./ProductSaga";

export default function* RootSaga(){
    yield all([watchProductList()])
}