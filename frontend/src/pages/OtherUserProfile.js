import classes from "./OtherUserProfile.module.css";
import React, { useEffect, useState } from "react";
import Navbar from "../components/homepage/Navbar";
import dp from "../components/images/profile.png";
import OtherUserPosts from "../components/feed/OtherUserPosts";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { format } from "timeago.js";
import SlidingPane from "react-sliding-pane";

const OtherUserProfile = (props) => {
  const params = useParams();
  const otherUserId = params.id;
  const [userPosts, setUserPosts] = useState([]);
  const [otherUser, setOtherUser] = useState([]);

  // const { otherUserId } = props;
  const loggedUser = props.user;

  useEffect(() => {
    let mounted = true;
    const fetchOtherUserDetails = async () => {
      const { data } = await axios.get(`/api/users/${otherUserId}`);
      if (mounted) {
        setOtherUser(data);
      }
    };
    fetchOtherUserDetails();
    return () => {
      mounted = false;
    };
  }, [otherUserId, userPosts]);
  useEffect(() => {
    let mounted = true;
    const fetchUserPosts = async () => {
      const { data } = await axios.get(`/api/posts/profile/${otherUserId}`);
      if (mounted) {
        setUserPosts(data);
      }
    };

    fetchUserPosts();
    return () => {
      mounted = false;
    };
  }, [otherUserId, userPosts]);

  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });

  return (
    <div className={classes.wrapper}>
      <Navbar
        pos="relative"
        round="0"
        clicker={() => setState({ isPaneOpenLeft: true })}
      />

      <div className={classes.container}>
        <div className={classes.leftpane}>
          <img
            src={otherUser.avatar === "" ? props.image : otherUser.avatar}
            alt="404_user_img"
          />
          <h2>{otherUser.name}</h2>
          <h3> {otherUser.isInvestor === 0 ? "Startup" : "Investor"}</h3>
          <p className={classes.bio}>{otherUser.bio}</p>
          <h3 className={classes.date}>
            {" "}
            Joined: {format(otherUser.createdAt)}
          </h3>
          <button className = {classes.btn} onClick={() => setState({ isPaneOpen: true })}>
            Contact
          </button>
        </div>
        <div className={classes.rightpane}>
          {userPosts.length > 0
            ? userPosts.map((post) => (
                <OtherUserPosts
                  postId={post._id}
                  loggedUser={otherUser}
                  key={post._id}
                  userId={post.userId}
                  time={format(post.createdAt)}
                  desc={post.desc}
                  img={post.img}
                />
              ))
            : "NO POSTS AVAILABLE"}

          <SlidingPane
            closeIcon={<div>Some div containing custom close icon.</div>}
            isOpen={state.isPaneOpenLeft}
            title="Hey, it is optional pane title.  I can be React component too."
            from="left"
            onRequestClose={() => setState({ isPaneOpenLeft: false })}
            width="50%"
          >
            <ul className={classes.overlay}>
              <Link to="/feed" className={classes.listitem}>
                <li className={classes.listitem}>Feed</li>
              </Link>

              <li className={classes.listitem}>
                <button className = {classes.btn} onClick={() => setState({ isPaneOpen: true })}>
                  Contact
                </button>
              </li>

              <Link to="/logout" className={classes.listitem}>
                <li className={classes.listitem}>Log Out</li>
              </Link>
            </ul>
          </SlidingPane>
          <SlidingPane
            isOpen={state.isPaneOpen}
            title="Hey, it is optional pane title.  I can be React component too."
            subtitle="Optional subtitle."
            onRequestClose={() => {
              // triggered on "<" on left top click or on outside click
              setState({ isPaneOpen: false });
            }}
            width="60%"
          >
            <form className={classes.form}>
              <h3>CONTACT</h3>
              <input type="text" placeholder="Enter Name" />
              <input type="text" placeholder="Enter Message" />
              <input type="text" placeholder="Enter Email" />
              <textarea placeholder="Enter Text Message" />
              <button className = {classes.btn} type="submit">Submit</button>
            </form>
          </SlidingPane>
        </div>
      </div>
    </div>
  );
};

export default OtherUserProfile;

OtherUserProfile.defaultProps = {
  name: "Default Name",
  text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores modi aliquid possimus explicabo atque illum ullam nisi maiores voluptas, similique illo, natus ratione veritatis enim voluptatum adipisci quisquam ea temporibus numquam rem id necessitatibus quasi nulla. Hic praesentium ipsum perferendis, numquam veritatis sit, maiores fuga repellendus tempora accusantium saepe ab.",
  password: "loremipsumdolersetamet",
  bio: "consectetur adipisicing elit. Dllendus  adipisicing elit. Dllendus  adipisicing elit. Dllendus tempora accusantium",
  image: dp,
  date: "24th July",
  accounttype: "investor",
};
