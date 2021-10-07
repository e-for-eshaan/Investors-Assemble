import classes from "./Feed.module.css";
import React from "react";
import Leftpane from "./Leftpane";
import Rightpane from "./Rightpane";
import Allposts from "./Allposts";
import Navbar from "../homepage/Navbar";

const Feed = () => {
  return (
    <div className = {classes.wrapper}>

      <Navbar pos="unset" round="0" />
      <div className={classes.container}>
        <Leftpane />
        <Allposts />
        <Rightpane />
      </div>
    </div>
  );
};

export default Feed;
