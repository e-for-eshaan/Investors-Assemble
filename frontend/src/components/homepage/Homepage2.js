import classes from "./Homepage2.module.css";
import React from "react";
import Card from "./Card";
import { Fade } from "react-awesome-reveal";
import img1 from "../images/grow.gif"
import img2 from "../images/idea.gif"
import img3 from "../images/shake.gif"
import img4 from "../images/recruit.gif"
import bg from "../images/img7.svg"
import bg2 from "../images/img8.svg"


const Homepage2 = () => {
  return (
    <div className={classes.container}>
      <img src={bg} alt="" className = {classes.bg}/>
      <img src={bg2} className = {classes.bg2} alt="" />
      <Fade triggerOnce={true} direction="up">
      <h1 className={classes.features}>What We Provide</h1>
      </Fade>
      <div className={classes.wrap}>
        <Fade triggerOnce={true} >
        <Card imgsrc={img1} text="" head=""/>
        </Fade>
        <Fade triggerOnce={true} delay={200}>
        <Card imgsrc={img2} text="" head=""/>
        </Fade>
        <Fade triggerOnce={true} delay={400}>
        <Card imgsrc={img3} text="" head=""/>
        </Fade>
        <div className = {classes.temp}>x</div>
        <Fade triggerOnce={true} delay={600}>
        <Card imgsrc={img4} text="" head=""/>
        </Fade>
      </div>
    </div>
  );
};

export default Homepage2;
