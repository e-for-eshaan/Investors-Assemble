export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});
export const LoginSuccess = ({ user, token }) => ({
  type: "LOGIN_SUCCESS",
  payload: {
    user,
    token,
  },
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
