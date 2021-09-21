import React, { Component } from "react";
import img1 from "../image/01.jpg";
import img2 from "../image/02.jpg";
import img3 from "../image/03.jpg";
import img4 from "../image/04.jpg";
import styled from "styled-components";
import { FiZoomIn } from "react-icons/fi";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

function openPopupbox1() {
  const content = <img src={img1} alt="logo" />;
  PopupboxManager.open({
    content,
    config: {
      titleBar: {
        enable: true,
        text: "camera",
      },
      fadeIn: true,
      fadeInSpeed: 500,
    },
  });
}

function openPopupbox2() {
  const content = <img src={img2} alt="logo" />;
  PopupboxManager.open({
    content,
    config: {
      titleBar: {
        enable: true,
        text: "life Style",
      },
      fadeIn: true,
      fadeInSpeed: 500,
    },
  });
}

function openPopupbox3() {
  const content = <img src={img3} alt="logo" />;
  PopupboxManager.open({
    content,
    config: {
      titleBar: {
        enable: true,
        text: "blue jeans",
      },
      fadeIn: true,
      fadeInSpeed: 500,
    },
  });
}

function openPopupbox4() {
  const content = <img src={img2} alt="logo" />;
  PopupboxManager.open({
    content,
    config: {
      titleBar: {
        enable: true,
        text: "monday mornin",
      },
      fadeIn: true,
      fadeInSpeed: 500,
    },
  });
}

const PopupBox = (props) => {
  return (
    <Wrapper className="container">
      <div className="imgContainer">
        <div className="cont" onClick={openPopupbox1}>
          <img src={img1} alt="logo1" />
          <div className="overFlow">
            <FiZoomIn className="fontSt" />
          </div>
        </div>
        <div className="cont" onClick={openPopupbox2}>
          <img src={img2} alt="logo2" />
          <div className="overFlow">
            <FiZoomIn className="fontSt" />
          </div>
        </div>
        <div className="cont" onClick={openPopupbox3}>
          <img src={img3} alt="logo3" />
          <div className="overFlow">
            <FiZoomIn className="fontSt" />
          </div>
        </div>
        <div className="cont" onClick={openPopupbox4}>
          <img src={img4} alt="logo4" />
          <div className="overFlow">
            <FiZoomIn className="fontSt" />
          </div>
        </div>
      </div>
      <PopupboxContainer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .imgContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    row-gap: 5px;
    flex-wrap: wrap;
  }
  .cont {
    position: relative;
  }
  img {
    width: 200px;
    height: 200px;
  }
  .cont .overFlow {
    position: absolute;
    background: orange;
    width: 200px;
    height: 200px;
    top: 0;
    left: 0;
    opacity: 0;
  }
  .overFlow:hover {
    opacity: 0.5;
    transition: 1s ease-in-out;
  }
  .fontSt {
    position: absolute;
    font-size: 1.5rem;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }

  .popupbox-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .popupbox-wrapper {
    background-color: #eaeaea;
  }
`;

export default PopupBox;
