import React, { useState } from "react";
import "./ContactPage.css";
import { useUser } from "../../context/UserContext";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"; // Tick icon
import CancelIcon from "@mui/icons-material/Cancel"; // Cross icon
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"; // Placeholder icon
import Tooltip from "@mui/material/Tooltip"; // Tooltip component

function ContactUsPage() {
  const { userDetails } = useUser();
  const [formData, setFormData] = useState({
    name: userDetails.name,
    email: "",
    message: "",
  });
  const [validation, setValidation] = useState({
    name: null,
    email: null,
  });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validation logic
    if (name === "name") {
      // Check for absence of numbers in the name
      const isValidName = value.length === 0 ? null : !/\d/.test(value);
      setValidation({ ...validation, name: isValidName });
    } else if (name === "email") {
      const isValidEmail = value.length === 0 ? null : validateEmail(value);
      setValidation({ ...validation, email: isValidEmail });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation.name === false || validation.email === false) {
      alert("Please correct the validation errors.");
    } else {
      alert("Successfully submitted!");
    }
    console.log(formData);
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <div className="icon-placeholder">
            {validation.name === null ? (
              <Tooltip title="Enter your full name without numbers">
                <HelpOutlineIcon className="placeholder-icon" />
              </Tooltip>
            ) : validation.name ? (
              <CheckCircleOutlineIcon />
            ) : (
              <CancelIcon />
            )}
          </div>
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div className="icon-placeholder">
            {validation.email === null ? (
              <Tooltip title="Enter a valid email address">
                <HelpOutlineIcon className="placeholder-icon" />
              </Tooltip>
            ) : validation.email ? (
              <CheckCircleOutlineIcon />
            ) : (
              <CancelIcon />
            )}
          </div>
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
      <div className="contact-info">
        <p>Address: 123 Firefighter St, Safety City</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: contact@firefighterclub.com</p>
      </div>
    </div>
  );
}

export default ContactUsPage;
