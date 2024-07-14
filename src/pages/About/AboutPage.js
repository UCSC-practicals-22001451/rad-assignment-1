import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./AboutPage.css";

function AboutPage() {
  // Define a style for the active link
  const activeStyle = {
    color: "inherit", // Change this color to whatever you prefer for the active state
  };

  return (
    <div className="about-main">
      <h1 className="heading" style={{ marginBottom: "3rem" }}>
        About Our Club
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to="slideshow"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Slideshow
            </NavLink>
          </li>
          <li>
            <NavLink
              to="team"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Meet Our Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="training-programs"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Training Programs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="testimonials"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Testimonials
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default AboutPage;
