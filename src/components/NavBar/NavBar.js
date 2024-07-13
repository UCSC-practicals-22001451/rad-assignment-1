import React, { useState, startTransition } from "react";
import { useTheme } from "../../context/ThemeContext";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
// Importing Material-UI icons
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Switch from "@mui/material/Switch";

const NavBar = ({ isLoading, startLoading, stopLoading }) => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleTheme = async () => {
    startLoading();
    setTimeout(() => {
      startTransition(() => {
        toggleTheme();
      });
      stopLoading();
    }, 0);
  };

  const navLinks = [
    { path: "/", name: "Home", exact: true, icon: <HomeIcon /> },
    { path: "/about", name: "About", icon: <InfoIcon /> },
    { path: "/contact", name: "Contact Us", icon: <ContactMailIcon /> },
  ];

  return (
    <nav
      className={`navbar navbar-${theme}`}
      onMouseEnter={() => setIsMenuOpen(true)}
      onMouseLeave={() => setIsMenuOpen(false)}>
      <div className="navbar-buttons">
        {navLinks.map((link) => (
          <div key={link.name}>
            <NavLink
              to={link.path}
              end={link.exact}
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }>
              <div className="nav-item-content">
                <div className="nav-item">{link.icon}</div>
                <span
                  className={isMenuOpen ? "link-name visible" : "link-name"}>
                  {link.name}
                </span>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
      <div className="theme-toggle-wrapper nav-item-content">
        <div className="nav-item">
          <Switch
            className="theme-toggle"
            checked={theme === "dark"}
            onChange={handleToggleTheme}
            name="themeToggle"
            color="default"
          />
        </div>
        <span className={isMenuOpen ? "link-name visible" : "link-name"}>
          {theme === "light" ? "Light Theme" : "Dark Theme"}
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
