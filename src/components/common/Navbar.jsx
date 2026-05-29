import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaChalkboardTeacher, FaUserShield } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Pour test - à remplacer par un vrai état d'authentification plus tard
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Met true pour tester les dashboards

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Sportify
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition font-medium">Accueil</Link>
            <Link to="/dashboard/client" className="text-gray-700 hover:text-blue-600 transition font-medium">Client</Link>
            <Link to="/dashboard/coach" className="text-gray-700 hover:text-green-600 transition font-medium">Coach</Link>
            <Link to="/dashboard/admin" className="text-gray-700 hover:text-red-600 transition font-medium">Admin</Link>
            <Link to="/cours" className="text-gray-700 hover:text-blue-600 transition font-medium">Cours</Link>
            <Link to="/salles" className="text-gray-700 hover:text-blue-600 transition font-medium">Salles</Link>
            <Link to="/coachs" className="text-gray-700 hover:text-blue-600 transition font-medium">Coachs</Link>
          </div>

          {/* Auth Buttons Desktop */}
          <div className="hidden md:flex space-x-3">
            {isLoggedIn ? (
              <>
                <Link 
                  to="/dashboard/client" 
                  className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium flex items-center space-x-2"
                >
                  <FaUser />
                  <span>Mon Espace</span>
                </Link>
                <button className="px-5 py-2 text-red-600 border-2 border-red-600 rounded-lg hover:bg-red-50 transition font-medium">
                  Déconnexion
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="px-5 py-2 text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition font-medium">
                  Connexion
                </Link>
                <Link to="/register" className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
                  Inscription
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600">Accueil</Link>
            <Link to="/dashboard/client" className="block py-2 text-gray-700 hover:text-blue-600">Dashboard Client</Link>
            <Link to="/dashboard/coach" className="block py-2 text-gray-700 hover:text-green-600">Dashboard Coach</Link>
            <Link to="/dashboard/admin" className="block py-2 text-gray-700 hover:text-red-600">Dashboard Admin</Link>
            <Link to="/cours" className="block py-2 text-gray-700 hover:text-blue-600">Cours</Link>
            <Link to="/salles" className="block py-2 text-gray-700 hover:text-blue-600">Salles</Link>
            <Link to="/coachs" className="block py-2 text-gray-700 hover:text-blue-600">Coachs</Link>
            {isLoggedIn ? (
              <div className="pt-3 space-y-2">
                <Link to="/dashboard/client" className="block text-center py-2 bg-blue-600 text-white rounded-lg">Mon Espace</Link>
                <button className="block w-full text-center py-2 text-red-600 border-2 border-red-600 rounded-lg">Déconnexion</button>
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