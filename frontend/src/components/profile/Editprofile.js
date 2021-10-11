import classes from "./Editprofile.module.css";
import Navbar from "../homepage/Navbar";
import React, { useRef, useState } from "react";
import dp from "../images/profile.png";
import { format } from "timeago.js";
import { motion } from "framer-motion";
import SlidingPane from "react-sliding-pane";
import axios from "axios";

const Editprofile = (props) => {
  const name = useRef();
  const email = useRef();
  // const password = useRef();
  // const confirmpassword = useRef();
  const location = useRef();
  const contactNo = useRef();
  const bio = useRef();

  const { user } = props;
  const handleEditProfileSubmit = async (e) => {
    e.preventDefault();
    // if (confirmpassword.current.value !== password.current.value) {
    //   confirmpassword.current.setCustomValidity("passwords do not match!");
    // } else {
    let editedUser = {
      name: !name.current.value ? user.name : name.current.value,
      email: !email.current.value ? user.email : email.current.value,
      contactNo: !contactNo.current.value
        ? user.contactNo
        : contactNo.current.value,
      location: !location.current.value
        ? user.location
        : location.current.value,
      bio: !bio.current.value ? user.bio : bio.current.value,
      userId: user._id,
    };
    // if (password.current.value) {
    //   editedUser = { ...editedUser, password: password.current.value };
    // }
    // updating the user details using API
    try {
      await axios.put(
        `http://localhost:5000/api/users/${user._id}`,
        editedUser
      );
      // pushing the user to the profile page after successful registering
      window.location.reload();
    } catch (err) {
      console.log(err);
      // }
    }
  };

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
      <Navbar
        pos="unset"
        round="0"
        clicker={() => setState({ isPaneOpenLeft: true })}
      />

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
        </div>

        <SlidingPane
          isOpen={state.isPaneOpenLeft}
          title="Menu"
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
            <h3 className={classes.date}> Joined: {format(user.createdAt)}</h3>
          </div>
        </SlidingPane>

        <div className={classes.rightpane}>
          <form onSubmit={handleEditProfileSubmit}>
            <h3> Name</h3>
            <input type="text" ref={name} placeholder="Enter new name" />
            <h3> Email</h3>
            <input type="email" ref={email} placeholder="Enter new E-mail" />
            <h3> Number</h3>
            <input
              type="text"
              ref={contactNo}
              max="10"
              maxLength="10"
              placeholder="Change Number"
            />
            <h3> City</h3>
            <input type="text" ref={location} placeholder="Change City" />
            {/* <h3> Password</h3>
            <div></div>
              <input type="text" placeholder="Enter new password" /> */}
            <h3 className={classes.biohead}> Bio</h3>
            <textarea
              name=""
              ref={bio}
              id=""
              cols="30"
              maxLength="100"
              rows="10"
              placeholder="Max 100 words"
            ></textarea>
            <div></div>
            <button type="submit" className={classes.btn}>
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Editprofile;

Editprofile.defaultProps = {
  name: "Default Name",
  text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores modi aliquid possimus explicabo atque illum ullam nisi maiores voluptas, similique illo, natus ratione veritatis enim voluptatum adipisci quisquam ea temporibus numquam rem id necessitatibus quasi nulla. Hic praesentium ipsum perferendis, numquam veritatis sit, maiores fuga repellendus tempora accusantium saepe ab.",
  password: "loremipsumdolersetamet",
  bio: "consectetur adipisicing elit. Dllendus  adipisicing elit. Dllendus  adipisicing elit. Dllendus tempora accusantium",
  image: dp,
  date: "24th July",
  accounttype: "investor",
  email: "xyzxyz@zyz.com",
  number: "9089786767",
  city: "atlantis",
};
