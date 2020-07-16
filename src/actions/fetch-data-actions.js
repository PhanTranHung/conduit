/**
 * Use for fetch articles and tags data
 */

export const FETCH_TAGS_DATA_REQUEST = "FETCH_TAGS_DATA_REQUEST";
export const FETCH_ARTICLES_DATA_REQUEST = "FETCH_ARTICLES_DATA_REQUEST";
export const FETCH_DATA_SUCCEEDED = "FETCH_DATA_SUCCEEDED";
export const FETCH_DATA_FAILED = "FETCH_DATA_FAILED";
export const DATA_FETCHING = "DATA_FETCHING";

export const initinalData = {
  data: [],
  message: "",
  isLoading: true,
  error: false,
};

export const fetchArticlesRequest = (tag, page) => ({
  type: FETCH_ARTICLES_DATA_REQUEST,
  tag,
  page,
});

export const fetchTagsRequest = () => ({
  type: FETCH_TAGS_DATA_REQUEST,
});
export const dataFetching = () => ({
  type: DATA_FETCHING,
});
export const fetchDataSucceeded = (data) => ({
  type: FETCH_DATA_SUCCEEDED,
  data,
});
export const fetchDataFailed = (message) => ({
  type: FETCH_DATA_FAILED,
  message,
});
