import classes from "./Form.module.css";
import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { loginCall } from "../../apiCalls";

const Form = () => {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogInSubmit = (e) => {
    e.preventDefault();
    console.log(email.current.value, password.current.value);
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className={classes.container}>
      <form onSubmit={handleLogInSubmit}>
        <h1>Login</h1>
        <input
          className={classes.input}
          type="email"
          required
          placeholder="Email"
          ref={email}
        />
        <br />
        <input
          className={classes.input}
          type="password"
          placeholder="Password"
          ref={password}
        />
        <button className = {classes.btn} type="submit" disabled={isFetching}>
          {isFetching ? "Logging In" : "Log In"}
        </button>
        <h4>New User?</h4>
        <span>
          <Link  style={{ textDecoration: 'none' }} to="/register">Register Here</Link>
        </span>
      </form>
    </div>
  );
};

export default Form;
