import React, { useState, useEffect } from "react";
import "./BookATicket.css";
import axios from "axios";

function BookATicket() {
  const [ticketData, setTicketData] = useState([]);
  const [ticketType, setTicketType] = useState("");
  const [adults, setAdults] = useState(0);
  const [kids, setKids] = useState(0);
  const [showDetails, setShowDetails] = useState({});

  useEffect(() => {
    // Fetch ticket data from the backend
    axios.get('http://localhost:8000/tickets/view')
      .then(response => {
        const tickets = response.data;
        setTicketData(tickets);
        // Initialize showDetails with ticket types
        const initialDetails = tickets.reduce((acc, ticket) => {
          acc[ticket.ticket_type_name] = false;
          return acc;
        }, {});
        setShowDetails(initialDetails);
      })
      .catch(error => {
        console.error("Error fetching ticket data:", error);
      });
  }, []);

  const totalMembers = adults + kids;
  const selectedTicket = ticketData.find(ticket => ticket.ticket_type_name === ticketType);
  const totalPrice = selectedTicket ? selectedTicket.ticket_type_price * totalMembers : 0;

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
    if (ticketType && adults >= 0 && kids >= 0) {
      alert(`Proceeding to pay ₹${totalPrice} for ${totalMembers} members.`);
    } else {
      alert('Please select a ticket type and enter valid quantities.');
    }
  };

  const toggleDetails = (type) => {
    setShowDetails(prevDetails => ({
      ...prevDetails,
      [type]: !prevDetails[type],
    }));
  };

  return (
    <>
      <div className="main-container container col-lg-8 col-md-12 col-sm-12 p-4">
        <div className="sub-container">
          <h2 id="heading">Book Ticket</h2>
          <div className="ticket-types row">
            {ticketData.map((ticket) => (
              <div
                key={ticket.ticket_type_id}
                className={`ticket-card ${ticket.ticket_type_name.toLowerCase()} ${
                  ticketType === ticket.ticket_type_name ? "selected" : ""
                } col-lg-3 mb-sm-3 mb-md-3 mx-auto rounded-3 p-3`}
              >
                <h3>{ticket.ticket_type_name}</h3>
                <p>Price: ₹{ticket.ticket_type_price}</p>
                <p>
                  {ticket.ticket_type_short_description}
                  <button className="show-more col-3" onClick={() => toggleDetails(ticket.ticket_type_name)}>
                    {showDetails[ticket.ticket_type_name] ? "Show Less" : "Learn More"}
                  </button>
                </p>
                {showDetails[ticket.ticket_type_name] && (
                  <div className="glassmorphism-modal">
                    <div className="modal-content">
                      <h3>{ticket.ticket_type_name} Ticket Details</h3>
                      <p>{ticket.ticket_type_description}</p>
                      <button onClick={() => toggleDetails(ticket.ticket_type_name)}>Close</button>
                    </div>
                  </div>
                )}
                <label>
                  <input
                    type="radio"
                    value={ticket.ticket_type_name}
                    checked={ticketType === ticket.ticket_type_name}
                    onChange={handleTicketTypeChange}
                  />
                  Select {ticket.ticket_type_name}
                </label>
              </div>
            ))}
          </div>
          <div className="quantity-and-description mt-3 row">
            <fieldset className="quantity row mb-5">
              <legend>Quantity</legend>
              <label className="col-6">
                Adults:
                <input
                  className="adult col-12"
                  type="number"
                  value={adults}
                  onChange={handleAdultsChange}
                  min="0"
                  required
                />
              </label>
              <label className="col-6">
                Kids:
                <input
                  className="kid col-12"
                  type="number"
                  value={kids}
                  onChange={handleKidsChange}
                  min="0"
                  required
                />
              </label>
            </fieldset>
            <legend>Summary</legend>
            <div className="summary mb-3">
              <p>Total Members: {totalMembers}</p>
              <p>Price per Person: ₹{selectedTicket?.ticket_type_price || 0}</p>
              <p>Total Price: ₹{totalPrice}</p>
            </div>
          </div>
          <button className="ms-auto d-block" onClick={handleProceedToPay}>Proceed to Pay</button>
        </div>
      </div>
    </>
  );
}

export default BookATicket;
