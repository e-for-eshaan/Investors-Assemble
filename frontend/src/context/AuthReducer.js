const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload.user,
        isFetching: false,
        error: null,
        token: action.payload.token,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: action.payload.data,
        token: null,
      };
    case "LOGOUT_SUCCESS":
      return {
        user: null,
        isFetching: false,
        error: null,
        token: null,
      };
    case "LOGOUT_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: action.payload.data,
        token: null,
      };
    default:
      return state;
  }
};

export default AuthReducer;
