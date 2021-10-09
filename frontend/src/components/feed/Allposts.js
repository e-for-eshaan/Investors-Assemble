import classes from "./Allposts.module.css";
import React, { useEffect, useState } from "react";
import Newpost from "./Newpost";
import Makepost from "./Makepost";

import { format } from "timeago.js";
import axios from "axios";

const Allposts = (props) => {
  const { user } = props;
  // console.log(user);
  // state for storing all the posts in DB
  const [posts, setPosts] = useState([]);

  // fetching posts from DB
  useEffect(() => {
    let mounted = true;
    const fetchPosts = async () => {
      const { data } = await axios.get("/api/posts/all");
      if (mounted) {
        setPosts(data);
      }
    };
    fetchPosts();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className={classes.allposts}>
      <Makepost />
      {posts.length === 0 ? <h4>No Posts😿</h4> : <h4>All Posts🚀</h4>}
      {posts.length > 0 &&
        posts.map((post) => (
          <Newpost
            postId={post._id}
            loggedUser={user}
            key={post._id}
            userId={post.userId}
            time={format(post.createdAt)}
            desc={post.desc}
            img={post.img}
          />
        ))}
    </div>
  );
};

export default Allposts;
