import React from 'react';
import './Event.css';
import Card from './Card';
import Card2 from './Card2';

const Event = () => {
  const cards = Array(2).fill(null); // Array to render 5 cards

  return (
    <div className='event-section'>
      <div className="event">
        <h1>Event</h1>
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

export default Event;
