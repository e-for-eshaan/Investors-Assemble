import classes from "./Homepage2.module.css";
import React from "react";
import Card from "./Card";
import { Fade } from "react-awesome-reveal";
import img1 from "../images/grow.gif";
import img2 from "../images/idea.gif";
import img3 from "../images/shake.gif";
import img4 from "../images/recruit.gif";
import bg from "../images/img7.svg";
import bg2 from "../images/img8.svg";

const Homepage2 = () => {
  return (
    <div className={classes.container}>
      <img src={bg} alt="" className={classes.bg} />
      <img src={bg2} className={classes.bg2} alt="" />
      <Fade triggerOnce={true} direction="up">
        <h1 className={classes.features}>What We Provide</h1>
      </Fade>
      <div className={classes.wrap}>
        <Fade triggerOnce={true}>
          <Card
            imgsrc={img1}
            comment="We provide accelerated network reach, so you don't have to bother turning the yellow pages"
            heading="Grow with others"
          />
        </Fade>
        <Fade triggerOnce={true} delay={200}>
          <Card
            imgsrc={img2}
            comment="The only way this app works is if your ideas are worth it. If that idea sells, Our app works"
            heading="Sell your grey matter"
          />
        </Fade>
        <Fade triggerOnce={true} delay={400}>
          <Card
            imgsrc={img3}
            comment="Likeminded people are waiting to find you and be found. What's better than entrepreneur-entrepreneur comraderie"
            heading="Meet People"
          />
        </Fade>
        <Fade triggerOnce={true} delay={600}>
          <Card
            imgsrc={img4}
            comment="If money grows, make it work! Hire people, find investors, find something to invest in. We are here for your endeavours"
            heading="Find and recruit"
          />
        </Fade>
      </div>
    </div>
  );
};

export default Homepage2;
