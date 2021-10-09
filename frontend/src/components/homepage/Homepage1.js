import classes from "./Homepage1.module.css";

import React from "react";
import Login from "./Login";
import img1 from "../images/img1.svg";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.png";
import img8 from "../images/img8.png";
const Homepage1 = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrap}>
        <h1 className={classes.head}>Investors Assemble</h1>
        <div className={classes.scroll}>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
          <img src={img8} alt="" />
        </div>
      </div>
      <Login />
    </div>
  );
};

export default Homepage1;
