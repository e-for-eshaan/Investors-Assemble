import classes from "./Homepage3.module.css";
import React from "react";
import { Reviews } from "./Reviews";
import { Fade } from "react-awesome-reveal";
import bg1 from "../images/present2.svg";
import bg2 from "../images/present3.svg";
import dp1 from "../images/dp1.jpg";
import dp2 from "../images/dp2.jpg";
import dp3 from "../images/dp4.jpg";
import Tilt from "react-tilt";

const Homepage3 = () => {
  return (
    <div className={classes.wrapper}>
      <Fade triggerOnce={true} direction="up">
        <h1 className={classes.containerhead}>What They say</h1>
      </Fade>
      <img src={bg1} className={classes.bg1} alt="" />
      <img src={bg2} className={classes.bg2} alt="" />

      <div className={classes.container}>
        {/* <Tilt
          className="Tilt"
          options={{ max: 25 }}
          style={{ height: 250, width: 250 }}
        > */}
          <Fade triggerOnce={true} direction="left">
            <Reviews
              dp={dp1}
              name="Esky"
              comment="Works Excellently for me, effortless reach and netwroking. Big help, great asset!"
            />
          </Fade>
        {/* </Tilt> */}
        <Fade triggerOnce={true} direction="down">
          <Reviews
            dp={dp2}
            name="Andrew"
            heading="Clev⋅er"
            notation="/ˈklɛvə/"
            comment="The design is clever, functionality is supreme, i can see the growth already"
          />
        </Fade>
        <Fade triggerOnce={true} direction="right">
          <Reviews
            dp={dp3}
            name="Jacob"
            heading="Sm⋅oo⋅th"
            notation="/smuːð//"
            comment="The UI is smooth, the pages are responsive, works wonders! Definitely a big help"
          />
        </Fade>
      </div>
    </div>
  );
};

export default Homepage3;
