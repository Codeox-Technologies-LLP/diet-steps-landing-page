import React, { useState } from "react";

import logo from '../../assets/diet steps logo.png'

import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    // Function to determine if a link is active
    const isActive = (path) => location.pathname === path;


  return (
    <nav className="navbar navbar-expand-md  navabar-expand-sm">
      <div className=" nav-hero container-fluid">  
      <Link to="/">
  <img
    src={logo}
    alt="logo"
    style={{
      marginTop: '5%',
      width: '80px',  
      height: 'auto',  
    }}
    className="nav-logo"
  />
</Link>

        {/* mobile */}

          <div className="mobile-nav">
           
            <button
              className={`menu ${isMenuOpen ? "opened" : ""}`}
              onClick={toggleMenu}
              aria-label="Main Menu"
              style={{ outline: "none",    width: '300%' }}
            >
              <svg
                width="40px"
                height="30px"
                viewBox="0 0 100 100"
                className="svg-icon"
              >
                <path
                  className="line line1"
                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                />
                <path className="line line2" d="M 20,50 H 80" />
                <path
                  className="line line3"
                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                />
              </svg>
            </button>

            <div className={`mobile-menu ${isMenuOpen ? "" : "hidden"}`}>
              <ul className="navbar-nav">
              <li className={`nav-item ${isActive("/terms") ? "active" : ""}`}>
                <Link to="/terms">Terms & conditions</Link>
              </li>
              <li className={`nav-item ${isActive("/privacy_policies") ? "active" : ""}`}>
                <Link to="/privacy_policies">Privacy Policy</Link>
              </li>
              <li className={`nav-item ${isActive("/contact") ? "active" : ""}`}>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className={`nav-item ${isActive("/delete_account") ? "active" : ""}`}>
                <Link to="/delete_account">Delete Account</Link>
              </li>
              </ul>
            </div>
          </div>
      

        {/* desktop */}
        <div className="desktop">
          <div
            className={`collapse navbar-collapse justify-content-end ${
              isMenuOpen ? "hidden" : "" // Hide on smaller screens
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
            <li className={`nav-item ${isActive("/terms") ? "active" : ""}`}>
                <Link to="/terms">Terms & conditions</Link>
              </li>
              <li className={`nav-item ${isActive("/privacy_policies") ? "active" : ""}`}>
                <Link to="/privacy_policies">Privacy Policy</Link>
              </li>
              <li className={`nav-item ${isActive("/contact") ? "active" : ""}`}>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className={`nav-item ${isActive("/delete_account") ? "active" : ""}`}>
                <Link to="/delete_account">Delete Account</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





