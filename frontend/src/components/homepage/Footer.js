import classes from "./Footer.module.css";

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
        <footer className={classes.footer}>
      <ul className={classes.alllinks}>
        <Link to='/' className={classes.links}><li className={classes.links}>Home</li></Link>
        <Link to='/register' className={classes.links}><li className={classes.links}>Register</li></Link>
        <a target="_blank" href='https://github.com/Eshaan-Y24/BugDevs_innovathon21' className={classes.links}><li className={classes.links}>GitHub</li></a>
        <a target="_blank" href='https://github.com/Eshaan-Y24/' className={classes.links}><li className={classes.links}>Eshaan</li></a>
        <a target="_blank" href='https://github.com/chiragsingh1/' className={classes.links}><li className={classes.links}>Chirag</li></a>
      </ul>
      <br />
        <p> © Eshaan and Chirag 2021</p>
      </footer>
  );
};

export default Footer;
