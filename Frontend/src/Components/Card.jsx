import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import PropTypes from 'prop-types';
import "./Card.css"

const Card = ({ image, title, text}) => {
  return (
    <div className="row">
      <div className="col-10 mx-auto">
        <div className="card mb-5 mt-5">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={image} className="img-fluid rounded-start explore-image" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title my-auto">{title}</h5>
                <p className="card-text mt-auto mb-auto">{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Card;
