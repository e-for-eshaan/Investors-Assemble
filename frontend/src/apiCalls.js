import axios from "axios";

// export const loginUsingToken = async (userToken, dispatch) => {
//   dispatch({ type: "LOGIN_START" });
//   try {
//     const res = await axios.get(`api/auth/tokenlogin/${userToken}`);
//     console.log(res);
//     const userAndToken = {
//       user: res.data.user,
//       token: res.data.accessToken,
//     };
//     dispatch({ type: "LOGIN_SUCCESS", payload: userAndToken });
//   } catch (err) {
//     dispatch({ type: "LOGIN_FAILURE", payload: err });
//   }
// };

export const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("api/auth/login", userCredentials);
    console.log(res);
    const userAndToken = {
      user: res.data.user,
      token: res.data.accessToken,
    };
    dispatch({ type: "LOGIN_SUCCESS", payload: userAndToken });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
