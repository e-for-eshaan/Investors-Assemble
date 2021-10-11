import React from "react";
import Footer from "../components/homepage/Footer";
import Homepage1 from "../components/homepage/Homepage1";
import Homepage2 from "../components/homepage/Homepage2";
import Homepage3 from "../components/homepage/Homepage3";
import Homepage4 from "../components/homepage/Homepage4";
import Navbar from "../components/homepage/Navbar";
import SlidingPane from "react-sliding-pane";
import { useState } from "react";
import Login from "../components/homepage/Login";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";
const Home = () => {
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });

  return (
    <>
      <Navbar clicker={() => setState({ isPaneOpenLeft: true })} />
      <Homepage1 />
      <SlidingPane
        isOpen={state.isPaneOpenLeft}
        title="Menu"
        from="left"
        onRequestClose={() => setState({ isPaneOpenLeft: false })}
        width="90%"
      >
        <Login display="unset" overlay='true'/>
      </SlidingPane>

      <Homepage2 />
      <Homepage3 />
      <Homepage4 />
      <Footer />
    </>
  );
};

export default Home;
