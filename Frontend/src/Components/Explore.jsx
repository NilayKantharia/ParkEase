import React from 'react';
import './Explore.css';
import Card from './Card';
import Card2 from './Card2';

const Explore = () => {
  const cards = Array(2).fill(null); // Array to render 5 cards

  return (
    <div className='explore-container'>
      <div className="explore">
        <h1>Explore</h1>
      </div>
      <div className="container">
        {cards.map((_, index) => (
          <React.Fragment key={index}>
            <Card />
            <Card2 />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Explore;
