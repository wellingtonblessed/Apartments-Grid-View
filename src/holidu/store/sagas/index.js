import { takeLatest, all } from "redux-saga/effects";
import { GET_APARTMENTS } from "../modules/apartments";
import { getApartmentsSaga } from "./apartments";

export default function* rootSaga() {
  yield all([takeLatest(GET_APARTMENTS, getApartmentsSaga)]);
}
