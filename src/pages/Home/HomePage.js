import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import CountdownTimer from "./../../components/CountdownTimer/CountdownTimer";

import "./HomePage.css";

function HomePage() {
  const [name, setName] = useState("");
  const { setUserDetails, userDetails } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const targetDiv = document.getElementById("targetDiv");
    if (userDetails.name) {
      targetDiv.style.display = "flex";
      document.title = `Hi ${userDetails.name}`;
    }
  }, [userDetails]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const namePattern = /^[A-Za-z\s]+$/;
    if (namePattern.test(name)) {
      setUserDetails({ name });
      const targetDiv = document.getElementById("targetDiv");
      targetDiv.style.display = "flex";
      targetDiv.scrollIntoView({ behavior: "smooth" });
    } else {
      setName("");
      alert("Please enter a valid name.");
    }
  };

  const handleMoreInfoClick = () => {
    navigate("/about");
  };
  const handleContactUsClick = () => {
    navigate("/contact");
  };

  return (
    <>
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
      <div
        id="targetDiv"
        className="content-section"
        style={{
          minHeight: "100vh",
          maxHeight: "max-content",
          display: "none",
        }}>
        {userDetails.name && (
          <>
            <section className="greeting-section">
              <h2>Hello, {userDetails.name}!</h2>
              <p>
                We're excited to have you join us in our mission to train the
                next generation of emergency firefighters. Are you ready to take
                the first step?
              </p>
              <button onClick={handleMoreInfoClick}>Learn More About Us</button>
            </section>
            <hr
              style={{
                width: "60%",
                minWidth: "400px",
                margin: "2rem 0",
              }}></hr>

            <section className="next-session-section">
              <h2>The next session of training recruits starts in:</h2>
              <CountdownTimer />
              <p>
                Hurry up and if you are interested, send us an email with your
                details.
              </p>
              <button onClick={handleContactUsClick}>Contact Us to Join</button>
            </section>
          </>
        )}
      </div>
    </>
  );
}

export default HomePage;
