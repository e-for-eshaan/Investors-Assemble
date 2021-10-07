import classes from "./Feed.module.css";
import React from "react";
import Navbar from "../homepage/Navbar";

const Feed = () => {
  return (
    <div className = {classes.wrapper}>

      <Navbar pos="unset" round="0" />
      <div className={classes.container}>
        <h1>FEED</h1>
      </div>
    </div>
  );
};

export default Feed;
