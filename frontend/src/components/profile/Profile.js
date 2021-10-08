import classes from "./Profile.module.css";
import React from "react";
import Navbar from "../homepage/Navbar";
import dp from "../images/profile.png";
import Newpost from "../feed/Newpost";
import Footer from "../homepage/Footer";
import { Link } from "react-router-dom";

const Profile = (props) => {
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
          <Link to='/user/editprofile'><h3>Edit Profile</h3></Link>
        </div>
        <div className={classes.rightpane}>
            <h1>MY POSTS</h1>
          <Newpost />
          <Newpost />
          <Newpost />
          <Newpost />
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Profile;

Profile.defaultProps = {
  name: "Default Name",
  text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores modi aliquid possimus explicabo atque illum ullam nisi maiores voluptas, similique illo, natus ratione veritatis enim voluptatum adipisci quisquam ea temporibus numquam rem id necessitatibus quasi nulla. Hic praesentium ipsum perferendis, numquam veritatis sit, maiores fuga repellendus tempora accusantium saepe ab.",
  password: "loremipsumdolersetamet",
  bio: "consectetur adipisicing elit. Dllendus  adipisicing elit. Dllendus  adipisicing elit. Dllendus tempora accusantium",
  image: dp,
  date: "24th July",
  accounttype: "investor",
};
