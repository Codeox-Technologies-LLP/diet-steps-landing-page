import React, { useEffect, useState } from "react";
import logo from "../../assets/diet steps logo.png";
import twitter from "../../assets/icons/fb.png";
import facebook from "../../assets/icons/twitter.png";
import instagram from "../../assets/icons/instayellow.png";

import "./footer.css";

import { Link } from "react-router-dom";


const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000 * 60); // Update every minute

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <footer className="container-fluid footer">
        <div className="">


          <div className="row ">
            <div className="col-md-4 footer-img text-center">
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  className=""
                  style={{
                    width: "200px",
                    height: "200px",
                  }}
                />
              </Link>
            </div>

            <div className="col-md-8 d-md-flex align-items-baseline mt-10">
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase ">contact</h6>
                <div className="footer-links">
                  <p>
                    <a href="mailto:info@lifebalancekw.com">
                    mail@dietstepskw.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 footer-links">
                <h6 className="text-uppercase ">Support</h6>
                <ul
                  style={{ listStyle: "none", padding: 0 }}
                  className="mobile-links"
                >
                  <Link to="/terms"> Terms & Conditions</Link>
                  <Link to="/privacy_policies" className="">
                    Privacy Policy
                  </Link>
                  <Link to="/contact" className="">
                    Contact
                  </Link>
                  <Link to="/delete_account" className="">
                    Delete
                  </Link>
                </ul>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 sociallinks">
                <h6 className="text-uppercase "> Social Links</h6>
                <div className="use-links">
                  <img src={facebook} alt="img" />
                  <img src={instagram} alt="img" />
                  <img src={twitter} alt="img" />
                </div>
              </div>
            </div>
          </div>

          <div className="coppyright text-center">
          <p>&copy; {currentYear} Diet Steps. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
