import classes from "./Newpost.module.css";
import React, { useEffect, useState } from "react";
import dp from "../images/profile.png";
import axios from "axios";
import { Link } from "react-router-dom";

const OtherUserPosts = (props) => {
  const { loggedUser } = props;
  // state for storing user details of each post
  const [user, setUser] = useState({});
  // fetching user details of each post from API using props.userId
  useEffect(() => {
    let mounted = true;
    const fetchUser = async () => {
      const res = await axios.get(`/api/users/${props.userId}`);
      if (mounted) {
        setUser(res.data);
      }
    };
    fetchUser();
    return () => {
      mounted = false;
    };
  }, [props.userId]);

  //   console.log(user);
  return (
    <div className={classes.newpost}>
      <div className={classes.head}>
        <img
          src={user.avatar === "" ? props.dp : user.avatar}
          alt="404_user_img"
        />
        {loggedUser._id === user._id ? (
          
            <h2><Link to="/user/profile" style={{textDecoration:'none'}}>{user.name}</Link></h2>
          
        ) : (
          <Link to={`/user/otherprofile/${user._id}`}>
            <h2>{user.name}</h2>
          </Link>
        )}
        {/* <h2>{user.name}</h2> */}
        <div className={classes.time}>
          <h6>{props.time}</h6>
        </div>
      </div>
      <div className={classes.text}>
        {props.img !== "" && (
          <img
            src={`http://localhost:5000/images/${props.img}`}
            alt="404_post_img"
            className={classes.image}
          />
        )}
        {props.desc}
      </div>
    </div>
  );
};

OtherUserPosts.defaultProps = {
  name: "Default Name",
  text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores modi aliquid possimus explicabo atque illum ullam nisi maiores voluptas, similique illo, natus ratione veritatis enim voluptatum adipisci quisquam ea temporibus numquam rem id necessitatibus quasi nulla. Hic praesentium ipsum perferendis, numquam veritatis sit, maiores fuga repellendus tempora accusantium saepe ab.",
  date: "24th July, 2019",
  time: "7:30pm",
  image: "https://picsum.photos/536/354",
  dp,
};

export default OtherUserPosts;
