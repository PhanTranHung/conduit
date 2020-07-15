import {
  TAG_FETCH_FAILED,
  TAG_FETCH_SUCCEEDED,
  TAG_FETCH_REQUEST,
  TAG_FETCHING,
  initinalTags,
} from "../actions/fetch-tag-actions";

const fetchTagReducer = (state = initinalTags, action) => {
  debugger;
  switch (action.type) {
    case TAG_FETCHING:
      return state;
    case TAG_FETCH_REQUEST:
      return state;
    case TAG_FETCH_SUCCEEDED:
      return { tags: action.tags, message: null };
    case TAG_FETCH_FAILED:
      return { tags: [], message: action.message };
    default:
      return state;
  }
};

export default fetchTagReducer;
