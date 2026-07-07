import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Ajouter le token automatiquement à chaque requête
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth
export const inscription = (data) => API.post('/auth/inscription', data);
export const connexion = (data) => API.post('/auth/connexion', data);
export const getMonProfil = () => API.get('/auth/moi');

// Users
export const getTousUsers = () => API.get('/users');
export const getCoachsDisponibles = () => API.get('/users/coachs/disponibles');
export const getStats = () => API.get('/users/stats');
export const supprimerUser = (id) => API.delete(`/users/${id}`);

// Planning
export const getTousPlanning = () => API.get('/planning');
export const creerPlanning = (data) => API.post('/planning', data);
export const sInscrireSeance = (id) => API.post(`/planning/${id}/inscription`);
export const seDesinscrire = (id) => API.delete(`/planning/${id}/inscription`);

// Messages
export const envoyerMessage = (data) => API.post('/messages', data);
export const getMessagesRecus = () => API.get('/messages/recus');
export const getMessagesEnvoyes = () => API.get('/messages/envoyes');

// Notifications
export const getMesNotifications = () => API.get('/notifications');
export const marquerNotifLue = (id) => API.put(`/notifications/${id}/lu`);

// Salle
export const getSalle = () => API.get('/salle');

export default API;
