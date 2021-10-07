import classes from "./Makepost.module.css";

import React from "react";

const Makepost = () => {
  return (
    <form action="" className={classes.container}>
      <h3>Make a Post</h3>
      <textarea
        name=""
        id=""
        cols="15"
        rows="3"
        placeholder="Tell the World"
        className={classes.input}
      ></textarea>
      <button className = {classes.btn}><input type="file" name="uploadfile" id="img" className = {classes.fileupload}/>
      <label for="img">Upload Image</label>
      </button>
      <button type="submit" className={classes.btn}>
        Post
      </button>
    </form>
  );
};

export default Makepost;
