import changeTab from "./change-tab-reducer";
import { initinalTab } from "../actions/change-tab-actions";
import { initinalData } from "../actions/fetch-data-actions";
import fetchData from "./fetch-data-reducer";
import { combineReducers } from "redux";

const initState = {
  changeTab: initinalTab,
  fetchTag: initinalData,
  fetchArticle: initinalData,
};

const reducer = combineReducers({
  changeTab,
  fetchTag: fetchData,
  fetchArticle: fetchData,
});

export default function root(state = initState, action) {
  console.log(state);
  return reducer(state, action);
}
