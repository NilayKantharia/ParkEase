import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import ParkEaseLogo from "../Images/ParkEaseLogo.png";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

function Navbar({ isLoggedIn, onLogout }) {

  const location = useLocation();

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
          <ul className="navbar-nav me-auto ms-3 mb-3 mb-lg-0 link-section mb-lg-0 mb-2 flex-lg-row flex-md-col flex- flex-sm-column">
            <li className="nav-item">
              <p className="nav-link" onClick={scrollToExplore}>
                explore
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link" onClick={scrollToEvent}>
                events
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-links" onClick={scrollToEnquiry}>
                enquiry
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
                <button onClick={onLogout} className="common-button">Logout</button>
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
    /* <nav className="navbar">
      <div className="navbar-logo">
        <img src={ParkEaseLogo} alt="ParkEase Logo" className="logo-image" />
        <div className='link-section'>
          <a href='#more' onClick={scrollToExplore} >explore</a>
          <a href='#more' onClick={scrollToEvent}>events</a>
          <a href='#more' onClick={scrollToEnquiry} >enquiry</a>
        </div>
      </div>
      <ul className="navbar-links">
        <li><NavLink to="/" activeClassName="active" exact>Home</NavLink></li>
        <li><NavLink to="/LoginPage" activeClassName="active"><b>Login</b></NavLink></li>
        <li><NavLink to="/BookATicket" activeClassName="active"><b>Book A Ticket</b></NavLink></li>
        <li><NavLink to="/BookOrder" activeClassName="active"><b>Order Food</b></NavLink> </li>
      </ul>
    </nav> */
  );
}

export default Navbar;
