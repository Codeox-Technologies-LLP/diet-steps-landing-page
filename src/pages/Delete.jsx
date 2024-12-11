import React from "react";

import img from "../assets/diet2.png";
import Navbar from "../compoments/navbar/Navbar";
import Footer from "../compoments/footer/Footer";
import Download from "../compoments/Download";
import { Fade } from "react-reveal";
import mobile from "../assets/diet2.png";

const Delete = () => {
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
          <h1 className="heading1"> Delete Account </h1>
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
            <h2 className="title">Delete </h2>

            <div className="main-head">
              <p className="title-paragraph">
                Deleting you account will remove all of your information from
                our database. This cannot be undone.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Fade bottom>
        <div className=" contact">
          <form>
            <div className="form-group ">
              <label for="number">Enter Your Phone Number</label>
              <input
                className="form-control delete"
                id="number"
                placeholder="Enter your Number"
                inputmode="numeric"
                pattern="[0-9]*"
                required
              />
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
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

export default Delete;
