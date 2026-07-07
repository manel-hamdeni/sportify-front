import React, { createContext, useState, useContext } from 'react';
import { connexion as apiConnexion, inscription as apiInscription, getMonProfil } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Connexion réelle avec le backend
  const login = async (email, password) => {
    try {
      setLoading(true);
      setError(null);
      const res = await apiConnexion({ email, motDePasse: password });
      const { token, user: userData } = res.data;

      // Sauvegarder token et user dans localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      return userData; // retourne le user pour que Login.js sache le rôle
    } catch (err) {
      const msg = err.response?.data?.message || 'Erreur de connexion';
      setError(msg);
      throw new Error(msg);
    } finally {
      setLoading(false);
    }
  };

  // Inscription réelle avec le backend
  const register = async (formData) => {
    try {
      setLoading(true);
      setError(null);
      const res = await apiInscription(formData);
      const { token, user: userData } = res.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      return userData;
    } catch (err) {
      const msg = err.response?.data?.message || "Erreur lors de l'inscription";
      setError(msg);
      throw new Error(msg);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  // Vérifier si l'utilisateur est déjà connecté au démarrage
  const checkAuth = async () => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
      // Vérifier que le token est encore valide
      try {
        const res = await getMonProfil();
        setUser(res.data.user);
      } catch {
        // Token expiré, déconnecter
        logout();
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, register, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
