import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Navbar from './components/common/Navbar';
import ProtectedRoute from './components/common/ProtectedRoute';

// Pages publiques
import HomePage from './pages/HomePage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

// Pages protégées
import DashboardClient from './pages/DashboardClient';
import DashboardCoach from './pages/DashboardCoach';
import DashboardAdmin from './pages/DashboardAdmin';
import CoachsPage from './pages/CoachsPage';
import SallesPage from './pages/SallesPage';
import CoursPage from './pages/CoursPage';
function AppContent() {
  const { checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        {/* Routes publiques - tout le monde peut voir */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Routes publiques pour internautes */}
        <Route path="/cours" element={<CoursPage />} /> 
        <Route path="/salles" element={<SallesPage />} />          
        <Route path="/coachs" element={<CoachsPage />} />
        {/* Routes protégées - seulement clients */}
        <Route path="/dashboard/client" element={
          <ProtectedRoute allowedRoles={['client']}>
            <DashboardClient />
          </ProtectedRoute>
        } />

        {/* Routes protégées - seulement coachs */}
        <Route path="/dashboard/coach" element={
          <ProtectedRoute allowedRoles={['coach']}>
            <DashboardCoach />
          </ProtectedRoute>
        } />

        {/* Routes protégées - seulement admin */}
        <Route path="/dashboard/admin" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <DashboardAdmin />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;