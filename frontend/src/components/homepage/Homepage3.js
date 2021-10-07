import classes from "./Homepage3.module.css";
import React from "react";
import { Reviews } from "./Reviews";
import { Fade } from "react-awesome-reveal";

const Homepage3 = () => {
  return (
    <div>
      <Fade triggerOnce={true} direction="up">
      <h1 className={classes.containerhead}>What They say</h1>
      </Fade >
      <div className={classes.container}>
        <Fade triggerOnce={true} direction="left">
          <Reviews />
        </Fade>
        <Fade triggerOnce={true} direction="down" >
          <Reviews heading="Clev⋅er" notation="/ˈklɛvə/" />
        </Fade>
        <Fade triggerOnce={true} direction="right">
          <Reviews heading="Sm⋅oo⋅th" notation="/smuːð//" />
        </Fade>
      </div>
    </div>
  );
};

export default Homepage3;
