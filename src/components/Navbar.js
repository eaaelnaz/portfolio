import React, { useState } from "react";
import logo from "../image/logo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { links } from "../utils/constant";

const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Wrapper className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" onClick={handleClick}></span>
        </button>
        <div
          className={`collapse navbar-collapse ${showMenu ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => {
              return (
                <li className="nav-item" key={link.id}>
                  <Link className="nav-link" to={link.url}>
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background-color: #f3f3f3 !important;
  .navbar-brand img {
    max-width: 80px;
  }
`;

export default Navbar;
