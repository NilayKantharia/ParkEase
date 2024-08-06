import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TicketHistory.css';

const TicketHistory = () => {
  const [tickets, setTickets] = useState([]);
  const [errors, setErrors] = useState('');

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get(
            'http://localhost:8000/tickets/history',
        {withCredentials: true}
        ); // Replace with your API endpoint
        setTickets(response.data);
      } catch (error) {
        setErrors('Error fetching tickets');
        console.error(error);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div className="ticket-history-container">
      <h2>Ticket History</h2>
      {errors && <p className="error">{errors}</p>}
      <table className="ticket-history-table">
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Ticket Type ID</th>
            <th>Ticket Price</th>
            <th>No. of Members</th>
            <th>Generated On</th>
            <th>Booked For</th>
            <th>Scanned At</th>
            <th>No. of Members Scanned</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket.ticket_id}>
              <td>{ticket.ticket_id}</td>
              <td>{ticket.ticket_type_id}</td>
              <td>₹{parseFloat(ticket.ticket_price).toFixed(2)}</td>
              <td>{ticket.no_of_members}</td>
              <td>{new Date(ticket.generated_on).toLocaleString()}</td>
              <td>{ticket.booked_for ? new Date(ticket.booked_for).toLocaleString() : 'N/A'}</td>
              <td>{ticket.ticket_scanned_at ? new Date(ticket.ticket_scanned_at).toLocaleString() : 'N/A'}</td>
              <td>{ticket.no_of_members_scanned !== null ? ticket.no_of_members_scanned : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketHistory;
