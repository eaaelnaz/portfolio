import React from "react";
import {
  Particles,
  AboutUs,
  OurClients,
  ContactUs,
  Exprience,
  Header,
  PopupBox,
  Services,
  Footer,
} from "../components/index";

const HomePage = (props) => {
  return (
    <>
      <Particles />
      <Header />
      <AboutUs />
      <Services />
      <Exprience />
      <PopupBox />
      <OurClients />
      <ContactUs />
      <Footer />
    </>
  );
};

export default HomePage;
