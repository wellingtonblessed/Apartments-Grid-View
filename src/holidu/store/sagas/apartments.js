/* eslint-disable consistent-return */
import { call, put } from "redux-saga/effects";
import Api from "../../services/Api";
import {
  populateApartmentsAction,
  addApartmentsAction
} from "../modules/apartments";
import { setLoadingAction, setErrorAction } from "../modules/session";

export function* getApartmentsSaga({
  searchTerm = "Mallorca, Spanien", // Default
  pageIndex = 0,
  pageSize = 30
}) {
  try {
    yield put(setErrorAction(false));
    yield put(setLoadingAction(true));

    const result = yield call(Api.getApartments, {
      searchTerm,
      pageIndex,
      pageSize
    });

    if (!result) throw new Error("Request error");

    if (pageIndex !== 0) yield put(addApartmentsAction(result || {}));
    else yield put(populateApartmentsAction(result || {}));
  } catch (e) {
    yield put(setErrorAction(true));
    console.log("ERROR: getApartmentsSaga ", e);
  } finally {
    yield put(setLoadingAction(false));
  }
}
