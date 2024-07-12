import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { path: "/", name: "Home", exact: true },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact Us" },
  ];

  return (
    <nav className={`navbar navbar-${theme}`}>
      <div className="nav-logo">YourLogo</div>
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              end={link.exact}
              className={({ isActive }) => (isActive ? "active-link" : "")}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <button onClick={toggleTheme} aria-label="Toggle theme">
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </nav>
  );
};

export default NavBar;
