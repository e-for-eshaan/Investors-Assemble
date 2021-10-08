import classes from "./Profile.module.css";
import React, { useEffect, useState } from "react";
import Navbar from "../homepage/Navbar";
import dp from "../images/profile.png";
import Newpost from "../feed/Newpost";
import Footer from "../homepage/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { format } from "timeago.js";

const Profile = (props) => {
  const [userPosts, setUserPosts] = useState([]);

  const { userId } = props;
  const { user } = props;
  useEffect(() => {
    const fetchUserPosts = async () => {
      const { data } = await axios.get(`/api/posts/profile/${userId}`);
      setUserPosts(data);
    };
    fetchUserPosts();
  }, [userId, userPosts]);

  return (
    <div className={classes.wrapper}>
      <Navbar pos="relative" round="0" />
      <div className={classes.container}>
        <div className={classes.leftpane}>
          <img
            src={user.avatar === "" ? props.image : user.avatar}
            alt="404_user_img"
          />
          <h2>{user.name}</h2>
          <h3> {user.isInvestor === 0 ? "Startup" : "Investor"}</h3>
          <p className={classes.bio}>{user.bio}</p>
          <h3 className={classes.date}> Joined: {format(user.createdAt)}</h3>
          {userId === user._id && (
            <Link to="/user/editprofile">
              <h3>Edit Profile</h3>
            </Link>
          )}
        </div>
        <div className={classes.rightpane}>
          <h1>MY POSTS</h1>
          {userPosts.length > 0
            ? userPosts.map((post) => (
                <Newpost
                  postId={post._id}
                  loggedUser={user}
                  key={post._id}
                  userId={post.userId}
                  time={format(post.createdAt)}
                  desc={post.desc}
                  img={post.img}
                />
              ))
            : "NO POSTS AVAILABLE"}
          <Footer />
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
