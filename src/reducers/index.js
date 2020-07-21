import changeTab from "./change-tab-reducer";
import { initinalTab } from "../actions/change-tab-actions";
import { initinalTags } from "../actions/fetch-tag-actions";
import { initinalArticles } from "../actions/fetch-article-actions";
import {
  initinalTopic,
  initinalTopicComments,
  initinalPostComment,
  initinalDeleteComment,
} from "../actions/topic-actions";
import { initinalUserInfo } from "../actions/login-actions";
import fetchTag from "./fetch-tag-reducer";
import fetchArticle from "./fetch-article-reducer";
import {
  fetchTopic,
  fetchTopicComments,
  postComment,
  deleteComment,
} from "./topic-reducer";
import login from "./login-reducer";

import { combineReducers } from "redux";

const initState = {
  changeTab: initinalTab,
  fetchTag: initinalTags,
  fetchArticle: initinalArticles,
  fetchTopic: initinalTopic,
  fetchTopicComments: initinalTopicComments,
  login: initinalUserInfo,
  postComment: initinalPostComment,
  deleteComment: initinalDeleteComment,
};

const reducer = combineReducers({
  changeTab,
  fetchTag,
  fetchArticle,
  fetchTopic,
  fetchTopicComments,
  login,
  postComment,
  deleteComment,
});

export default function root(state = initState, action) {
  //   console.log(state);
  return reducer(state, action);
}
