import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaUsers, 
  FaChalkboardTeacher, 
  FaBuilding, 
  FaBell, 
  FaSignOutAlt, 
  FaUserShield,
  FaChartLine,
  FaCalendarAlt,
  FaEnvelope
} from 'react-icons/fa';
import GestionUtilisateurs from '../components/admin/GestionUtilisateurs';
import GestionCoachs from '../components/admin/GestionCoachs';
import GestionSalles from '../components/admin/GestionSalles';
import NotificationsAdmin from '../components/admin/NotificationsAdmin';

const DashboardAdmin = () => {
  const [activeTab, setActiveTab] = useState('utilisateurs');

  const renderContent = () => {
    switch(activeTab) {
      case 'utilisateurs':
        return <GestionUtilisateurs />;
      case 'coachs':
        return <GestionCoachs />;
      case 'salles':
        return <GestionSalles />;
      case 'notifications':
        return <NotificationsAdmin />;
      default:
        return <GestionUtilisateurs />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Bar */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
              <FaUserShield />
            </div>
            <div>
              <p className="text-sm text-gray-500">Bienvenue,</p>
              <p className="font-semibold text-gray-800">Admin Système</p>
              <p className="text-xs text-red-600">Super Administrateur</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4 bg-gray-100 px-4 py-2 rounded-lg">
              <FaChartLine className="text-gray-600" />
              <span className="text-sm font-medium">Plateforme: Active</span>
            </div>
            <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition">
              <FaSignOutAlt />
              <span>Déconnexion</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Dashboard Layout */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="md:w-64">
            <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-20">
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4">
                <h3 className="font-bold text-lg">Menu Admin</h3>
              </div>
              <nav className="p-3">
                <button
                  onClick={() => setActiveTab('utilisateurs')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition mb-2 ${
                    activeTab === 'utilisateurs' 
                      ? 'bg-red-50 text-red-600' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <FaUsers />
                  <span>Gérer Utilisateurs</span>
                </button>
                <button
                  onClick={() => setActiveTab('coachs')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition mb-2 ${
                    activeTab === 'coachs' 
                      ? 'bg-red-50 text-red-600' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <FaChalkboardTeacher />
                  <span>Gérer Coachs</span>
                </button>
                <button
                  onClick={() => setActiveTab('salles')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition mb-2 ${
                    activeTab === 'salles' 
                      ? 'bg-red-50 text-red-600' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <FaBuilding />
                  <span>Gérer Salles</span>
                </button>
                <button
                  onClick={() => setActiveTab('notifications')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                    activeTab === 'notifications' 
                      ? 'bg-red-50 text-red-600' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <FaBell />
                  <span>Notifications</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white rounded-xl shadow-md p-6">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;