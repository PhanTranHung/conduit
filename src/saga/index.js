import * as Api from "../requests/API";
import { put, call, takeLatest, all, fork } from "redux-saga/effects";
import * as tagActions from "../actions/fetch-tag-actions";
import * as articleActions from "../actions/fetch-article-actions";

function* fetchTags() {
  yield put(tagActions.tagFetching());
  try {
    // debugger;
    const tags = yield call(Api.fetchTags);
    yield put(tagActions.tagFetchSucceeded(tags));
  } catch (e) {
    yield put(tagActions.tagFetchFailed(e));
  }
}

function* fetchArticles({ type, ...params }) {
  // console.log(params);

  yield put(articleActions.articleFetching());
  try {
    const articles = yield call(Api.fetchArticles, params);
    debugger;
    //                                 {articles, acticlesCount}, {tag, offset}
    yield put(articleActions.articleFetchSucceeded({ ...articles, ...params }));
  } catch (e) {
    yield put(articleActions.articleFetchFailed());
  }
}
function* watchFetchArticle() {
  yield takeLatest(articleActions.ARTICLE_FETCH_REQUEST, fetchArticles);
}

function* watchFetchTag() {
  yield takeLatest(tagActions.TAG_FETCH_REQUEST, fetchTags);
}

export default function* rootSaga() {
  yield all([fork(watchFetchTag), fork(watchFetchArticle)]);
}
