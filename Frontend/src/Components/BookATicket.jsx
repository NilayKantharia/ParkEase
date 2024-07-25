import React, { useState } from "react";
import "./BookATicket.css";
import Navbar from "./Navbar";

function BookATicket() {
  const [ticketType, setTicketType] = useState("");
  const [adults, setAdults] = useState(0);
  const [kids, setKids] = useState(0);
  const [showDetails, setShowDetails] = useState({
    Silver: false,
    Gold: false,
    Platinum: false,
  });

  const prices = {
    Silver: 50,
    Gold: 100,
    Platinum: 150,
  };

  const totalMembers = adults + kids;
  const totalPrice = totalMembers * prices[ticketType];

  const handleTicketTypeChange = (event) => {
    setTicketType(event.target.value);
  };

  const handleAdultsChange = (event) => {
    setAdults(Number(event.target.value));
  };

  const handleKidsChange = (event) => {
    setKids(Number(event.target.value));
  };

  const handleProceedToPay = () => {
    alert(`Proceeding to pay ${totalPrice} for ${totalMembers} members.`);
  };

  const toggleDetails = (type) => {
    setShowDetails((prevDetails) => ({
      ...prevDetails,
      [type]: !prevDetails[type],
    }));
  };

  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="sub-container">
          <h2 id="heading">Book Ticket</h2>
          <div className="ticket-types">
            {["Silver", "Gold", "Platinum"].map((type) => (
              <div
                key={type}
                className={`ticket-card ${type.toLowerCase()} ${
                  ticketType === type ? "selected" : ""
                }`}
              >
                <h3>{type}</h3>
                <p>Price: ${prices[type]}</p>
                <p>
                  Description: Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Quidem, veritatis!
                  <button onClick={() => toggleDetails(type)}>
                    {showDetails[type] ? "Show Less" : "Learn More"}
                  </button>
                </p>
                {showDetails[type] && (
                  <div className="glassmorphism-modal">
                    <div className="modal-content">
                      <h3>{type} Ticket Details</h3>
                      <p>Detailed information about the {type} ticket...</p>
                      <button onClick={() => toggleDetails(type)}>Close</button>
                    </div>
                  </div>
                )}
                <label>
                  <input
                    type="radio"
                    value={type}
                    checked={ticketType === type}
                    onChange={handleTicketTypeChange}
                  />
                  Select {type}
                </label>
              </div>
            ))}
          </div>
          <div className="quantity-and-description">
            <fieldset className="quantity">
              <legend>Quantity</legend>
              <label>
                Adults:
                <input
                  className="adult"
                  type="number"
                  value={adults}
                  onChange={handleAdultsChange}
                  min="0"
                  required
                />
              </label>
              <label>
                Kids:
                <input
                  className="kid"
                  type="number"
                  value={kids}
                  onChange={handleKidsChange}
                  min="0"
                  required
                />
              </label>
            </fieldset>
            <div className="summary">
              <p>Total Members: {totalMembers}</p>
              <p>Price per Person: ${prices[ticketType]}</p>
              <p>Total Price: ${totalPrice}</p>
            </div>
          </div>
          <button onClick={handleProceedToPay}>Proceed to Pay</button>
        </div>
      </div>
    </>
  );
}

export default BookATicket;
