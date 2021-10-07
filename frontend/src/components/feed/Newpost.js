import classes from './Newpost.module.css' 
import React from 'react'
import dp from '../images/profile.png'

const Newpost = (props) => {
    return (
        <div className = {classes.newpost}>
            <div className = {classes.head}>
            <img src={props.dp} alt="404" />
            <h2>{props.name}</h2>
            <div className = {classes.time}>
            <h6>{props.date}</h6>
            <h6>{props.time}</h6>
            </div>
            </div>
            <div className = {classes.text}>
                <img src={props.image} alt="" className = {classes.image}/>
                {props.text}
            </div>
        </div>
    )
}

Newpost.defaultProps = {    
    name: "Default Name",    
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores modi aliquid possimus explicabo atque illum ullam nisi maiores voluptas, similique illo, natus ratione veritatis enim voluptatum adipisci quisquam ea temporibus numquam rem id necessitatibus quasi nulla. Hic praesentium ipsum perferendis, numquam veritatis sit, maiores fuga repellendus tempora accusantium saepe ab.",
    date: "24th July, 2019",
    time: "7:30pm",
    image: "https://picsum.photos/536/354",
    dp: dp,
  }

export default Newpost
