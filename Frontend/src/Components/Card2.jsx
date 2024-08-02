import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import PropTypes from 'prop-types';
import "./Card.css"

const Card2 = ({ image, title, text}) => {
  return (
    <div className="row">
      <div className="col-10 mx-auto">
        <div className="card mb-5 mt-5 border border-0">
          <div className="row g-0">
            <div className="col-md-8 order-lg-1 order-sm-2 order-2">
              <div className="card-body mx-3 text-secondary py-0 ps-0 ps-3 pe-md-5 mt-5 mt-md-0">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
              </div>
            </div>
            <div className="col-md-4 col-10 mx-auto order-lg-2 order-sm-1 order-1">
              <img src={image} className="img-fluid rounded-end explore-image rounded-3" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card2.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Card2;
