import classes from "./Homepage1.module.css";
import { motion } from "framer-motion";
import React from "react";
import Login from "./Login";
import bg1 from "../images/img1.svg";
// import bg2 from "../images/img2.svg";
import bg3 from "../images/img3.svg";
// import bg4 from "../images/img4.svg";
// import bg5 from "../images/img5.svg";
// import bg6 from "../images/img6.svg";
const Homepage1 = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: "-100vw",
    },
  };
  return (
    <motion.div
      className={classes.container}
      transition={{ ease: "easeOut", duration: 1 }}
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
    >
      <div className={classes.wrap}>
        <img className={classes.bg1} src={bg1} alt="" />
        <img className={classes.bg2} src={bg3} alt="" />
        <h1 className={classes.head}>Investors Assemble</h1>
        <p>Make your money reach the right ideas</p>
      </div>
      <Login />
    </motion.div>
  );
};

export default Homepage1;
