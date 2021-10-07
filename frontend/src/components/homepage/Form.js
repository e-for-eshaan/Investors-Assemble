import classes from "./Form.module.css";
import React from "react";

const Form = () => {
  return (
    <div className = {classes.container}>
      <form action="">
        <h1>Login</h1>
        <input className = {classes.input} type="text" placeholder="Username"/>
        <br />
        <input className = {classes.input} type="password" placeholder="Password"/>
      </form>
    </div>
  );
};


export default Form;
