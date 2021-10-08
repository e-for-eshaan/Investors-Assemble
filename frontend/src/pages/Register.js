import React, { useRef } from "react";
import Footer from "../components/homepage/Footer";
import Navbar from "../components/homepage/Navbar";
import { useHistory } from "react-router";
import axios from "axios";

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

  return (
    <>
      <Navbar />
      <div>
        <form
          onSubmit={handleRegisterClick}
          style={{
            paddingTop: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Sign Up</h1>
          <input type="text" required placeholder="Your Name" ref={name} />
          <input type="email" required placeholder="Your Email" ref={email} />

          <input type="text" required placeholder="Your City" ref={location} />
          <input
            type="text"
            maxLength="10"
            max="10"
            placeholder="Your Mobile Number"
            ref={contactNo}
            required
          />
          <input
            ref={investorOrStartup}
            type="text"
            placeholder="Are you an Investor or a Startup? Type 'Investor' or 'Startup'"
            required
          />
          <textarea
            style={{ height: "30px", width: "172px" }}
            placeholder="Your Bio"
            required
            ref={bio}
          />

          <br />
          <input
            type="password"
            placeholder="Create password"
            ref={password}
            required
          />
          <input
            type="password"
            ref={confirmpassword}
            required
            placeholder="Confirm password"
          />
          <br />
          <button>
            <label htmlFor="img">
              Upload Image
              <input
                style={{ display: "none" }}
                type="file"
                name="avatar"
                ref={avatar}
                id="img"
                accept=".png,.jpeg,.jpg"
              />
            </label>
          </button>
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Home;
