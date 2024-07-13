import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./Button.css";

const Button = ({ children, onClick, ...props }) => {
  const { theme } = useTheme();

  return (
    <button onClick={onClick} {...props} className={`Button-${theme}`}>
      {children}
    </button>
  );
};

export default Button;
