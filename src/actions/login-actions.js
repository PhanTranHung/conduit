export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCEEDED = "LOGIN_SUCCEEDED";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGING = "LOGING";

export const initinalUserInfo = {
  email: "",
  password: "",
  error: false,
  loging: true,
  message: "",
};

export const loginRequest = (email, password) => ({
  type: LOGIN_REQUEST,
  email,
  password,
});
export const loging = () => ({
  type: LOGING,
});
export const loginSucceeded = (user) => ({
  type: LOGIN_SUCCEEDED,
  user,
});
export const loginFailed = (message) => ({
  type: LOGIN_FAILED,
  message,
});
