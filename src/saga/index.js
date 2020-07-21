import * as Api from "../requests/API";
import {
  put,
  call,
  takeLatest,
  all,
  fork,
  takeEvery,
} from "redux-saga/effects";
import * as tagActions from "../actions/fetch-tag-actions";
import * as articleActions from "../actions/fetch-article-actions";
import * as topicActions from "../actions/topic-actions";
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
function* fetchTopicComments(action) {
  yield put(topicActions.topicCommentFetching());
  try {
    const comments = yield call(Api.fetchTopicComments, action.slug);
    debugger;
    yield put(topicActions.topicCommentFetchSucceeded(comments));
  } catch (e) {
    yield put(topicActions.topicCommentFetchFailed(e));
  }
}
function* watchFetchTopic() {
  yield takeLatest(topicActions.TOPIC_FETCH_REQUEST, fetchTopic);
  yield takeLatest(
    topicActions.TOPIC_COMMENTS_FETCH_REQUEST,
    fetchTopicComments
  );
}

function* login(action) {
  yield put(loginActions.loging());
  try {
    const user = yield call(Api.login, action);
    console.log(user);
    yield put(loginActions.loginSucceeded(user));
  } catch (e) {
    yield put(loginActions.loginFailed(e));
  }
}
function* checkLogin() {
  yield put(loginActions.checking());
  try {
    const user = yield call(Api.checkLogin);
    console.log(user);
    yield put(loginActions.loginSucceeded(user));
  } catch (e) {
    yield put(loginActions.loginFailed(e));
  }
}
function* watchLogin() {
  yield takeLatest(loginActions.LOGIN_REQUEST, login);
  yield takeLatest(loginActions.CHECKLOGIN, checkLogin);
}

function* postComment(action) {
  try {
    const comment = yield call(
      Api.addNewCommentInTopic,
      action.slug,
      action.text
    );
    console.log("NEW COMMENT", comment);
    yield put(topicActions.topicCommentNew(comment));
    yield put(topicActions.postCommentSucceeded(comment));
  } catch (e) {
    yield put(topicActions.postCommentFailed(e));
  }
}

function* deleteComment(action) {
  try {
    yield put(topicActions.removing());
    const empty = yield call(
      Api.deleteCommentInTopic,
      action.slug,
      action.commentId
    );
    yield put(topicActions.removed(empty));
    yield put(topicActions.topicCommentRemoved(action.commentId));
  } catch (e) {
    yield put(topicActions.removeError(e));
  }
}

function* watchEditComment() {
  yield takeEvery(topicActions.POST_COMMENT, postComment);
  yield takeEvery(topicActions.REMOVE_COMMENT, deleteComment);
}

export default function* rootSaga() {
  yield all([
    fork(watchFetchTag),
    fork(watchFetchArticle),
    fork(watchFetchTopic),
    fork(watchEditComment),
    fork(watchLogin),
  ]);
}
