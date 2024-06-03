import React, { createContext, useState, useEffect } from "react";
import { auth } from "../../../firebase";
import { onAuthStateChanged } from "firebase/auth";

export const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, user);
  }, []);

  console.log(`UserProvider:`, user);
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
