import classes from "./Homepage4.module.css";
import React from "react";
import Startup from "./Startup";
import {  Fade } from "react-awesome-reveal";
import logo1 from "../logos/img1.png";
import logo2 from "../logos/img2.jpg";
import logo3 from "../logos/img3.jpg";
import logo4 from "../logos/img4.jpg";
import logo5 from "../logos/img5.jpg";
import logo6 from "../logos/img6.jpg";
import logo7 from "../logos/img7.jpg";
import logo8 from "../logos/img8.png";
import logo9 from "../logos/img9.jpg";
import logo10 from "../logos/img10.jpg";
const Homepage4 = () => {
  return (
    <div className = {classes.wrap}>
      <Fade triggerOnce={true}>
        <h1 style={{ color: "white" }}>Affiliated Startups</h1>
       </Fade>
      <Fade triggerOnce={true} direction="down">
        <div className={classes.container}>
          <Fade triggerOnce={true} direction="up">
            <Startup img={logo1} text='' />
          </Fade>
          <Fade triggerOnce={true} delay={100} direction="down">
            <Startup img={logo2} text='' />
          </Fade>
          <Fade triggerOnce={true} delay={200} direction="up">
            <Startup img={logo3} text='' />
          </Fade>
          <Fade triggerOnce={true} delay={300} direction="down">
            <Startup img={logo4} text='' />
          </Fade>
          <Fade triggerOnce={true} delay={400} direction="up">
            <Startup img={logo5} text='' />
          </Fade>
          <Fade triggerOnce={true} delay={500} direction="dpwn">
            <Startup img={logo6} text='' />
          </Fade>
          <Fade triggerOnce={true} delay={600} direction="up">
            <Startup img={logo7} text='' />
          </Fade>
          <Fade triggerOnce={true} delay={700} direction="down">
            <Startup img={logo8} text='' />
          </Fade>
          <Fade triggerOnce={true} delay={800} direction="up">
            <Startup img={logo9} text='' />
          </Fade>
          <Fade triggerOnce={true} delay={900} direction="down">
            <Startup img={logo10} text=''/>
          </Fade>
        </div>
      </Fade>
    </div>
  );
};

export default Homepage4;
