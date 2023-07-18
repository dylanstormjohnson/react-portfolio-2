import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const formData = {
      name,
      email,
      message,
    };

    axios
      .post("/send-email", formData) // Replace with your actual API endpoint
      .then((response) => {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
        setError("");
      })
      .catch((error) => {
        setError("Failed to send the email. Please try again later.");
      });
  };

  return (
    <div className="container mx-auto flex justify-center">
      <h1>Contact</h1>
      {success && <p>Message sent successfully!</p>}
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="pt-10">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="pt-10">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="pt-10 pb-10">
          <label htmlFor="message">Message: </label>
          <textarea
            className="h-40"
            id="message"
            name="message"
            value={message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button className="btn btn-ghost" type="submit">
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
};

export default Contact;
