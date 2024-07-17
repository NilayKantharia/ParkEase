// Card.js
import React from 'react';
import './Card2.css';
import cardImage from "../Images/roller.jpg";

const Card2 = () => {
  return (
    <div className="card">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorem
        ut laudantium voluptatum modi inventore deserunt, commodi expedita
        quam a consequuntur sed est omnis explicabo doloribus officia
        assumenda perspiciatis maiores doloremque, nisi eius laborum impedit!
        Sed architecto, sunt praesentium dignissimos natus ab doloremque,
        minima quidem cupiditate earum eaque voluptas quia.
      </p>
      <img src={cardImage} alt="loading Error" />
    </div>
  );
};

export default Card2;
