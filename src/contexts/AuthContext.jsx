import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password, role) => {
    // Simuler une connexion
    const userData = {
      email,
      role, // 'client', 'coach', 'admin'
      name: 'Ahmed Ben Ali'
    };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const checkAuth = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};