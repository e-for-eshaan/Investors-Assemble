import classes from "./Login.module.css";
import React from "react";
import Form from "./Form";

const Login = (props) => {
  return (
    <div className={props.overlay ? classes.overlay : classes.login} >
      <Form />
    </div>
  );
};

export default Login;
