import React from "react";
import "./Explore.css";
import Card from "./Card";
import Card2 from "./Card2";
import cardImage1 from "../Images/overview.jpg";
import cardImage2 from "../Images/roller.jpg";
import cardImage3 from "../Images/family.jpg";
import cardImage4 from "../Images/characters.jpg";
import cardImage5 from "../Images/Fireworks.jpg";

const Explore = () => {
  const cards = [
    {
      image: cardImage1,
      title: "Discover a World of Fun, Magic, and Adventure!",
      text: "Immerse yourself in themed lands that transport you to far-off places, where you can meet beloved characters, explore fantastical landscapes, and uncover hidden treasures. Our family-friendly environment ensures fun for all ages, with gentle rides for the little ones and thrilling adventures for the daredevils. Indulge in delicious treats, snap unforgettable photos, and make lasting memories with friends and family. Whether it's your first visit or your hundredth, every trip to [Theme Park Name] promises new surprises and endless smiles. Join us and experience the ultimate getaway, where the magic never ends, and the adventure is always just beginning!",
    },
    {
      image: cardImage2,
      title: "Experience The Thunderbolt Twister Roller Coaster",
      text: "Brace yourself for the electrifying adventure of 'Thunderbolt Twister,' the premier roller coaster experience at [Theme Park Name]. This high-octane ride will have you gripping your seat as you navigate through a storm of twists, turns, and high-speed drops. Feel the surge of adrenaline as you’re propelled through a dynamic sequence of heart-pounding loops and sudden drops, each designed to deliver the ultimate thrill. With its cutting-edge design and exhilarating speed, Thunderbolt Twister combines intense excitement with smooth, gravity-defying maneuvers. As you ascend to dizzying heights, catch a glimpse of breathtaking panoramic views before plunging into a whirlwind of twists that will leave you breathless. Thunderbolt Twister isn’t just a ride; it's an electrifying journey that promises to deliver a roller coaster experience like no other. Are you ready to face the storm and experience the thrill of Thunderbolt Twister? ",
    },
    {
      image: cardImage3,
      title: "Perfect For Spending Unforgettable Family Moments",
      text: "Experience the joy of family bonding at [Theme Park Name], where every moment is crafted to bring your loved ones closer together. Our diverse range of attractions ensures that each family member, no matter their age, finds something to enjoy. From exhilarating rides that get your heart racing to relaxing attractions that allow for meaningful conversations and shared laughter, there’s something for everyone. Enjoy a day of adventure, exploration, and fun as you navigate our park’s exciting offerings. Share in the thrill of our adrenaline-pumping rides, or take a leisurely stroll through our scenic areas. Our family-friendly dining options make meal times a joy, providing the perfect opportunity to reflect on your day’s adventures. At [Theme Park Name], we’re dedicated to creating magical experiences that celebrate the special bond of family.",
    },
    {
      image: cardImage4,
      title: "Meet Your Favorite Characters!",
      text: "Step into a world of enchantment at Theme Park and experience the thrill of meeting your beloved cartoon characters in person! From classic heroes to contemporary stars, our park brings the magic of animation to life with interactive meet-and-greets and engaging experiences. Imagine the joy as you and your family pose for photos, share laughs, and create unforgettable memories with the characters that have captured your hearts. Whether it's a friendly chat, an exciting performance, or a special autograph session, every encounter is designed to be a treasured moment. Dive into themed areas and enjoy exclusive photo ops, making each visit to Theme Park a celebration of the animated icons you adore. Let your imagination soar as your favorite characters step out of the screen and into your world for a day filled with magic, fun, and unforgettable moments!",
    },
    {
      image: cardImage5,
      title: "Daily Fireworks Extravaganza!",
      text: "Experience the magic of the night with our Daily Fireworks Extravaganza at Theme Park! As the sun sets and twilight blankets the sky, our nightly fireworks display transforms the evening into a breathtaking spectacle of color and light. Each show is a symphony of dazzling pyrotechnics, perfectly choreographed to a vibrant soundtrack that amplifies the wonder of the moment. Whether you're enjoying a family outing, a romantic evening, or a fun-filled day with friends, the Daily Fireworks Extravaganza offers a perfect finale to your visit. Watch in awe as the sky comes alive with brilliant bursts of light and sparkling patterns that create an unforgettable visual feast. It’s more than just fireworks—it’s an enchanting celebration that will leave you with lasting memories and a sense of awe. Join us each night for a spectacular end to your day, where the sky is the limit and every moment is pure magic!",
    },
  ];

  return (
    <div className="explore-container row">
      <div className="explore text-center mb-5 mt-5">
        <h1>Explore</h1>
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
};

export default Explore;
