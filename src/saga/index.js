import * as Api from "../requests/API";
import { put, call, takeLatest, all, fork } from "redux-saga/effects";
import * as actions from "../actions/fetch-data-actions";

function* fetchData(producer, params = {}) {
  // console.log(params);
  yield put(actions.dataFetching());
  try {
    debugger;
    const data = yield call(producer);
    yield put(actions.fetchDataSucceeded(data));
  } catch (e) {
    yield put(actions.fetchDataFailed(e));
  }
}

function* watchFetchArticles() {
  yield takeLatest(
    actions.FETCH_ARTICLES_DATA_REQUEST,
    fetchData,
    Api.fetchArticles
  );
}

function* watchFetchTag() {
  yield takeLatest(actions.FETCH_TAGS_DATA_REQUEST, fetchData, Api.fetchTags);
}

export default function* rootSaga() {
  // console.log(aa);
  yield all([fork(watchFetchTag), fork(watchFetchArticles)]);
}
