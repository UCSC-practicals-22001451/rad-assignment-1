import React, { createContext, useContext, useState } from "react";

// Create a context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(() => {
    const storedUserDetails = localStorage.getItem("userDetails");
    return storedUserDetails ? JSON.parse(storedUserDetails) : {};
  });

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the user context
export const useUser = () => useContext(UserContext);
