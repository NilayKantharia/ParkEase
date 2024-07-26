import React, { useState } from "react";
import './Enquiry.css';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap";

const HomeEnquirySection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const EnquiryQuestion = async () => {
      try {
        const response = await axios.post("https://", { name, email, message });
        if (response.data.success) {
          setIsSubmitted("Querry submitted Successfully");
        } else {
          setIsSubmitted("Something Went Wrong");
        }
      } catch (err) {
        console.error("Message not submitted");
      }
    };

    setIsSubmitted(true);
  };

  return (
    <section className="home-enquiry mx-auto col-lg-6 col-sm-12 col-md-8">
      <h2>Contact Us</h2>
      {isSubmitted ? (
        <p>Thank you for your enquiry! We will get back to you soon.</p>
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
