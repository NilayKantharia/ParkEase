// Card.js
import React from 'react';
import './Card.css';
import cardImage from "../Images/roller.jpg";

const Card = () => {
  return (
    <div className="card">
      <img className='explore-image' src={cardImage} alt="loading error" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorem
        ut laudantium voluptatum modi inventore deserunt, commodi expedita
        quam a consequuntur sed est omnis explicabo doloribus officia
        assumenda perspiciatis maiores doloremque, nisi eius laborum impedit!
        Sed architecto, sunt praesentium dignissimos natus ab doloremque,
        minima quidem cupiditate earum eaque voluptas quia.
      </p>
    </div>
  );
};

export default Card;
