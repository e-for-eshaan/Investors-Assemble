import classes from "./Homepage1.module.css";

import React from "react";
import Login from "./Login";

const Homepage1 = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrap}>
        <h1>LOREM IPSUM</h1>
      </div>
      <Login />
    </div>
  );
};

export default Homepage1;
