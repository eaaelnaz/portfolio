import React from "react";
import styled from "styled-components";
import logo from "../image/logo01.png";
import { Link } from "react-router-dom";
import { footerLinks } from "../utils/constant";

const Footer = (props) => {
  return (
    <Wrapper class="d-flex flex-column h-100">
      <footer class="w-100 py-4 flex-shrink-0">
        <div class="container py-4">
          <div class="row gy-4 gx-5">
            <div class="col-lg-4 col-md-6">
              <h5 class="h1 text-white">Lorem Footer.</h5>
              <p class="small text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p class="small text-muted mb-0">
                &copy; Copyrights. All rights reserved.{" "}
              </p>
            </div>
            <div class="col-lg-2 col-md-6">
              <h5 class="text-white mb-3">Quick links</h5>
              <ul class="list-unstyled text-muted">
                {footerLinks.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link to={item.url}>{item.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div class="col-lg-2 col-md-6">
              <h5 class="text-white mb-3">Quick links</h5>
              <ul class="list-unstyled text-muted">
                {footerLinks.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link to={item.url}>{item.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div class="col-lg-4 col-md-6">
              <h5 class="text-white mb-3">Newsletter</h5>
              <p class="small text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <form action="#">
                <div class="input-group mb-3">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    class="btn btn-primary"
                    id="button-addon2"
                    type="button"
                  >
                    send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .text-small {
    font-size: 0.9rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
  }

  a:hover,
  a:focus {
    text-decoration: none;
  }

  .form-control {
    background: #212529;
    border-color: #545454;
  }

  .form-control:focus {
    background: #212529;
  }

  footer {
    background: #212529;
  }
`;

export default Footer;
