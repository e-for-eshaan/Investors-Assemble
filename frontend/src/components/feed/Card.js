import classes from "./Card.module.css";

import React from "react";

const Card = (props) => {
  return (
    <div className={classes.container}>
      <img src={props.image} alt="404" className = {classes.image} />
      <p className = {classes.text}>{props.text}</p>
    </div>
  );
};

export default Card;

Card.defaultProps = {
  name: "Default Name",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, eveniet!", 
  date: "24th July, 2019",
  time: "7:30pm",
  image: "https://picsum.photos/536/354",
};
