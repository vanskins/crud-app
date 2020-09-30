import { all, put, takeEvery } from "redux-saga/effects";
import actions from "./actions";

export function* ADD_USER({ payload }) {
  yield put({
    type: "user/SET_USER",
    payload: payload,
  });
}


export default function* rootSaga() {
  yield all([
    takeEvery(actions.ADD_USER, ADD_USER),
  ]);
}
