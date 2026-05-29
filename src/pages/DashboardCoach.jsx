import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUsers, FaEnvelope, FaSignOutAlt, FaUser, FaBell, FaChalkboardTeacher } from 'react-icons/fa';
import CoachPlanning from '../components/coach/CoachPlanning';
import ProfilClient from '../components/coach/ProfilClient';
import MessageAdmin from '../components/coach/MessageAdmin';

const DashboardCoach = () => {
  const [activeTab, setActiveTab] = useState('planning');

  const renderContent = () => {
    switch(activeTab) {
      case 'planning':
        return <CoachPlanning />;
      case 'clients':
        return <ProfilClient />;
      case 'messages':
        return <MessageAdmin />;
      default:
        return <CoachPlanning />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Bar */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
              <FaChalkboardTeacher />
            </div>
            <div>
              <p className="text-sm text-gray-500">Bienvenue,</p>
              <p className="font-semibold text-gray-800">Karim Ben Ali</p>
              <p className="text-xs text-green-600">Coach Certifié</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative">
              <FaBell className="text-gray-600 text-xl hover:text-green-600 transition" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
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
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4">
                <h3 className="font-bold text-lg">Menu Coach</h3>
              </div>
              <nav className="p-3">
                <button
                  onClick={() => setActiveTab('planning')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition mb-2 ${
                    activeTab === 'planning' 
                      ? 'bg-green-50 text-green-600' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <FaCalendarAlt />
                  <span>Mon Planning</span>
                </button>
                <button
                  onClick={() => setActiveTab('clients')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition mb-2 ${
                    activeTab === 'clients' 
                      ? 'bg-green-50 text-green-600' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <FaUsers />
                  <span>Profil Clients</span>
                </button>
                <button
                  onClick={() => setActiveTab('messages')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                    activeTab === 'messages' 
                      ? 'bg-green-50 text-green-600' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <FaEnvelope />
                  <span>Message Admin</span>
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

export default DashboardCoach;