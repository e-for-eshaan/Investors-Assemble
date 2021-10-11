export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});
export const LoginSuccess = (userAndToken) => ({
  type: "LOGIN_SUCCESS",
  payload: userAndToken,
});
export const LoginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});

// LOGOUT ACTIONS
export const LogoutSuccess = () => ({
  type: "LOGOUT_SUCCESS",
});
export const LogoutFailure = (error) => ({
  type: "LOGOUT_FAILURE",
  payload: error,
});
