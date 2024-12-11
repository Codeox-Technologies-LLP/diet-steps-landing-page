import React from "react";
import mobilehero from "../assets/dietcup.png";

import img from "../assets/yellow purple boxes.png";
import "../App.css";
import Navbar from "../compoments/navbar/Navbar";
import Footer from "../compoments/footer/Footer";
import About from "../compoments/About";
import { Fade } from "react-reveal";
import Download from "../compoments/Download";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container-fluid " style={{ backgroundColor: "#f3f3f3" }}>
        <Fade top bottom>
          <div
            style={{ marginTop: "-3%", backgroundColor: "#f3f3f3" }}
            className="desktop-heroimg"
          >
            <div
              className="container-fluid"
              style={{ padding: "0", position: "relative" }}
            >
              <div className="" style={{ position: "relative" }}>
                <img className="hero-img" src={img} alt="" />

                <h1 className="heading1">Get Your Perfect Shape</h1>
              </div>
            </div>
          </div>
        </Fade>

        <Fade top bottom>
          <div className="mobile-heroimg">
            <div className="container-fluid">
              <div className="">
                <img className="hero-img" src={mobilehero} alt="" />
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <div className="">
        <About />
      </div>
      <div>
        <Download />
      </div>


      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
