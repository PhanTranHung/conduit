import {
  TOPIC_FETCH_FAILED,
  TOPIC_FETCH_SUCCEEDED,
  TOPIC_FETCH_REQUEST,
  TOPIC_FETCHING,
  initinalTopic,
} from "../actions/fetch-topic-actions";

const fetchTopicReducer = (state = initinalTopic, action) => {
  debugger;
  switch (action.type) {
    case TOPIC_FETCHING:
      return state;
    case TOPIC_FETCH_REQUEST:
      return { ...state, slug: action.slug };
    case TOPIC_FETCH_SUCCEEDED:
      return { ...state, article: action.article, message: null, error: false };
    case TOPIC_FETCH_FAILED:
      return { ...state, message: action.message, error: true };
    default:
      return state;
  }
};

export default fetchTopicReducer;
