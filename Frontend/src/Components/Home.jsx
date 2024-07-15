import React from "react";
import backgroundImage from "../Images/homeImageParkEase.jpg";
import "./Home.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
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
    </>
  );
};
export default Home;
