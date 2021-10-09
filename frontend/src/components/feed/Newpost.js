import classes from "./Newpost.module.css";
import React, { useEffect, useState } from "react";
import dp from "../images/profile.png";
import axios from "axios";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Newpost = (props) => {
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

  const handleDeletePost = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`/api/posts/${props.postId}`, {
        data: {
          userId: props.userId,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  //   console.log(user);
  return (
    <div className={classes.newpost}>
      <div className={classes.head}>
        <img
          src={user.avatar === "" ? props.dp : user.avatar}
          alt="404_user_img"
        />
        <h2>{user.name}</h2>
        <div className={classes.time}>
          <h6>{props.time}</h6>
          {loggedUser._id === user._id && (
            <i style={{ cursor: "pointer" }} onClick={handleDeletePost}>
              <DeleteOutlineOutlinedIcon />
            </i>
          )}
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

Newpost.defaultProps = {
  name: "Default Name",
  text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores modi aliquid possimus explicabo atque illum ullam nisi maiores voluptas, similique illo, natus ratione veritatis enim voluptatum adipisci quisquam ea temporibus numquam rem id necessitatibus quasi nulla. Hic praesentium ipsum perferendis, numquam veritatis sit, maiores fuga repellendus tempora accusantium saepe ab.",
  date: "24th July, 2019",
  time: "7:30pm",
  image: "https://picsum.photos/536/354",
  dp: dp,
};

export default Newpost;
