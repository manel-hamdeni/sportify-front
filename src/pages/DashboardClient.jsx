import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaChalkboardTeacher, FaQuestionCircle, FaSignOutAlt, FaUser, FaBell } from 'react-icons/fa';
import { useAuth } from '../contexts/AuthContext';
import PlanningPersonnel from '../components/client/PlanningPersonnel';
import CoachDisponibles from '../components/client/CoachDisponibles';
import PoserQuestion from '../components/client/PoserQuestion';

const DashboardClient = () => {
  const [activeTab, setActiveTab] = useState('planning');
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'planning': return <PlanningPersonnel />;
      case 'coachs': return <CoachDisponibles />;
      case 'questions': return <PoserQuestion />;
      default: return <PlanningPersonnel />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Bar */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              <FaUser />
            </div>
            <div>
              <p className="text-sm text-gray-500">Bienvenue,</p>
              {/* Affiche le vrai nom depuis le backend */}
              <p className="font-semibold text-gray-800">
                {user ? `${user.prenom} ${user.nom}` : 'Chargement...'}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative">
              <FaBell className="text-gray-600 text-xl hover:text-blue-600 transition" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition"
            >
              <FaSignOutAlt />
              <span>Déconnexion</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Layout */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="md:w-64">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
                <h3 className="font-bold text-lg">Menu Client</h3>
              </div>
              <nav className="p-3">
                <button onClick={() => setActiveTab('planning')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition mb-2 ${activeTab === 'planning' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}>
                  <FaCalendarAlt /><span>Mon Planning</span>
                </button>
                <button onClick={() => setActiveTab('coachs')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition mb-2 ${activeTab === 'coachs' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}>
                  <FaChalkboardTeacher /><span>Coachs Disponibles</span>
                </button>
                <button onClick={() => setActiveTab('questions')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${activeTab === 'questions' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}>
                  <FaQuestionCircle /><span>Poser une Question</span>
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

export default DashboardClient;
