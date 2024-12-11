import React from "react";

import img from "../assets/diet3.png";
import mobile from "../assets/diet3.png";
import Footer from "../compoments/footer/Footer";
import Navbar from "../compoments/navbar/Navbar";
import Download from "../compoments/Download";
import { Fade } from "react-reveal";

const Contact = () => {
  return (
    <div className="" style={{ backgroundColor: "#f3f3f3" }}>
      <Navbar />
      <div
        className="container-fluid desktop-heroimg"
        style={{
          padding: "0",
          position: "relative",
          backgroundColor: "#f3f3f3",
        }}
      >
        <div style={{ position: "relative" }}>
          <img className="contacthero-img" src={img} alt="Contact Hero" />
          <h1 className="heading1"> Contact Us </h1>
        </div>
      </div>
      <div className=" mobile-heroimg">
        <div className="">
          <img className="hero-img" src={mobile} alt="" />
          <div></div>
        </div>
      </div>

      <div className="content">
        <div className="container">
          <div className="header">
            <h2 className="title">Contact </h2>

            <div className="main-head">
              <p className="title-paragraph">
                Our commitment to customer satisfaction means we're always ready
                to hear from you. Use the following methods to reach our
                customer service team!.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Fade bottom>
        <div className=" contact">
          <form>
            <label for="firstName"> Name</label>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label for="number">Number</label>
              <input
                className="form-control"
                id="number"
                placeholder="Enter your Number"
                inputmode="numeric"
                pattern="[0-9]*"
                required
              />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label for="comment">Comment</label>
              <textarea
                className="form-control"
                id="comment"
                rows="4"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <div className="contact-button">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Fade>

      <div>
        <Download />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
