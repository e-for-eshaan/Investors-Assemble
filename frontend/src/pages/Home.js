import React from "react";
import Footer from "../components/homepage/Footer";
import Homepage1 from "../components/homepage/Homepage1";
import Homepage2 from "../components/homepage/Homepage2";
import Homepage3 from "../components/homepage/Homepage3";
import Homepage4 from "../components/homepage/Homepage4";
import Navbar from "../components/homepage/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Homepage1 />
      <Homepage2 />
      <Homepage3 />
      <Homepage4 />
      <Footer />
    </>
  );
};

export default Home;
