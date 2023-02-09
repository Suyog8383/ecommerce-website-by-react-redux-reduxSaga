//Saga effects
import { all, fork } from "redux-saga/effects";
import { watchGetProducts } from "../Saga/cartSaga";

export default function* rootSaga() {
  yield all([fork(watchGetProducts)]);
}
