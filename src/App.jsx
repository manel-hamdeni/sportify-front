import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import HomePage from './pages/HomePage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import DashboardClient from './pages/DashboardClient';
import DashboardCoach from './pages/DashboardCoach';
import DashboardAdmin from './pages/DashboardAdmin';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard/client" element={<DashboardClient />} />
          <Route path="/dashboard/coach" element={<DashboardCoach />} />
          <Route path="/dashboard/admin" element={<DashboardAdmin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;