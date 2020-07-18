import changeTab from "./change-tab-reducer";
import { initinalTab } from "../actions/change-tab-actions";
import { initinalTags } from "../actions/fetch-tag-actions";
import { initinalArticles } from "../actions/fetch-article-actions";
import { initinalTopic } from "../actions/fetch-topic-actions";
import { initinalTopicComments } from "../actions/fetch-topic-comments-action";
import { initinalUserInfo } from "../actions/login-actions";
import fetchTag from "./fetch-tag-reducer";
import fetchArticle from "./fetch-article-reducer";
import fetchTopic from "./fetch-topic-reducer";
import fetchTopicComments from "./fetch-topic-comments-reducer";
import login from "./login-reducer";

import { combineReducers } from "redux";

const initState = {
  changeTab: initinalTab,
  fetchTag: initinalTags,
  fetchArticle: initinalArticles,
  fetchTopic: initinalTopic,
  fetchTopicComments: initinalTopicComments,
  login: initinalUserInfo,
};

const reducer = combineReducers({
  changeTab,
  fetchTag,
  fetchArticle,
  fetchTopic,
  fetchTopicComments,
  login,
});

export default function root(state = initState, action) {
  //   console.log(state);
  return reducer(state, action);
}
