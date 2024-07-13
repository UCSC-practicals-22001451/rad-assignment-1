import React, { useState } from "react";
import "./ContactPage.css";
import { useUser } from "../../context/UserContext";

function ContactUsPage() {
  const { userDetails } = useUser();
  const [formData, setFormData] = useState({
    name: userDetails.name,
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
