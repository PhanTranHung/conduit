export const ARTICLE_FETCH_REQUEST = "ARTICLE_FETCH_REQUEST";
export const ARTICLE_FETCH_SUCCEEDED = "ARTICLE_FETCH_SUCCEEDED";
export const ARTICLE_FETCH_FAILED = "ARTICLE_FETCH_FAILED";
export const ARTICLE_FETCHING = "ARTICLE_FETCHING";

export const initinalTags = { tags: [], message: "" };

export const articleFetchRequest = (tag, page) => ({
  type: ARTICLE_FETCH_REQUEST,
  tag,
  page,
});
export const articleFetching = () => ({
  type: ARTICLE_FETCHING,
});
export const articleFetchSucceeded = (tags) => ({
  type: ARTICLE_FETCH_SUCCEEDED,
  tags,
});
export const articleFetchFailed = (message) => ({
  type: ARTICLE_FETCH_FAILED,
  message,
});
