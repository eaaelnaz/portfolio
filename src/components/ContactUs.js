import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

const ContactUs = (props) => {
  const serviceId = "service_ID";
  const templateId = "template_ID";
  const userId = "user_fF4v0OoioTCf1CMUuqomb";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, userId).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <Wrapper className="contacts">
      <div className="text-center">
        <h1>contact us</h1>
      </div>
      <div className="container">
        <form onSubmit={sendEmail} ref={form}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                />
                <div className="line"></div>
              </div>
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                />
                <div className="line"></div>
              </div>
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                />
                <div className="line"></div>
              </div>
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                />
                <div className="line"></div>
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              <div className="text-center">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Please describe shortly you project..."
                  name="description"
                ></textarea>
                <div className="line"></div>
              </div>

              <button className="btn-main-offer contact-btn" type="submit">
                contact me
              </button>
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: rgb(52, 58, 64);
  padding: 3rem 0;

  h1 {
    color: orange;
    padding: 1.3rem 0;
    text-transform: uppercase;
  }

  input,
  textarea {
    width: 100%;
    box-sizing: border-box;
    background: none;
    resize: none;
    border: 0;
    border-bottom: 0.125rem solid #f4f4f4;
    border-radius: 0;
    color: orange;
    outline: 0 !important;
    box-shadow: none !important;
    margin-bottom: 1rem;
    padding-left: 0 !important;
  }

  .container {
    padding: 4rem 0;
  }

  input:focus,
  textarea:focus {
    background: transparent;
    color: orange;
    border-bottom: 0.125rem solid #f4f4f4;
  }

  textarea {
    height: 12.2rem !important;
  }

  .contact-btn {
    margin: 1rem 0 0 0;
    width: 100%;
    background: orange;
  }

  .line {
    position: relative;
    top: -0.8rem;
    width: 0;
    height: 0.125rem;
    background: orange;
    display: inline-block;
  }

  input:focus + .line,
  textarea:focus + .line {
    width: 100%;
    transition: width 0.5s ease-in-out;
  }

  input.form-control {
    margin: -0.3rem 0;
  }

  textarea.form-control {
    margin: -0.3rem 0;
  }

  .error-message {
    color: #fff;
    background: #f00;
    text-align: left;
  }

  .success-message {
    font-weight: 900;
    color: green;
  }

  @media (max-width: 768px) {
    overflow-x: hidden;

    .container {
      padding: 0 1rem;
    }

    p {
      padding: 0 0.4rem;
    }
  }
`;

export default ContactUs;
