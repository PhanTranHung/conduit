export const TAG_FETCH_REQUEST = "TAG_FETCH_REQUEST";
export const TAG_FETCH_SUCCEEDED = "TAG_FETCH_SUCCEEDED";
export const TAG_FETCH_FAILED = "TAG_FETCH_FAILED";
export const TAG_FETCHING = "TAG_FETCHING";

export const initinalTags = { tags: [], message: "" };

export const tagFetchRequest = () => ({
  type: TAG_FETCH_REQUEST,
});
export const tagFetching = () => ({
  type: TAG_FETCHING,
});
export const tagFetchSucceeded = (tags) => ({
  type: TAG_FETCH_SUCCEEDED,
  tags,
});
export const tagFetchFailed = (message) => ({
  type: TAG_FETCH_FAILED,
  message,
});
