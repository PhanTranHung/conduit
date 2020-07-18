export const TOPIC_FETCH_REQUEST = "TOPIC_FETCH_REQUEST";
export const TOPIC_FETCH_SUCCEEDED = "TOPIC_FETCH_SUCCEEDED";
export const TOPIC_FETCH_FAILED = "TOPIC_FETCH_FAILED";
export const TOPIC_FETCHING = "TOPIC_FETCHING";

export const initinalTopic = {
  article: {},
  message: "",
  error: false,
  isLoading: true,
};

export const topicFetchRequest = (slug) => ({
  type: TOPIC_FETCH_REQUEST,
  slug,
});
export const topicFetching = () => ({
  type: TOPIC_FETCHING,
});
export const topicFetchSucceeded = (article) => ({
  type: TOPIC_FETCH_SUCCEEDED,
  article,
});
export const topicFetchFailed = (message) => ({
  type: TOPIC_FETCH_FAILED,
  message,
});
