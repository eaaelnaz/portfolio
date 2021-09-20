import React from "react";
import styled from "styled-components";
import { experience } from "../utils/constant";

const Exprience = (props) => {
  return (
    <Wrapper className="experience">
      <div className="title">
        <h1>Experience</h1>
      </div>
      <div className="container experience-wrapper">
        {experience.map((exr) => {
          return (
            <div
              key={exr.id}
              className={`timeline-block ${
                exr.id % 2 === 0
                  ? "timeline-block-right"
                  : "timeline-block-left"
              }`}
            >
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>{exr.year}</h3>
                <p>{exr.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0.7rem;
  .title h1 {
    display: flex;
    justify-content: center;
    transform: uppercase;
  }

  .experience-wrapper {
    position: relative;
    padding: 3.125rem 0;
    overflow: hidden;
  }

  .experience-wrapper::before {
    position: absolute;
    content: "";
    top: 0;
    left: 50%;
    margin-left: -0.0625rem;
    width: 0.125rem;
    height: 100%;
    background: grey;
    z-index: 1;
  }

  .timeline-block {
    width: calc(50% + 0.5rem);
    display: flex;
    justify-content: space-between;
    clear: both;
  }

  .timeline-block-right {
    float: right;
  }

  .timeline-block-left {
    float: left;
    direction: rtl;
  }

  .marker {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 0.3125rem solid grey;
    background: orange;
    margin-top: 0.625rem;
    z-index: 3;
  }

  .timeline-content {
    width: 95%;
    padding: 0 0.9375rem;
    color: #636363;
    direction: ltr;
  }

  .timeline-content h3 {
    margin-top: 0.3125rem;
    color: #ffb100;
    font-weight: 900;
  }

  /*------------ MEDIA ------------------*/
  @media (max-width: 768px) {
    .experience .container {
      padding-left: 0;
    }

    .experience-wrapper::before {
      left: 0.5rem;
      margin-bottom: 1.875rem;
    }
    .timeline-block-right {
      float: none;
      width: 100%;
    }

    .timeline-block-left {
      float: none;
      direction: ltr;
      width: 100%;
    }
  }
`;

export default Exprience;
