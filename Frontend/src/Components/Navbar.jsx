import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import ParkEaseLogo from '../Images/ParkEaseLogo.png'; // Assuming your logo is a PNG file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={ParkEaseLogo} alt="ParkEase Logo" className="logo-image" />
      </div>
      <ul className="navbar-links">
        <li><NavLink to="/" activeClassName="active" exact>Home</NavLink></li>
        <li><NavLink to="/LoginPage" activeClassName="active"><b>Login</b></NavLink></li>
        <li><NavLink to="/BookATicket" activeClassName="active"><b>Book A Ticket</b></NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
