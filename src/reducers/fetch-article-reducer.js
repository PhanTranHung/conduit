import {
  ARTICLE_FETCHING,
  ARTICLE_FETCH_FAILED,
  ARTICLE_FETCH_REQUEST,
  ARTICLE_FETCH_SUCCEEDED,
  initinalArticles,
} from "../actions/fetch-article-actions";

const fetchTagReducer = (state = initinalArticles, action) => {
  debugger;
  switch (action.type) {
    case ARTICLE_FETCH_REQUEST:
      return state;
    case ARTICLE_FETCHING:
      return { ...state, isLoading: true };
    case ARTICLE_FETCH_SUCCEEDED:
      // console.log(action);
      return {
        ...state,
        //set state.tag[action.tag][action.offset] = action.articles
        tag: {
          ...state.tag,
          [action.tag]: {
            ...state.tag[action.tag],
            [action.offset]: action.articles,
          },
        },
        message: null,
        isLoading: false,
        // offset: { ...state.offset, [action.offset]: action.articles },
        articlesCount: action.articlesCount,
      };
    case ARTICLE_FETCH_FAILED:
      return { tags: [], message: action.message };
    default:
      return state;
  }
};

export default fetchTagReducer;
