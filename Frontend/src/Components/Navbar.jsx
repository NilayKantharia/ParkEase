import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import ParkEaseLogo from "../Images/ParkEaseLogo.png";
import "./Navbar.css";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const uid = Cookies.get("uid");
    if (uid) {
      setIsLoggedIn(true);
    }
  }, []);

  const scrollToExplore = (event) => {
    event.preventDefault();
    if (location.pathname === "/") {
      const element = document.getElementById("explore-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#explore-section";
    }
  };

  const scrollToEvent = (event) => {
    event.preventDefault();
    if (location.pathname === "/") {
      const element = document.getElementById("event-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#event-section";
    }
  };

  const scrollToEnquiry = (event) => {
    event.preventDefault();
    if (location.pathname === "/") {
      const element = document.getElementById("enquiry-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#enquiry-section";
    }
  };

  const logOut = () => {
    Cookies.remove("uid");
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={ParkEaseLogo} alt="ParkEase Logo" className="logo-image" />
        </a>
        <button
          className="navbar-toggler btn "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            backgroundColor: "#ffd700",
            border: "none",
          }}
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto ms-3 mb-3 mb-lg-0 link-section mb-lg-0 mb-2 flex-lg-row flex-md-col flex-sm-column">
            <li className="nav-item">
              <p className="nav-link" onClick={scrollToExplore}>
                Explore
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link" onClick={scrollToEvent}>
                Events
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-links" onClick={scrollToEnquiry}>
                Enquiry
              </p>
            </li>
          </ul>
          <ul className="navbar-links navbar-nav ms-auto mb-2 mb-lg-0">
            <li>
              <NavLink to="/" activeClassName="active" exact>
                Home
              </NavLink>
            </li>
            <li>
              {isLoggedIn ? (
                <NavLink to="/" onClick={logOut} activeClassName="active" >Log Out</NavLink>
              ) : (
                <NavLink to="/LoginPage">Login</NavLink>
              )}
            </li>
            <li>
              <NavLink to="/BookATicket" activeClassName="active">
                <b>Book A Ticket</b>
              </NavLink>
            </li>
            <li>
              <NavLink to="/BookOrder" activeClassName="active">
                <b>Order Food</b>
              </NavLink>{" "}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
