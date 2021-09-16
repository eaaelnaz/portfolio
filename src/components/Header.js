import React from "react";
import backImg from "../image/back-img.jpg";
import styled from "styled-components";
import Typed from "react-typed";

const Header = (props) => {
  return (
    <Wrapper
      className="header-wrapper"
      style={{ backgroundImage: `url(${backImg})` }}
    >
      <div className="colorImg"></div>
      <div className="wrapper-info">
        <h1>Lorem ipsum dolor sit amet</h1>
        <Typed
          strings={[
            "sed do eiusmod tempor",
            "incididunt ut labore",
            "dolor in reprehenderit",
          ]}
          className="textAnim"
          typeSpeed={60}
          backSpeed={50}
          loop
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  background-position: center;
  background-size: cover;
  height: 70vh;
  .colorImg {
    width: 100%;
    height: 100%;
    background-color: #36393c78;
    position: absolute;
    top: 0;
    left: 0;
  }
  .wrapper-info {
    position: absolute;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .textAnim {
    font-size: 20px;
  }
`;

export default Header;
