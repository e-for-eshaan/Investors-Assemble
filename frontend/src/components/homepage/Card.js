import classes from "./Card.module.css";

import React from "react";


const Card = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.circle}><img src={props.imgsrc} alt="" /></div>
      <div className={classes.text}>
          <h3>{props.heading}</h3>
        <p>
          {props.comment}
          </p>
      </div>
    </div>
  );
};

export default Card;

Card.defaultProps = {    
  heading: "Something",    
  comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid cum voluptatem hic ea incidunt facilis omnis, eligendi itaque at et",    
  photo: "120"
}
