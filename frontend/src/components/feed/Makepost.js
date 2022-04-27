import classes from "./Makepost.module.css";
import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Makepost = (props) => {
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState(null);

  const desc = useRef();
  const { setNewPostCreated } = props;
  const handlePostSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
      img: "",
    };
    if (file) {
      // console.log(file);
      const data = new FormData();
      // const fileName = Date.now() + file.name;
      data.append("file", file);
      data.append("name", file.name);
      newPost.img = file.name;
      try {
        await axios.post("/api/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      await axios.post("/api/posts/create", newPost);
      setNewPostCreated(true);
      // window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      onSubmit={handlePostSubmit}
      className={classes.container}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>Make a Post</h3>
      <textarea
        name=""
        id=""
        cols="15"
        ref={desc}
        rows="3"
        placeholder={`Tell the world your story, ${user.name} :)`}
        className={classes.input}
      ></textarea>

      <label htmlFor="file" style={{ cursor: "pointer" }}>
        Upload Image
      </label>
      <input
        type="file"
        id="file"
        accept=".png,.jpeg,.jpg"
        className={classes.fileupload}
        onChange={(e) => setFile(e.target.files[0])}
      />

      {file && <h4>{file.name}</h4>}
      <button type="submit" className={classes.btn}>
        Post
      </button>
    </form>
  );
};

export default Makepost;
