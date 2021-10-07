import classes from "./Footer.module.css";

import React from "react";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <ul className={classes.alllinks}>
        <li className={classes.links}>LINK 1</li>
        <li className={classes.links}>LINK 2</li>
        <li className={classes.links}>LINK 3</li>
      </ul>
      <br />
      <p> © Eshaan and Chirag 2021</p>
    </footer>
  );
};

export default Footer;
