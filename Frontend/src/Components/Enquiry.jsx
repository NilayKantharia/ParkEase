import React, { useState } from "react";
import './Enquiry.css';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

const HomeEnquirySection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const EnquiryQuestion = async () => {
      try {
        const response = await axios.post("https://your-api-endpoint.com", { name, email, message });
        if (response.data.success) {
          setIsSubmitted("Query submitted successfully");
        } else {
          setIsSubmitted("Something went wrong");
        }
      } catch (err) {
        console.error("Message not submitted", err);
        setIsSubmitted("An error occurred");
      }
    };

    // Call the EnquiryQuestion function
    await EnquiryQuestion();
  };

  return (
    <section className="home-enquiry mx-auto col-lg-6 col-sm-12 col-md-8 my-5 border text-secondary">
      <h2>Contact Us</h2>
      {isSubmitted ? (
        <p>{isSubmitted}</p>
      ) : (
        <form onSubmit={handleSubmit} className=''>
          <label className='form-label' htmlFor="name">Name:</label>
          <input
            className="form-control"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      )}
    </section>
  );
};

export default HomeEnquirySection;
