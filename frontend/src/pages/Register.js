import React, { useRef, useState } from "react";
import Footer from "../components/homepage/Footer";
import classes from "./Register.module.css";
import Navbar from "../components/homepage/Navbar";
import { useHistory } from "react-router";
import axios from "axios";
import investor from "../components/images/investor.jpg";
import startup from "../components/images/startup.jpg";
import { motion } from "framer-motion";
import SlidingPane from "react-sliding-pane";
import Login from "../components/homepage/Login";

const Home = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const confirmpassword = useRef();
  const location = useRef();
  const contactNo = useRef();
  const bio = useRef();
  // const investorOrStartup = useRef();

  const [type, settype] = useState("Startup");
  const [file, setFile] = useState(null);

  const history = useHistory();
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });
  const handleRegisterClick = async (e) => {
    e.preventDefault();
    if (confirmpassword.current.value !== password.current.value) {
      confirmpassword.current.setCustomValidity("passwords do not match!");
    } else {
      const user = {
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
        avatar: "",
        contactNo: contactNo.current.value,
        isInvestor: type === "Startup" ? 0 : 1,
        location: location.current.value,
        bio: bio.current.value,
      };

      if (file) {
        // console.log(file);
        const data = new FormData();
        // const fileName = Date.now() + file.name;
        data.append("file", file);
        data.append("name", file.name);
        user.avatar = file.name;
        try {
          await axios.post("/api/upload", data);
        } catch (err) {
          console.log(err);
        }
      }
      // registering the user using API
      try {
        await axios.post("/api/auth/register", user);
        // pushing the user to the homepage after successful registering
        history.push("/");
      } catch (err) {
        console.log(err);
      }
    }
  };
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
      transition={{ ease: "easeOut", duration: 0.5 }}
      animate="in"
      exit="out"
      variants={pageTransition}
    >
      <Navbar clicker={() => setState({ isPaneOpenLeft: true })} />

      <div className={classes.container}>
        <form className={classes.form} onSubmit={handleRegisterClick}>
          <h1>Sign Up</h1>
          <input
            className={classes.input}
            type="text"
            required
            placeholder="Your Name"
            ref={name}
          />
          <input
            className={classes.input}
            type="email"
            required
            placeholder="Your Email"
            ref={email}
          />

          <input
            className={classes.input}
            type="text"
            required
            placeholder="Your City"
            ref={location}
          />
          <input
            className={classes.input}
            type="text"
            maxLength="10"
            max="10"
            placeholder="Your Mobile Number"
            ref={contactNo}
            required
          />
          {/* <input
            className={classes.input}
            ref={investorOrStartup}
            type="text"
            placeholder="Are you an Investor or a Startup? Type 'Investor' or 'Startup'"
            required
          /> */}
          <h3 style={{ marginTop: "2rem" }}>Investor or a Startup?</h3>
          <div className={classes.images}>
            <img
              onClick={() => {
                settype("Investor");
                console.log(type);
              }}
              src={investor}
              alt=""
              style={type === "Investor" ? { opacity: "1" } : null}
            />
            <img
              onClick={() => {
                settype("Startup");
                console.log(type);
              }}
              src={startup}
              alt=""
              style={type === "Startup" ? { opacity: "1" } : null}
            />
          </div>
          <textarea
            className={classes.textarea}
            placeholder="Your Bio"
            required
            ref={bio}
          />

          <br />
          <input
            className={classes.input}
            type="password"
            placeholder="Create password"
            ref={password}
            required
          />
          <input
            className={classes.input}
            type="password"
            ref={confirmpassword}
            required
            placeholder="Confirm password"
          />
          <br />

          <label htmlFor="file" style={{ cursor: "pointer" }}>
            Upload Image
          </label>
          <input
            type="file"
            id="file"
            required
            accept=".png,.jpeg,.jpg"
            style={{ display: "none", cursor: "pointer" }}
            onChange={(e) => setFile(e.target.files[0])}
          />

          {file && <h4>{file.name}</h4>}
          <button className={classes.btn} type="submit">
            Sign Up
          </button>
        </form>
      </div>
      <SlidingPane
        isOpen={state.isPaneOpenLeft}
        title="Menu"
        from="left"
        onRequestClose={() => setState({ isPaneOpenLeft: false })}
        width="90%"
      >
        <Login display="unset" overlay="true" />
      </SlidingPane>
      <Footer />
    </motion.div>
  );
};

export default Home;
