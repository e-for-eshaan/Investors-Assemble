import React, { useRef } from "react";
import Footer from "../components/homepage/Footer";
import classes from "./Register.module.css"
import Navbar from "../components/homepage/Navbar";
import { useHistory } from "react-router";
import axios from "axios";
import investor from "../components/images/investor.jpg"
import startup from "../components/images/startup.jpg"
import { motion } from "framer-motion";
const Home = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const confirmpassword = useRef();
  const location = useRef();
  const contactNo = useRef();
  const bio = useRef();
  const investorOrStartup = useRef();
  const avatar = useRef();

  const history = useHistory();

  const handleRegisterClick = async (e) => {
    e.preventDefault();
    if (confirmpassword.current.value !== password.current.value) {
      confirmpassword.current.setCustomValidity("passwords do not match!");
    } else {
      const user = {
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
        contactNo: contactNo.current.value,
        avatar: avatar.current.value,
        isInvestor: investorOrStartup.current.value === "Investor" ? 1 : 0,
        location: location.current.value,
        bio: bio.current.value,
      };
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
  in:{
    opacity:1,
    x:0
  },
  out:{
    opacity:0,
    x:"100vw"
  }
}
  return (
    <motion.div className = {classes.wrapper}
    initial="out"
      transition={{ ease: "easeOut", duration: 0.5 }}
      animate="in"
    exit="out"
    variants={pageTransition}>
      <Navbar pos='relative'/>
      <div className = {classes.container}>
        <form className = {classes.form}
          onSubmit={handleRegisterClick}

        >
          <h1>Sign Up</h1>
          <input className = {classes.input} type="text" required placeholder="Your Name" ref={name} />
          <input className = {classes.input} type="email" required placeholder="Your Email" ref={email} />

          <input className = {classes.input} type="text" required placeholder="Your City" ref={location} />
          <input className = {classes.input}
            type="text"
            maxLength="10"
            max="10"
            placeholder="Your Mobile Number"
            ref={contactNo}
            required
          />
          <input className = {classes.input}
            ref={investorOrStartup}
            type="text"
            placeholder="Are you an Investor or a Startup? Type 'Investor' or 'Startup'"
            required
          />
          <div className = {classes.images}>
            <img src={investor} alt="" />
            <img src={startup} alt="" />
          </div>
          <textarea className = {classes.textarea}
            placeholder="Your Bio"
            required
            ref={bio}
          />

          <br />
          <input className = {classes.input}
            type="password"
            placeholder="Create password"
            ref={password}
            required
          />
          <input className = {classes.input}
            type="password"
            ref={confirmpassword}
            required
            placeholder="Confirm password"
          />
          <br />
          <button className = {classes.btn}>
            <label htmlFor="img">
              Upload Image
              <input className = {classes.input}
                style={{ display: "none" }}
                type="file"
                name="avatar"
                ref={avatar}
                id="img"
                accept=".png,.jpeg,.jpg"
              />
            </label>
          </button>
          <button className = {classes.btn} type="submit">Sign Up</button>
        </form>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Home;
