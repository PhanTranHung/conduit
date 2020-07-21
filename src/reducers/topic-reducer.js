import {
  TOPIC_FETCH_FAILED,
  TOPIC_FETCH_SUCCEEDED,
  TOPIC_FETCH_REQUEST,
  TOPIC_FETCHING,
  initinalTopic,
  TOPIC_COMMENTS_FETCH_FAILED,
  TOPIC_COMMENTS_FETCH_SUCCEEDED,
  TOPIC_COMMENTS_FETCH_REQUEST,
  TOPIC_COMMENTS_FETCHING,
  initinalTopicComments,
  POST_COMMENT_FAILED,
  POST_COMMENT,
  POST_COMMENT_SUCCEEDED,
  initinalPostComment,
  TOPIC_COMMENT_NEW,
  TOPIC_COMMENT_REMOVED,
  initinalDeleteComment,
  REMOVED,
  REMOVE_COMMENT,
  REMOVE_ERROR,
  REMOVING,
} from "../actions/topic-actions";

export const fetchTopic = (state = initinalTopic, action) => {
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

export const fetchTopicComments = (state = initinalTopicComments, action) => {
  const newState = state;
  debugger;
  switch (action.type) {
    case TOPIC_COMMENT_REMOVED:
      newState.comments = newState.comments.filter(
        (ele) => ele.id !== action.commentId
      );
      return newState;
    case TOPIC_COMMENT_NEW:
      newState.comments = [action.comment, ...state.comments];
      return newState;
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

export const postComment = (state = initinalPostComment, action) => {
  switch (action.type) {
    case POST_COMMENT:
      return { isPosting: true };
    case POST_COMMENT_SUCCEEDED:
      return { comment: action.comment };
    case POST_COMMENT_FAILED:
      return { error: true, message: action.message };
    default:
      return state;
  }
};

export const deleteComment = (state = initinalDeleteComment, action) => {
  debugger;
  switch (action.type) {
    case REMOVE_COMMENT:
      return { isRemoving: true };
    case REMOVING:
      return state;
    case REMOVED:
      return action.empty;
    case REMOVE_ERROR:
      return { message: action.message };
    default:
      return state;
  }
};
