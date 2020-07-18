import * as Api from "../requests/API";
import { put, call, takeLatest, all, fork } from "redux-saga/effects";
import * as tagActions from "../actions/fetch-tag-actions";
import * as articleActions from "../actions/fetch-article-actions";
import * as topicActions from "../actions/fetch-topic-actions";
import * as topicCommentsActions from "../actions/fetch-topic-comments-action";
import * as loginActions from "../actions/login-actions";

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
function* watchFetchTag() {
  yield takeLatest(tagActions.TAG_FETCH_REQUEST, fetchTags);
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
    yield put(articleActions.articleFetchFailed(e));
  }
}
function* watchFetchArticle() {
  yield takeLatest(articleActions.ARTICLE_FETCH_REQUEST, fetchArticles);
}

function* fetchTopic(action) {
  yield put(topicActions.topicFetching());
  try {
    const article = yield call(Api.fetchTopic, action.slug);
    debugger;
    yield put(topicActions.topicFetchSucceeded(article));
  } catch (e) {
    yield put(topicActions.topicFetchFailed(e));
  }
}
function* watchFetchTopic() {
  yield takeLatest(topicActions.TOPIC_FETCH_REQUEST, fetchTopic);
}

function* fetchTopicComments(action) {
  yield put(topicCommentsActions.articleFetching());
  try {
    const comments = yield call(Api.fetchTopic, action.slug);
    debugger;
    yield put(topicCommentsActions.articleFetchSucceeded(comments));
  } catch (e) {
    yield put(topicCommentsActions.articleFetchFailed(e));
  }
}
function* watchFetchTopicComments() {
  yield takeLatest(
    topicCommentsActions.TOPIC_COMMENTS_FETCH_REQUEST,
    fetchTopicComments
  );
}

function* login(action) {
  yield put(loginActions.loging());
  try {
    const user = yield call(Api.login, action);
    debugger;
    yield put(loginActions.loginSucceeded(user));
  } catch (e) {
    yield put(loginActions.loginFailed(e));
  }
}
function* watchLogin() {
  yield takeLatest(loginActions.LOGIN_REQUEST, login);
}

export default function* rootSaga() {
  yield all([
    fork(watchFetchTag),
    fork(watchFetchArticle),
    fork(watchFetchTopic),
    fork(watchFetchTopicComments),
    fork(watchLogin),
  ]);
}
