export const TOPIC_COMMENTS_FETCH_REQUEST = "TOPIC_COMMENTS_FETCH_REQUEST";
export const TOPIC_COMMENTS_FETCH_SUCCEEDED = "TOPIC_COMMENTS_FETCH_SUCCEEDED";
export const TOPIC_COMMENTS_FETCH_FAILED = "TOPIC_COMMENTS_FETCH_FAILED";
export const TOPIC_COMMENTS_FETCHING = "TOPIC_COMMENTS_FETCHING";

export const initinalTopicComments = {
  comments: [],
  message: "",
  error: false,
  isLoading: true,
};

export const articleFetchRequest = (slug) => ({
  type: TOPIC_COMMENTS_FETCH_REQUEST,
  slug,
});
export const articleFetching = () => ({
  type: TOPIC_COMMENTS_FETCHING,
});
export const articleFetchSucceeded = (comments) => ({
  type: TOPIC_COMMENTS_FETCH_SUCCEEDED,
  comments,
});
export const articleFetchFailed = (message) => ({
  type: TOPIC_COMMENTS_FETCH_FAILED,
  message,
});
