import React from "react";
import aboutUs from "../image/about-us.jpg";
import styled from "styled-components";

const AboutUs = (props) => {
  return (
    <Wrapper className="container">
      <div className="row py-5">
        <div className="col-lg-6 col-sm-12 mb-5">
          <div className="wrapImg">
            <img src={aboutUs} alt="aboutUs" />
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <h1 style={{ color: "#ffb100" }}>About us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolorum
            asperiores dolore. Tempora in ea voluptas. Labore veniam asperiores
            eos doloremque! Vel saepe fugit repellendus accusamus maxime
            laudantium, quas officiis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatem atque ratione optio quos, beatae fuga!
            Ipsa cumque quam distinctio, nulla impedit, qui non molestiae
            numquam incidunt soluta repudiandae mollitia fugiat! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Voluptas nostrum magni
            rerum repudiandae laborum molestias, maxime similique accusantium ad
            nesciunt, magnam voluptates velit ipsam quo ullam labore, esse
            aspernatur molestiae? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Odit consectetur dolor minus nemo consequuntur.
            Perferendis.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .wrapImg img {
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    border: 1px solid #ffb100;
    padding: 5px;
  }
  .wrapImg {
    display: flex;
    justify-content: center;
    justify-items: center;
  }
`;

export default AboutUs;
