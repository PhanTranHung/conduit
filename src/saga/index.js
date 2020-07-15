import * as Api from "../requests/API";
import { put, call, takeLatest } from "redux-saga/effects";
import * as actions from "../actions/fetch-tag-actions";

function* fetchTags() {
  yield put(actions.tagFetching());
  try {
    debugger;
    const tags = yield call(Api.fetchTags);
    yield put(actions.tagFetchSucceeded(tags));
  } catch (e) {
    yield put(actions.tagFetchFailed(e));
  }
}

export default function* watchFetchTag() {
  yield takeLatest(actions.TAG_FETCH_REQUEST, fetchTags);
}

// export default function* root (){

// }
