export const TOPIC_FETCH_REQUEST = "TOPIC_FETCH_REQUEST";
export const TOPIC_FETCH_SUCCEEDED = "TOPIC_FETCH_SUCCEEDED";
export const TOPIC_FETCH_FAILED = "TOPIC_FETCH_FAILED";
export const TOPIC_FETCHING = "TOPIC_FETCHING";

export const TOPIC_COMMENTS_FETCH_REQUEST = "TOPIC_COMMENTS_FETCH_REQUEST";
export const TOPIC_COMMENTS_FETCH_SUCCEEDED = "TOPIC_COMMENTS_FETCH_SUCCEEDED";
export const TOPIC_COMMENTS_FETCH_FAILED = "TOPIC_COMMENTS_FETCH_FAILED";
export const TOPIC_COMMENTS_FETCHING = "TOPIC_COMMENTS_FETCHING";
export const TOPIC_COMMENT_NEW = "TOPIC_COMMENT_NEW";
export const TOPIC_COMMENT_REMOVED = "TOPIC_COMMENT_REMOVED";

export const POST_COMMENT = "POST_COMMENT";
export const POST_COMMENT_SUCCEEDED = "POST_COMMENT_SUCCEEDED";
export const POST_COMMENT_FAILED = "POST_COMMENT_FAILED";

export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const REMOVING = "REMOVING";
export const REMOVED = "REMOVED";
export const REMOVE_ERROR = "REMOVE_ERROR";

export const initinalTopicComments = {
  comments: [],
  message: "",
  error: false,
  isLoading: true,
};

export const initinalTopic = {
  article: {},
  message: "",
  error: false,
  isLoading: true,
};

export const initinalPostComment = {
  isPostding: false,
};

export const initinalDeleteComment = {
  isRemoving: false,
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

export const topicCommentFetchRequest = (slug) => ({
  type: TOPIC_COMMENTS_FETCH_REQUEST,
  slug,
});
export const topicCommentFetching = () => ({
  type: TOPIC_COMMENTS_FETCHING,
});
export const topicCommentFetchSucceeded = (comments) => ({
  type: TOPIC_COMMENTS_FETCH_SUCCEEDED,
  comments,
});
export const topicCommentFetchFailed = (message) => ({
  type: TOPIC_COMMENTS_FETCH_FAILED,
  message,
});
export const topicCommentNew = (comment) => ({
  type: TOPIC_COMMENT_NEW,
  comment,
});
export const topicCommentRemoved = (commentId) => ({
  type: TOPIC_COMMENT_REMOVED,
  commentId,
});

export const postComment = (slug, text) => ({
  type: POST_COMMENT,
  slug,
  text,
});
export const postCommentSucceeded = (comment) => ({
  type: POST_COMMENT_SUCCEEDED,
  comment,
});
export const postCommentFailed = (message) => ({
  type: POST_COMMENT_FAILED,
  message,
});

export const removeComment = (slug, commentId) => ({
  type: REMOVE_COMMENT,
  slug,
  commentId,
});
export const removing = () => ({
  type: REMOVING,
});
export const removed = (empty) => ({
  type: REMOVED,
  empty,
});
export const removeError = (message) => ({
  type: REMOVE_ERROR,
  message,
});
