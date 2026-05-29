import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Menu selon le rôle
  const getDashboardLink = () => {
    if (!user) return null;
    if (user.role === 'client') return '/dashboard/client';
    if (user.role === 'coach') return '/dashboard/coach';
    if (user.role === 'admin') return '/dashboard/admin';
    return '/';
  };

  const getDashboardName = () => {
    if (!user) return 'Mon Espace';
    if (user.role === 'client') return '📋 Mon Espace';
    if (user.role === 'coach') return '👨‍🏫 Mon Espace Coach';
    if (user.role === 'admin') return '👑 Administration';
    return 'Mon Espace';
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Sportify
          </Link>

          {/* Menu pour tout le monde (visiteur ou connecté) */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Accueil</Link>
            <Link to="/cours" className="text-gray-700 hover:text-blue-600 transition">Cours</Link>
            <Link to="/salles" className="text-gray-700 hover:text-blue-600 transition">Salles</Link>
            <Link to="/coachs" className="text-gray-700 hover:text-blue-600 transition">Coachs</Link>
          </div>

          {/* Boutons auth */}
          <div className="hidden md:flex space-x-3">
            {user ? (
              <>
                <Link 
                  to={getDashboardLink()} 
                  className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                >
                  {getDashboardName()}
                </Link>
                <button 
                  onClick={handleLogout}
                  className="px-5 py-2 text-red-600 border-2 border-red-600 rounded-lg hover:bg-red-50 transition font-medium flex items-center space-x-2"
                >
                  <FaSignOutAlt />
                  <span>Déconnexion</span>
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="px-5 py-2 text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition">
                  Connexion
                </Link>
                <Link to="/register" className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Inscription
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-2xl text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link to="/" className="block py-2 text-gray-700">Accueil</Link>
            <Link to="/cours" className="block py-2 text-gray-700">Cours</Link>
            <Link to="/salles" className="block py-2 text-gray-700">Salles</Link>
            <Link to="/coachs" className="block py-2 text-gray-700">Coachs</Link>
            {user ? (
              <div className="pt-3 space-y-2">
                <Link to={getDashboardLink()} className="block text-center py-2 bg-blue-600 text-white rounded-lg">
                  {getDashboardName()}
                </Link>
                <button onClick={handleLogout} className="block w-full text-center py-2 text-red-600 border-2 border-red-600 rounded-lg">
                  Déconnexion
                </button>
              </div>
            ) : (
              <div className="pt-3 space-y-2">
                <Link to="/login" className="block text-center py-2 text-blue-600 border-2 border-blue-600 rounded-lg">Connexion</Link>
                <Link to="/register" className="block text-center py-2 bg-blue-600 text-white rounded-lg">Inscription</Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;