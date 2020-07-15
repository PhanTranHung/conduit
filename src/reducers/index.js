import changeTab from "./change-tab-reducer";
import { initinalTab } from "../actions/change-tab-actions";
import { initinalTags } from "../actions/fetch-tag-actions";
import fetchTag from "./fetch-tag-reducer";
import { combineReducers } from "redux";

const initState = {
  changeTab: initinalTab,
  fetchTag: initinalTags,
};

const reducer = combineReducers({
  changeTab,
  fetchTag,
});

export default function root(state = initState, action) {
  //   console.log(state);
  return reducer(state, action);
}
