import classes from "./Feed.module.css";
import React from "react";
import Leftpane from "./Leftpane";
import Rightpane from "./Rightpane";
import Allposts from "./Allposts";
import Navbar from "../homepage/Navbar";

const Feed = (props) => {
  const { user } = props;

  return (
    <div className={classes.wrapper}>
      <Navbar pos="unset" round="0" />
      <div className={classes.container}>
        <Leftpane user={user} />
        <Allposts user={user} />
        <Rightpane />
      </div>
    </div>
  );
};

export default Feed;
