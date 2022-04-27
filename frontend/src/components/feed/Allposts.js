import classes from "./Allposts.module.css";
import React, { useEffect, useState } from "react";
import Newpost from "./Newpost";
import Makepost from "./Makepost";
import { Fade } from "react-awesome-reveal";
import { format } from "timeago.js";
import axios from "axios";

const Allposts = (props) => {
  const { user } = props;
  const { newPostCreated, setNewPostCreated } = props;
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
      <Makepost
        setPosts={setPosts}
        newPostCreated={newPostCreated}
        setNewPostCreated={setNewPostCreated}
      />
      {posts.length === 0 ? (
        <h4 className={classes.postStatus}>No Posts😿</h4>
      ) : (
        <h4 className={classes.postStatus}>All Posts🚀</h4>
      )}
      {posts.length > 0 &&
        posts.map((post) => (
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
        ))}
    </div>
  );
};

export default Allposts;
