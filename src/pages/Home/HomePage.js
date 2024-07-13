import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useUser } from "../../context/UserContext";
import "./HomePage.css";

function HomePage() {
  const [name, setName] = useState("");
  // const history = useHistory();
  const { setUserDetails } = useUser();

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here

    const namePattern = /^[A-Za-z\s]+$/;

    // Check if the name matches the regex pattern
    if (namePattern.test(name)) {
      setUserDetails({ name }); // Update the user details
      // If the name is valid, navigate to the next page
      navigate("/about");
    } else {
      setName("");
      alert("Please enter a valid name.");
    }
  };

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-text">
          <div className="text-shade"></div>
          <h1>Join the Brigade: Train to be an Emergency Firefighter!</h1>
          <p>Welcome to the Frontline of Safety</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Begin Your Journey</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
