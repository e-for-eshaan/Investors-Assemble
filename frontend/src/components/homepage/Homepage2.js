import classes from "./Homepage2.module.css";
import React from "react";
import Card from "./Card";
import { Fade } from "react-awesome-reveal";


const Homepage2 = () => {
  return (
    <div className={classes.container}>
      <Fade triggerOnce={true} direction="up">
      <h1 className={classes.features}>What We Provide</h1>
      </Fade>
      <div className={classes.wrap}>
        <Fade triggerOnce={true} >
        <Card imgsrc="xyz" text="" head=""/>
        </Fade>
        <Fade triggerOnce={true} delay={200}>
        <Card imgsrc="xyz" text="" head=""/>
        </Fade>
        <Fade triggerOnce={true} delay={400}>
        <Card imgsrc="xyz" text="" head=""/>
        </Fade>
        <Fade triggerOnce={true} delay={600}>
        <Card imgsrc="xyz" text="" head=""/>
        </Fade>
      </div>
    </div>
  );
};

export default Homepage2;
