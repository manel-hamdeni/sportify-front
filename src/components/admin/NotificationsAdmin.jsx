import React, { useState } from 'react';
import { FaBell, FaPaperPlane, FaTrash, FaCheckCircle, FaUsers, FaChalkboardTeacher } from 'react-icons/fa';

const NotificationsAdmin = () => {
  const [notification, setNotification] = useState('');
  const [type, setType] = useState('tous');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      titre: 'Bienvenue aux nouveaux membres',
      message: 'Nouvelle promotion -20% sur les abonnements Premium',
      date: '15/05/2024',
      type: 'tous',
      envoyee: true
    },
    {
      id: 2,
      titre: 'Réunion coachs',
      message: 'Réunion des coachs le vendredi 24 mai à 10h',
      date: '14/05/2024',
      type: 'coachs',
      envoyee: true
    }
  ]);

  const handleSendNotification = (e) => {
    e.preventDefault();
    if (notification.trim()) {
      const newNotif = {
        id: notifications.length + 1,
        titre: type === 'tous' ? 'Notification générale' : `Notification aux ${type}`,
        message: notification,
        date: new Date().toLocaleDateString('fr-FR'),
        type: type,
        envoyee: true
      };
      setNotifications([newNotif, ...notifications]);
      setNotification('');
      alert(`Notification envoyée ${type === 'tous' ? 'à tous' : `aux ${type}`}`);
    }
  };

  const handleDeleteNotification = (id) => {
    if (window.confirm('Supprimer cette notification ?')) {
      setNotifications(notifications.filter(n => n.id !== id));
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Envoyer des Notifications</h2>

      {/* Formulaire d'envoi */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
          <FaBell className="text-red-600" />
          <span>Nouvelle notification</span>
        </h3>
        <form onSubmit={handleSendNotification}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium">Destinataires</label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="tous"
                  checked={type === 'tous'}
                  onChange={(e) => setType(e.target.value)}
                  className="text-red-600"
                />
                <FaUsers />
                <span>Tous les utilisateurs</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="coachs"
                  checked={type === 'coachs'}
                  onChange={(e) => setType(e.target.value)}
                  className="text-red-600"
                />
                <FaChalkboardTeacher />
                <span>Coachs uniquement</span>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium">Message</label>
            <textarea
              value={notification}
              onChange={(e) => setNotification(e.target.value)}
              placeholder="Écrivez votre message ici..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition flex items-center space-x-2"
          >
            <FaPaperPlane />
            <span>Envoyer la notification</span>
          </button>
        </form>
      </div>

      {/* Historique des notifications */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
          <FaCheckCircle className="text-green-600" />
          <span>Notifications envoyées ({notifications.length})</span>
        </h3>
        
        {notifications.length > 0 ? (
          <div className="space-y-3">
            {notifications.map((notif) => (
              <div key={notif.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        notif.type === 'tous' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                      }`}>
                        {notif.type === 'tous' ? '📢 Tous' : '👨‍🏫 Coachs'}
                      </span>
                      <span className="text-xs text-gray-400">{notif.date}</span>
                    </div>
                    <p className="font-semibold text-gray-800">{notif.titre}</p>
                    <p className="text-gray-600 text-sm mt-1">{notif.message}</p>
                  </div>
                  <button 
                    onClick={() => handleDeleteNotification(notif.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <FaBell className="text-6xl text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Aucune notification envoyée</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsAdmin;