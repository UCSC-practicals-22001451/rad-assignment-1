import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./NavBar.css";

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`navbar navbar-${theme}`}>
      <h1>My Application</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </nav>
  );
};

export default NavBar;
