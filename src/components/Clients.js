import React, { useState, useEffect } from "react";
import styled from "styled-components";
import items from "../utils/constant";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const OurClients = (props) => {
  let numbers = [1, 2, 3, 4];
  const [index, setIndex] = useState(0);
  const [click, setClick] = useState(false);
  const nextSlide = () => {
    setIndex((oldIndex) => {
      if (oldIndex >= items.length - 1) {
        return (oldIndex = 0);
      }
      return oldIndex + 1;
    });
  };

  const prevSlide = () => {
    setIndex((oldIndex) => {
      if (oldIndex <= 0) {
        return (oldIndex = items.length - 1);
      }
      return oldIndex - 1;
    });
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (index >= items.length - 1) {
        return setIndex(0);
      }
      return setIndex(index + 1);
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [index]);

  const handleClick = (e) => {
    console.log(e.target.dataset);
    const number = +e.target.dataset.id;
    setIndex(number);
  };

  return (
    <Wrapper className="cont">
      <section className="section">
        <div className="title">
          <h2>Our Clients</h2>
        </div>
        <div className="section-center">
          {items.map((item) => {
            let position;
            if (item.id === index) {
              position = "activeSlide";
            } else if (
              item.id === index - 1 ||
              (index === 0 && item.id === items.length - 1)
            ) {
              position = "lastSlide";
            } else {
              position = "nextSlide";
            }
            return (
              <article key={item.id} className={position}>
                <img src={item.image} alt={item.name} className="person-img" />
                <h4>{item.name}</h4>
                <p className="title">{item.name}</p>
                <p className="text">{item.text}</p>
              </article>
            );
          })}
          <button className="prev" onClick={prevSlide}>
            <IoIosArrowBack />
          </button>
          <button className="next" onClick={nextSlide}>
            <IoIosArrowForward />
          </button>
          <div className="btn">
            <button data-id="0" onClick={handleClick}></button>
            <button data-id="1" onClick={handleClick}></button>
            <button data-id="2" onClick={handleClick}></button>
            <button data-id="3" onClick={handleClick}></button>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;

  .section {
    width: 90vw;
    margin: 5rem auto;
    max-width: 1170px;
  }

  @media screen and (min-width: 992px) {
    .section {
      width: 95vw;
    }
  }

  .title {
    text-align: center;
    margin-bottom: 2rem;
  }

  .title h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
  }

  .title span {
    font-size: 0.85em;
    color: hsl(42deg 100% 50%);
    margin-right: 1rem;
    font-weight: 700;
  }

  .section-center {
    margin: 0 auto;
    margin-top: 4rem;
    width: 80vw;
    height: 450px;
    max-width: 800px;
    text-align: center;
    position: relative;
    display: flex;
    overflow: hidden;
  }

  .person-img {
    border-radius: 50%;
    margin-bottom: 1rem;
    width: 150px;
    height: 150px;
    object-fit: cover;
    border: 4px solid hsl(210, 31%, 80%);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  article h4 {
    text-transform: uppercase;
    color: hsl(42deg 100% 50%);
    margin-bottom: 0.25rem;
  }

  .title {
    text-transform: capitalize;
    margin-bottom: 0.75rem;
    color: hsl(209, 34%, 30%);
  }

  .text {
    max-width: 35em;
    margin: 0 auto;
    margin-top: 2rem;
    line-height: 2;
    color: hsl(209, 34%, 30%);
  }

  .prev,
  .next {
    position: absolute;
    top: 200px;
    transform: translateY(-50%);
    background: hsl(42deg 100% 50%);
    color: #fff;
    width: 1.25rem;
    height: 1.25rem;
    display: grid;
    place-items: center;
    border-color: transparent;
    font-size: 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: all 0.3s linear;
  }

  .prev:hover,
  .next:hover {
    background: hsl(42deg 100% 50%);
  }

  .prev {
    left: 0;
  }

  .next {
    right: 0;
  }

  @media (min-width: 800px) {
    .text {
      max-width: 45em;
    }
    .prev,
    .next {
      width: 2rem;
      height: 2rem;
      font-size: 1.5rem;
    }
  }

  article {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.3s linear;
  }

  article.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }

  article.lastSlide {
    transform: translateX(-100%);
  }

  article.nextSlide {
    transform: translateX(100%);
  }
  .btn {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    left: 0;
    right: 0;
  }
  .btn button {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: transparent;
    margin: 0 4px;
    border: 1px solid #616161;
    transform: translateY(-2px);
  }
  .btn button:active {
    background-color: hsl(42deg 100% 50%) !important;
  }
`;

export default OurClients;
