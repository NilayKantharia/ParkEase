import React from "react";
import backgroundImage from "../Images/homeImageParkEase.jpg";
import "./Home.css";
// import Navbar from "./Navbar";
import Explore from "./Explore";
import Event from "./Event";
import HomeEnquirySection from "./Enquiry";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div
        className="home-container"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="home-content">
          <h1>The Best Amusement Park</h1>
          <p>Enjoy the best rides and attractions</p>
          <a href="#more" className="home-button">
            Read More
          </a>
        </div>
      </div>
      <div id="explore-section">
        <Explore />
      </div>
      <div id="event-section">
        <Event/>
      </div>
      <div id="enquiry-section">
        <HomeEnquirySection/>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
};
export default Home;
