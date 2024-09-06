import React, { useState } from "react";
import axios from "axios"; // Ensure you have axios installed for HTTP requests

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send the email to the server
      await axios.post("/api/subscribe", { email });

      // Show success message
      setMessage("Subscription successful!");

      // Clear the email input
      setEmail("");
    } catch (error) {
      console.error("Error subscribing email:", error);
      setMessage("Subscription failed. Please try again.");
    }
  };

  return (
    <div id="contact-section" className="contact-page-wrapper">
      <h1 className="primary-heading">Subscribe to our Newsletter</h1>
      <h1 className="primary-heading">Get regular updates!</h1>
      <form className="contact-form-container" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="yourmail@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="secondary-button">Submit</button>
      </form>
      {message && <div className="popup-message">{message}</div>}
    </div>
  );
};

export default Contact;
