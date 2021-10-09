import classes from "./Editprofile.module.css";
import Navbar from "../homepage/Navbar";
import React from "react";
import dp from "../images/profile.png";

const Editprofile = (props) => {
  return (
    <div className={classes.wrapper}>
      <Navbar pos="relative" round="0" />
      <div className={classes.container}>
        <div className={classes.leftpane}>
          <img src={props.image} alt="" />
          <h2>{props.name}</h2>
          <h3> {props.accounttype}</h3>
          <p className={classes.bio}>{props.bio}</p>
          <h3 className={classes.date}> Joined: {props.date}</h3>
        </div>

        <div className={classes.rightpane}>
          <form>
            
              <h3> Name</h3> <p> {props.name} </p>
              <input type="text" placeholder="Enter new name" />
            
              <h3> Email</h3>
              <p> {props.email} </p>
              <input type="text" placeholder="Enter new E-mail" />
            
              <h3> Number</h3> 
              <p> {props.number} </p>
              <input type="text" placeholder="Change Number" />
            
              <h3> City</h3>
              <p> {props.city} </p>
              <input type="text" placeholder="Change City" /> 
            
            <h3> Password</h3>
            <div></div>
              <input type="text" placeholder="Enter new password" />
            
              <h3 className={classes.biohead}> Bio</h3>
              <p className={classes.bio}> {props.bio} </p>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Max 50 words"
              ></textarea>
              <div></div>
              <div></div>
              <button type="submit" className = {classes.btn}>Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Editprofile;

Editprofile.defaultProps = {
  name: "Default Name",
  text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores modi aliquid possimus explicabo atque illum ullam nisi maiores voluptas, similique illo, natus ratione veritatis enim voluptatum adipisci quisquam ea temporibus numquam rem id necessitatibus quasi nulla. Hic praesentium ipsum perferendis, numquam veritatis sit, maiores fuga repellendus tempora accusantium saepe ab.",
  password: "loremipsumdolersetamet",
  bio: "consectetur adipisicing elit. Dllendus  adipisicing elit. Dllendus  adipisicing elit. Dllendus tempora accusantium",
  image: dp,
  date: "24th July",
  accounttype: "investor",
  email: "xyzxyz@zyz.com",
  number: "9089786767",
  city: "atlantis",
};
