import React from "react";
import Particles from "react-particles-js";
import AboutUs from "../components/AboutUs";
import Exprience from "../components/Exprience";
import Header from "../components/Header";
import PopupBox from "../components/PopupBox";
import Services from "../components/Services";

const HomePage = (props) => {
  return (
    <>
      <Particles />
      <Header />
      <AboutUs />
      <Services />
      <Exprience />
      <PopupBox />
    </>
  );
};

export default HomePage;
