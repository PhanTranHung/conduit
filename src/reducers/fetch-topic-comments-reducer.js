import {
  TOPIC_COMMENTS_FETCH_FAILED,
  TOPIC_COMMENTS_FETCH_SUCCEEDED,
  TOPIC_COMMENTS_FETCH_REQUEST,
  TOPIC_COMMENTS_FETCHING,
  initinalTopicComments,
} from "../actions/fetch-topic-comments-action";

const fetchTagReducer = (state = initinalTopicComments, action) => {
  debugger;
  switch (action.type) {
    case TOPIC_COMMENTS_FETCHING:
      return { ...state, isLoading: true };
    case TOPIC_COMMENTS_FETCH_REQUEST:
      return state;
    case TOPIC_COMMENTS_FETCH_SUCCEEDED:
      return {
        ...state,
        comments: action.comments,
        message: null,
        isLoading: false,
      };
    case TOPIC_COMMENTS_FETCH_FAILED:
      return { ...state, message: action.message, error: true };
    default:
      return state;
  }
};

export default fetchTagReducer;
