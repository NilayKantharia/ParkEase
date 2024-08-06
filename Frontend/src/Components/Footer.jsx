import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Theme Park</h5>
            <p>ParkEase is an innovative platform that enhances theme park visits by streamlining operations and improving guest experiences. It addresses challenges like long queues, overcrowding, and the need for personalization by integrating ticketing, queue management, and customized itineraries.</p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Company</h5>
            <p><a href="#more" className="text-dark" style={{ textDecoration: 'none' }}>About</a></p>
            <p><a href="#more" className="text-dark" style={{ textDecoration: 'none' }}>Features</a></p>
            <p><a href="#more" className="text-dark" style={{ textDecoration: 'none' }}>Works</a></p>
            <p><a href="#more" className="text-dark" style={{ textDecoration: 'none' }}>Career</a></p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Help</h5>
            <p><a href="#more" className="text-dark" style={{ textDecoration: 'none' }}>Customer Support</a></p>
            <p><a href="#more" className="text-dark" style={{ textDecoration: 'none' }}>Delivery Details</a></p>
            <p><a href="#more" className="text-dark" style={{ textDecoration: 'none' }}>Terms & Conditions</a></p>
            <p><a href="#more" className="text-dark" style={{ textDecoration: 'none' }}>Privacy Policy</a></p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Resources</h5>
            <p><a href="#more" className="text-dark" style={{ textDecoration: 'none' }}>Free eBooks</a></p>
            <p><a href="#more" className="text-dark" style={{ textDecoration: 'none' }}>Development Tutorial</a></p>
            <p><a href="#more" className="text-dark" style={{ textDecoration: 'none' }}>How to - Blog</a></p>
            <p><a href="#more" className="text-dark" style={{ textDecoration: 'none' }}>YouTube Playlist</a></p>
          </div>
        </div>
        <hr className="mb-4" />
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p className="text-center text-md-left">© 2024 ParkEase. All rights reserved.</p>
          </div>
          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a href="#more" className="btn-floating btn-sm text-dark" style={{ fontSize: '23px' }}>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#more" className="btn-floating btn-sm text-dark" style={{ fontSize: '23px' }}>
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#more" className="btn-floating btn-sm text-dark" style={{ fontSize: '23px' }}>
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#more" className="btn-floating btn-sm text-dark" style={{ fontSize: '23px' }}>
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
