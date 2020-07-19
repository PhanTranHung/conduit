/**
 * Use for fetch articles and tags data
 */

import {
  FETCH_DATA_FAILED,
  FETCH_DATA_SUCCEEDED,
  DATA_FETCHING,
  FETCH_ARTICLES_DATA_REQUEST,
  initinalData,
} from "../actions/fetch-data-actions";

const fetchTagReducer = (state = initinalData, action) => {
  // debugger;
  console.log(state);
  switch (action.type) {
    case FETCH_ARTICLES_DATA_REQUEST:
      return state;
    case DATA_FETCHING:
      return { ...state, isLoading: true };
    case FETCH_DATA_SUCCEEDED:
      return { ...state, data: action.data, isLoading: false, error: false };
    case FETCH_DATA_FAILED:
      return {
        ...state,
        message: action.message,
        error: true,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default fetchTagReducer;
