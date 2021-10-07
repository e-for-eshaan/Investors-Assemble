import classes from "./Rightpane.module.css";
import React from "react";
import Card from "./Card";

const Rightpane = () => {
  return (
    <div className={classes.rightpane}>
      <div className = {classes.scroll}>
        <h3 className = {classes.head}>News</h3>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <br />
      <div className = {classes.scroll}>
        <h3 className = {classes.head}>Trending</h3>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};


export default Rightpane;
