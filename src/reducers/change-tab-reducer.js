import {
  CLICKED_TAG,
  REMOVE_CLICKED_TAG,
  initinalTab,
} from "../actions/change-tab-actions";

const changeTabReducer = (state = initinalTab, action) => {
  switch (action.type) {
    case CLICKED_TAG:
      return Object.assign({}, state, { tab: action.tab, key: action.key });
    case REMOVE_CLICKED_TAG:
      return Object.assign({}, state, initinalTab);
    default:
      return state;
  }
};

export default changeTabReducer;
