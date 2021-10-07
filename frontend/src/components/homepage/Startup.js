import classes from "./Startup.module.css"
import React from 'react'
import dp from '../images/profile.png'
const Startup = (props) => {
    return (
        <div className = {classes.container}>
        <div className = {classes.wrapper}>
            <img src={props.img} alt="none" className = {classes.wrapper} />
        </div>
        <p>{props.text}</p>
        </div>
    )
}

export default Startup

Startup.defaultProps = {
    img:dp,
    text:"Lorem",
  };
  

