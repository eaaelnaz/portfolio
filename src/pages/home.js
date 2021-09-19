import React from "react";
import Particles from "react-particles-js";
import AboutUs from "../components/AboutUs";
import Header from "../components/Header";
import Services from "../components/Services";

const HomePage = (props) => {
  return (
    <>
      <Particles />
      <Header />
      <AboutUs />
      <Services />
    </>
  );
};

export default HomePage;
