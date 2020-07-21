import {
  CLICKED_TAG,
  LET_IT_PASS,
  initinalTab,
} from "../actions/change-tab-actions";

const changeTabReducer = (state = initinalTab, action) => {
  switch (action.type) {
    case CLICKED_TAG:
      return Object.assign({}, state, { tab: action.tab, key: action.key });
    case LET_IT_PASS:
      // return Object.assign({}, state, initinalTab);
      return { ...state, tab: action.tabName, key: action.tabName };
    default:
      return state;
  }
};

export default changeTabReducer;
