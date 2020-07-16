import changeTab from "./change-tab-reducer";
import { initinalTab } from "../actions/change-tab-actions";
import { initinalTags } from "../actions/fetch-tag-actions";
import { initinalArticles } from "../actions/fetch-article-actions";
import fetchTag from "./fetch-tag-reducer";
import fetchArticle from "./fetch-article-reducer";
import { combineReducers } from "redux";

const initState = {
  changeTab: initinalTab,
  fetchTag: initinalTags,
  fetchArticle: initinalArticles,
};

const reducer = combineReducers({
  changeTab,
  fetchTag,
  fetchArticle,
});

export default function root(state = initState, action) {
  //   console.log(state);
  return reducer(state, action);
}
