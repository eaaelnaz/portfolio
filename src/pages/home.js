import React from "react";
import Particles from "react-particles-js";
import AboutUs from "../components/AboutUs";
import Header from "../components/Header";

const HomePage = (props) => {
  return (
    <>
      <Particles />
      <Header />
      <AboutUs />
    </>
  );
};

export default HomePage;
