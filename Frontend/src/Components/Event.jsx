import React from 'react';
import './Event.css';
import Card from "./Card";
import Card2 from "./Card2";
import cardImage1 from "../Images/night-light-event.avif";
import cardImage2 from "../Images/parade.webp";
import cardImage3 from "../Images/tommorow-land.jpg";
import cardImage4 from "../Images/christmas.jpg";

const Event = () => {
  const cards = [
    {
      image: cardImage1,
      title: "Glow Fest: Sparkling Lights and Magical Moments!",
      text: "Step into a world of enchantment at Glow Fest: Sparkling Lights and Magical Moments! As night falls, our park transforms into a dazzling wonderland where every corner glows with vibrant, mesmerizing lights. This spectacular event celebrates the beauty of illumination with breathtaking light displays, interactive installations, and enchanting visual effects that captivate the imagination. Wander through pathways adorned with shimmering lights, and let the magic of the night sweep you away. Enjoy captivating performances, themed light shows, and immersive experiences that create unforgettable moments for all ages. Whether you're strolling with loved ones or simply soaking in the glow, Glow Fest promises an evening filled with wonder, joy, and the sparkling magic of light. Don’t miss this extraordinary event where every moment shines with brilliance and delight!",
    },
    {
      image: cardImage2,
      title: "Parade of Wonders: A Spectacular Celebration of Magic!",
      text: "Get ready to be dazzled by the Parade of Wonders: A Spectacular Celebration of Magic! as it transforms [Theme Park Name] into a vibrant tapestry of color and enchantment. This extraordinary parade brings your favorite characters, fantastical floats, and mesmerizing performances to life, creating an unforgettable spectacle that captivates audiences of all ages. Watch in awe as the streets come alive with dazzling lights, whimsical music, and larger-than-life costumes that celebrate the magic and wonder of our park. Each float is a work of art, meticulously designed to transport you into realms of fantasy and joy. From magical creatures to beloved heroes, the Parade of Wonders offers a captivating journey through imagination and excitement. Join us for a parade where every moment sparkles with delight, and let the celebration of magic sweep you off your feet! ",
    },
    {
      image: cardImage3,
      title: "Beat Drop Bash: A DJ Party Like No Other!",
      text: "Get ready to immerse yourself in the electrifying atmosphere of Beat Drop Bash: A DJ Party Like No Other! This high-energy event promises an unforgettable night as top DJs spin the hottest tracks, creating a pulsating rhythm that will keep you dancing until dawn. From the moment you step into the venue, you'll be enveloped by a vibrant soundscape and dazzling light show, setting the stage for an epic dance experience. The bass drops, beats collide, and the crowd moves in sync with the infectious energy of the music. With a dynamic mix of genres and a cutting-edge sound system, Beat Drop Bash ensures that every moment is packed with excitement and groove. Join us for a night where the DJ's beats take center stage, and every track is a reason to hit the dance floor. This is not just a party; it's a celebration of rhythm, energy, and pure, unadulterated fun!",
    },
    {
      image: cardImage4,
      title: "Christmas Wonderland: An Evening of Joy and Merriment!",
      text: "Step into a magical world at Christmas Wonderland: An Evening of Joy and Merriment! where the holiday spirit comes alive in a dazzling display of festive cheer. As you enter this enchanting celebration, you'll be greeted by a winter wonderland filled with sparkling lights, beautifully decorated trees, and the warm glow of holiday joy. The evening is packed with delightful activities, from carol singing and holiday games to festive treats and heartwarming surprises. Immerse yourself in the charm of classic Christmas music, enjoy cozy corners perfect for mingling with friends and family, and create cherished memories with loved ones. With a variety of enchanting attractions and joyful moments, Christmas Wonderland promises a magical experience that captures the true essence of the season. Join us for a celebration where joy and merriment abound, and let the spirit of Christmas fill your heart with happiness and wonder.",
    },
  ];

  return (
    <div className="event-section row">
      <div className="explore text-center mb-5 mt-5">
        <h1>Events</h1>
      </div>
      <div className="container">
        {cards.map((card, index) => (
          <React.Fragment key={index}>
            {index % 2 === 0 ? (
              <Card image={card.image} title={card.title} text={card.text} />
            ) : (
              <Card2 image={card.image} title={card.title} text={card.text}/>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Event;
