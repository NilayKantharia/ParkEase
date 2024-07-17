import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import ParkEaseLogo from '../Images/ParkEaseLogo.png'; // Assuming your logo is a 
import { useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
  
    const scrollToExplore = (event) => {
      event.preventDefault();
      if (location.pathname === '/') {
        const element = document.getElementById('explore-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.location.href = '/#explore-section';
      }
    };
    const scrollToEvent = (event) => {
      event.preventDefault();
      if (location.pathname === '/') {
        const element = document.getElementById('event-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.location.href = '/#event-section';
      }
    };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={ParkEaseLogo} alt="ParkEase Logo" className="logo-image" />
        <div className='link-section'>
          <a onClick={scrollToExplore} >explore</a>
          <a onClick={scrollToEvent}>events</a>
          <a>enquiry</a>
        </div>
      </div>
      <ul className="navbar-links">
        <li><NavLink to="/" activeClassName="active" exact>Home</NavLink></li>
        <li><NavLink to="/LoginPage" activeClassName="active"><b>Login</b></NavLink></li>
        <li><NavLink to="/BookATicket" activeClassName="active"><b>Book A Ticket</b></NavLink></li>
        <li><NavLink to="/FoodBookingForm" activeClassName="active"><b>Order Food</b></NavLink> </li>
      </ul>
    </nav>
  );
}

export default Navbar;
