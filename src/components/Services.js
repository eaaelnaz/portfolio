import React from "react";
import { services } from "../utils/constant";
import styled from "styled-components";

const Services = (props) => {
  return (
    <Wrapper className="services">
      <h1 className="title">Services</h1>
      <div className="container">
        <div className="row">
          {services.map((item) => {
            return (
              <div className="col-md-4 col-sm-12 service" key={item.id}>
                <div className="icon">{item.icon}</div>
                <h4 className="title">{item.title}</h4>
                <p className="text">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f4f4f4;
  .title {
    text-align: center;
  }
  .icon {
    background: #ffb100;
    width: 70px;
    height: 70px;
    text-align: center;
    border-radius: 50%;
    margin: 7px auto;
  }
  .icon svg {
    font-size: 3rem;
    transform: translateY(21%);
    color: #fff;
  }
  .title {
    text-align: center;
    text-transform: uppercase;
    color: #636363;
    margin: 10px 0 4px 0px;
  }
  .text {
    text-align: center;
    color: #636363;
  }
  .service {
    background: #fff;
    border-bottom: 4px solid #ffb100;
    margin: 4px 4px;
  }
  .service:hover {
    background-color: #ffb100;
    transition: 1s ease;
    border-bottom: 4px solid #636363;
  }
  .service:hover .icon {
    background: #fff;
  }
  .service:hover .icon svg {
    color: #636363;
  }
`;

export default Services;
