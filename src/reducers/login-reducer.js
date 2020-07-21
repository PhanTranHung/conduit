import {
  LOGING,
  LOGIN_FAILED,
  // LOGIN_REQUEST,
  LOGIN_SUCCEEDED,
  CHECKING,
  // CHECKLOGIN,
  LOGOUT,
  initinalUserInfo,
} from "../actions/login-actions";

const login = (state = initinalUserInfo, action) => {
  switch (action.type) {
    case LOGING:
    case CHECKING:
      return { ...state, isLoading: true, isSigned: false };

    // case CHECKLOGIN:
    //   return { ...state, isSigned: false };

    // case LOGIN_REQUEST:
    //   return state;

    case LOGIN_SUCCEEDED:
      return {
        ...state,
        user: action.user,
        message: null,
        error: false,
        isLoading: false,
        isSigned: true,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        message: action.message,
        error: true,
        isLoading: false,
        isSigned: false,
      };
    case LOGOUT:
      return { ...state, user: null, isSigned: false };
    default:
      return state;
  }
};

export default login;
