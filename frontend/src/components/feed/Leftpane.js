import classes from './Leftpane.module.css' 
import React from 'react'
import dp from '../images/profile.png'

const Leftpane = (props) => {
    return (
        <div className = {classes.leftpane}>
                <img src={dp} alt="" className = {classes.dp}/>
                <div className = {classes.btn}>{props.name}</div>
        </div>
    )
}

export default Leftpane

Leftpane.defaultProps = {    
    name: "Default Name",    
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores modi aliquid possimus explicabo atque illum ullam nisi maiores voluptas, similique illo, natus ratione veritatis enim voluptatum adipisci quisquam ea temporibus numquam rem id necessitatibus quasi nulla. Hic praesentium ipsum perferendis, numquam veritatis sit, maiores fuga repellendus tempora accusantium saepe ab.",
    date: "24th July, 2019",
    time: "7:30pm",
    image: "https://picsum.photos/536/354",
    dp: dp,
  }

