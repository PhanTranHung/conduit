import {
  LOGING,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCEEDED,
  initinalUserInfo,
} from "../actions/login-actions";

const login = (state = initinalUserInfo, action) => {
  switch (action.type) {
    case LOGING:
      return state;
    case LOGIN_REQUEST:
      return { ...state, email: action.email, password: action.password };
    case LOGIN_SUCCEEDED:
      return { ...state, user: action.user, message: null, error: false };
    case LOGIN_FAILED:
      return { ...state, message: action.message, error: true };
    default:
      return state;
  }
};

export default login;
