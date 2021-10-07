import classes from "./Reviews.module.css";
import React from "react";
import quotes from "../images/quotes.png";
import photo from "../images/profile.png";

export const Reviews = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className = {classes.top}>
      <img src={props.dp} alt="" className={classes.img} />
      <div className = {classes.headtext}>
      <h2 className={classes.head}>{props.heading}</h2>
      <h3 className={classes.notation}>{props.notation}</h3>
      </div>
      </div>
      <div className={classes.text}>
        <img src={quotes} alt="none" className={classes.openquotes} />
        <p>{props.comment}</p>
        <img src={quotes} alt="none" className={classes.closedquotes} />
      </div>
      <p className={classes.name}>- {props.name}</p>
    </div>
  );
};

Reviews.defaultProps = {
  heading: "Exc⋅ell⋅ent",
  notation: "/ˈɛks(ə)l(ə)nt/",
  comment:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fugiat hic unde",
  name: "Eshaan",
  dp: photo,
};
