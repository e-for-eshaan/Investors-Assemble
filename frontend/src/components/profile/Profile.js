import classes from "./Profile.module.css";
import React, { useEffect, useState } from "react";
import Navbar from "../homepage/Navbar";
import dp from "../images/profile.png";
import Newpost from "../feed/Newpost";
import { Link } from "react-router-dom";
import axios from "axios";
import { format } from "timeago.js";
import SlidingPane from "react-sliding-pane";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
const Profile = (props) => {
  const [userPosts, setUserPosts] = useState([]);

  const { userId } = props;
  const { user } = props;
  useEffect(() => {
    let mounted = true;
    const fetchUserPosts = async () => {
      const { data } = await axios.get(`/api/posts/profile/${userId}`);
      if (mounted) {
        setUserPosts(data);
      }
    };
    fetchUserPosts();
    return () => {
      mounted = false;
    };
  }, [userId, userPosts]);

  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });

  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: "100vw",
    },
  };

  return (
    <motion.div
      className={classes.wrapper}
      initial="out"
      transition={{ ease: "easeOut", duration: 1 }}
      animate="in"
      exit="out"
      variants={pageTransition}
    >
      <Navbar round="0" clicker={() => setState({ isPaneOpenLeft: true })} />
      <div className={classes.container}>
        <div className={classes.leftpane}>
          <img
            src={
              user.avatar === ""
                ? props.image
                : `http://localhost:5000/images/${user.avatar}`
            }
            alt="404_user_img"
          />
          <h2>{user.name}</h2>
          <h3> {user.isInvestor ? "Investor" : "Startup"}</h3>
          <p className={classes.bio}>{user.bio}</p>
          <h3 className={classes.date}> Joined: {format(user.createdAt)}</h3>
          {userId === user._id && (
            <Link to="/user/editprofile">
              <h3>Edit Profile</h3>
            </Link>
          )}
        </div>
        <div className={classes.rightpane}>
          <h1 className={classes.rightPaneHead}>MY POSTS</h1>
          {userPosts.length > 0
            ? userPosts.map((post) => (
                <Fade delay={2} key={post._id}>
                  <Newpost
                    postId={post._id}
                    loggedUser={user}
                    userId={post.userId}
                    time={format(post.createdAt)}
                    desc={post.desc}
                    img={post.img}
                  />
                </Fade>
              ))
            : "NO POSTS AVAILABLE"}
          <SlidingPane
            isOpen={state.isPaneOpenLeft}
            from="left"
            onRequestClose={() => setState({ isPaneOpenLeft: false })}
            width="90%"
          >
            <div className={classes.overlay}>
              <img
                src={user.avatar === "" ? props.image : user.avatar}
                alt="404_user_img"
              />
              <h2>{user.name}</h2>
              <h3> {user.isInvestor === 0 ? "Startup" : "Investor"}</h3>
              <p className={classes.bio}>{user.bio}</p>
              <h3 className={classes.date}>
                {" "}
                Joined: {format(user.createdAt)}
              </h3>
              {userId === user._id && (
                <Link to="/user/editprofile">
                  <h3>Edit Profile</h3>
                </Link>
              )}
            </div>
          </SlidingPane>
        </div>
      </div>
    </motion.div>
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
