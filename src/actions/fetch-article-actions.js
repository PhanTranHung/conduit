export const ARTICLE_FETCH_REQUEST = "ARTICLE_FETCH_REQUEST";
export const ARTICLE_FETCH_SUCCEEDED = "ARTICLE_FETCH_SUCCEEDED";
export const ARTICLE_FETCH_FAILED = "ARTICLE_FETCH_FAILED";
export const ARTICLE_FETCHING = "ARTICLE_FETCHING";

export const initinalArticles = {
  offset: {}, //offset {[page]: [article comments]}
  articlesCount: 0,
  tag: {},
  message: "",
  error: false,
  isLoading: true,
};

export const articleFetchRequest = (tag, offset) => ({
  type: ARTICLE_FETCH_REQUEST,
  tag,
  offset,
});
export const articleFetching = () => ({
  type: ARTICLE_FETCHING,
});
export const articleFetchSucceeded = ({ ...params }) => ({
  // params = offset, articles, articlesCount, tag
  type: ARTICLE_FETCH_SUCCEEDED,
  ...params,
});
export const articleFetchFailed = (message) => ({
  type: ARTICLE_FETCH_FAILED,
  message,
});
