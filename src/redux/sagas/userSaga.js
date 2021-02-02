import { put, call, takeLatest, takeEvery } from "redux-saga/effects";
import {
  GET_USER,
  GET_USER_REQUESTED,
  SET_CURRENT_USER,
  SET_LOADING,
  SET_CURRENT_USER_REQUESTED,
} from "../actions/appAction";
import { getUser } from "../api/userApi";

function* getUserByName({ payload }) {
  yield put({ type: SET_LOADING });

  const user = yield call(getUser, payload);
  yield put({ type: GET_USER, payload: user });
}

function* setCurrentUser() {
  yield put({ type: SET_LOADING });
  yield put({ type: SET_CURRENT_USER });
}

export default function* userSaga() {
  yield takeEvery(GET_USER_REQUESTED, getUserByName);
  yield takeEvery(SET_CURRENT_USER_REQUESTED, setCurrentUser);
}
