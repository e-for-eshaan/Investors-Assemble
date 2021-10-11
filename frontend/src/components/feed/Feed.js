import classes from "./Feed.module.css";
import React from "react";
import Leftpane from "./Leftpane";
import Rightpane from "./Rightpane";
import Allposts from "./Allposts";
import Navbar from "../homepage/Navbar";
// import Overlay from "react-overlay-component";
// import SideNav from "react-simple-sidenav";
import SlidingPane from "react-sliding-pane";
import { useState } from "react";
import { motion } from "framer-motion";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { Link } from "react-router-dom";
const Feed = (props) => {
  const { user } = props;
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: "100vw",
    },
  };

  return (
    <motion.div
      className={classes.wrapper}
      initial="out"
      transition={{ ease: "easeOut", duration: 1 }}
      animate="in"
      exit="out"
      variants={pageTransition}
    >
      <Navbar
        pos="unset"
        round="0"
        clicker={() => setState({ isPaneOpenLeft: true })}
      />

      <div className={classes.container}>
        <Leftpane user={user} />
        <SlidingPane
          isOpen={state.isPaneOpen}
          onRequestClose={() => {
            // triggered on "<" on left top click or on outside click
            setState({ isPaneOpen: false });
          }}
          width="70%"
        >
          <Rightpane overlay={true} />
        </SlidingPane>

        <SlidingPane
          isOpen={state.isPaneOpenLeft}
          title="Menu"
          from="left"
          onRequestClose={() => setState({ isPaneOpenLeft: false })}
          width="11rem"
        >
          <ul className={classes.overlay}>
            {user && (
              <Link to="/feed" className={classes.listitem}>
                <li className={classes.listitem}>Feed</li>
              </Link>
            )}
            {user && (
              <Link to="/user/profile" className={classes.listitem}>
                <li className={classes.listitem}>Profile</li>
              </Link>
            )}
            {user && (
              <Link to="/logout" className={classes.listitem}>
                <li className={classes.listitem}>Log Out</li>
              </Link>
            )}
            <li className={classes.listitem}>
              <button
                className={classes.btn}
                onClick={() => setState({ isPaneOpen: true })}
              >
                News
              </button>
            </li>
          </ul>
        </SlidingPane>

        <Allposts user={user} />

        <div className={classes.flexrightpane}>
          <Rightpane rightpane={true} />
        </div>
      </div>
    </motion.div>
  );
};

export default Feed;
