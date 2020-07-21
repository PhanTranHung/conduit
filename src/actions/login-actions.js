export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCEEDED = "LOGIN_SUCCEEDED";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGING = "LOGING";

export const CHECKLOGIN = "CHECKLOGIN";
export const CHECKING = " CHECKING";
export const CHECKING_SUCCEEDED = "CHECKING_SUCCEEDED";
export const CHECKING_FAILED = "CHECKING_FAILED";

export const LOGOUT = "LOGOUT";

export const initinalUserInfo = {
  // email: "",
  // password: "",
  error: false,
  isLoading: true,
  message: "",
  isSigned: false,
};

export const loginRequest = (email, password) => ({
  type: LOGIN_REQUEST,
  email,
  password,
});
export const loging = () => ({ type: LOGING });
export const loginSucceeded = (user) => ({ type: LOGIN_SUCCEEDED, user });
export const loginFailed = (message) => ({
  type: LOGIN_FAILED,
  message,
});

export const checkLogin = () => ({ type: CHECKLOGIN });
export const checking = () => ({ type: CHECKING });
export const checkingSucceeded = (user) => ({ type: LOGIN_SUCCEEDED, user });
export const checkingFailed = (message) => ({
  type: CHECKING_FAILED,
  message: message,
});

export const logout = () => ({ type: LOGOUT });
