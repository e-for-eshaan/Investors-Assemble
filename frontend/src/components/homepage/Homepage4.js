import classes from "./Homepage4.module.css";
import React from "react";
import Startup from "./Startup";
import { Fade } from "react-awesome-reveal";

const Homepage4 = () => {
  return (
    <div>
      <Fade triggerOnce={true}>
        <h1>Affiliated Startups</h1>
      </Fade>
      <Fade triggerOnce={true} direction="down">
        <div className={classes.container}>
          <Fade triggerOnce={true} direction="up">
            <Startup />
          </Fade>
          <Fade triggerOnce={true} delay={100} direction="down">
            <Startup />
          </Fade>
          <Fade triggerOnce={true} delay={200} direction="up">
            <Startup />
          </Fade>
          <Fade triggerOnce={true} delay={300} direction="down">
            <Startup />
          </Fade>
          <Fade triggerOnce={true} delay={400} direction="up">
            <Startup />
          </Fade>
          <Fade triggerOnce={true} delay={500} direction="dpwn">
            <Startup />
          </Fade>
          <Fade triggerOnce={true} delay={600} direction="up">
            <Startup />
          </Fade>
          <Fade triggerOnce={true} delay={700} direction="down">
            <Startup />
          </Fade>
          <Fade triggerOnce={true} delay={800} direction="up">
            <Startup />
          </Fade>
          <Fade triggerOnce={true} delay={900} direction="down">
            <Startup />
          </Fade>
        </div>
      </Fade>
    </div>
  );
};

export default Homepage4;
