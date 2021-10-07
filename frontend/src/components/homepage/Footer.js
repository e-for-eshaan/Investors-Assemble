import classes from "./Footer.module.css";

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
        <footer className={classes.footer}>
      <ul className={classes.alllinks}>
        <Link to='/' className={classes.links}><li className={classes.links}>LINK 1</li></Link>
        <Link to='/' className={classes.links}><li className={classes.links}>LINK 2</li></Link>
        <Link to='/' className={classes.links}><li className={classes.links}>LINK 3</li></Link>
      </ul>
      <br />
        <p> © Eshaan and Chirag 2021</p>
      </footer>
  );
};

export default Footer;
