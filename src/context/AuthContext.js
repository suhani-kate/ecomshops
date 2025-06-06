import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

 

  useEffect(() => {
  const savedUser = localStorage.getItem("ecom-authenticated");
  if (savedUser) {
    setUser(JSON.parse(savedUser));
  }
}, []);

 

  const login = (userData) => {
  localStorage.setItem("ecom-authenticated", JSON.stringify(userData));
  setUser(userData);
};

const logout = () => {
  localStorage.removeItem("ecom-authenticated");
  setUser("");
};




  return (
   <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
