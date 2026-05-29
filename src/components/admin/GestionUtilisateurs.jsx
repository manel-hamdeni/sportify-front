import React, { useState } from 'react';
import { FaSearch, FaEdit, FaTrash, FaUserPlus, FaUserCheck, FaUserTimes, FaEnvelope } from 'react-icons/fa';

const GestionUtilisateurs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [users, setUsers] = useState([
    {
      id: 1,
      nom: 'Ahmed Ben Ali',
      email: 'ahmed.benali@email.com',
      telephone: '+216 22 123 456',
      abonnement: 'Premium',
      statut: 'actif',
      dateInscription: '01/01/2024',
      seances: 12
    },
    {
      id: 2,
      nom: 'Sara Mansour',
      email: 'sara.mansour@email.com',
      telephone: '+216 98 765 432',
      abonnement: 'Standard',
      statut: 'actif',
      dateInscription: '15/02/2024',
      seances: 8
    },
    {
      id: 3,
      nom: 'Mehdi Gharbi',
      email: 'mehdi.gharbi@email.com',
      telephone: '+216 55 987 654',
      abonnement: 'Premium',
      statut: 'suspendu',
      dateInscription: '10/01/2024',
      seances: 20
    },
    {
      id: 4,
      nom: 'Leila Benali',
      email: 'leila.benali@email.com',
      telephone: '+216 33 456 789',
      abonnement: 'Standard',
      statut: 'actif',
      dateInscription: '20/03/2024',
      seances: 6
    }
  ]);

  const [newUser, setNewUser] = useState({
    nom: '',
    email: '',
    telephone: '',
    abonnement: 'Standard'
  });

  const filteredUsers = users.filter(user =>
    user.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddUser = (e) => {
    e.preventDefault();
    const user = {
      id: users.length + 1,
      ...newUser,
      statut: 'actif',
      dateInscription: new Date().toLocaleDateString('fr-FR'),
      seances: 0
    };
    setUsers([user, ...users]);
    setNewUser({ nom: '', email: '', telephone: '', abonnement: 'Standard' });
    setShowAddModal(false);
    alert('Utilisateur ajouté avec succès!');
  };

  const handleDeleteUser = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      setUsers(users.filter(user => user.id !== id));
      alert('Utilisateur supprimé!');
    }
  };

  const handleToggleStatus = (id) => {
    setUsers(users.map(user => 
      user.id === id 
        ? { ...user, statut: user.statut === 'actif' ? 'suspendu' : 'actif' }
        : user
    ));
    alert('Statut modifié!');
  };

  const getStatutStyle = (statut) => {
    return statut === 'actif' 
      ? 'bg-green-100 text-green-700' 
      : 'bg-red-100 text-red-700';
  };

  const getAbonnementStyle = (abonnement) => {
    return abonnement === 'Premium' 
      ? 'bg-yellow-100 text-yellow-700' 
      : 'bg-blue-100 text-blue-700';
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Gestion des Utilisateurs</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition flex items-center space-x-2"
        >
          <FaUserPlus />
          <span>Ajouter</span>
        </button>
      </div>

      {/* Barre de recherche */}
      <div className="relative mb-6">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Rechercher un utilisateur..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition"
        />
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-600">{users.length}</div>
          <div className="text-sm text-gray-600">Total</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-600">{users.filter(u => u.statut === 'actif').length}</div>
          <div className="text-sm text-gray-600">Actifs</div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-yellow-600">{users.filter(u => u.abonnement === 'Premium').length}</div>
          <div className="text-sm text-gray-600">Premium</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-purple-600">{users.reduce((sum, u) => sum + u.seances, 0)}</div>
          <div className="text-sm text-gray-600">Total séances</div>
        </div>
      </div>

      {/* Tableau des utilisateurs */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Utilisateur</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Contact</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Abonnement</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Statut</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Séances</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3">
                  <div>
                    <p className="font-medium text-gray-800">{user.nom}</p>
                    <p className="text-xs text-gray-400">ID: {user.id}</p>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <p className="text-sm">{user.email}</p>
                  <p className="text-xs text-gray-400">{user.telephone}</p>
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAbonnementStyle(user.abonnement)}`}>
                    {user.abonnement}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatutStyle(user.statut)}`}>
                    {user.statut}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">{user.seances}</td>
                <td className="px-4 py-3">
                  <div className="flex justify-center space-x-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                      <FaEnvelope />
                    </button>
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition">
                      <FaEdit />
                    </button>
                    <button 
                      onClick={() => handleToggleStatus(user.id)}
                      className={`p-2 rounded-lg transition ${user.statut === 'actif' ? 'text-yellow-600 hover:bg-yellow-50' : 'text-green-600 hover:bg-green-50'}`}
                    >
                      {user.statut === 'actif' ? <FaUserTimes /> : <FaUserCheck />}
                    </button>
                    <button 
                      onClick={() => handleDeleteUser(user.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Ajouter Utilisateur */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Ajouter un utilisateur</h3>
            <form onSubmit={handleAddUser}>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Nom complet</label>
                <input
                  type="text"
                  value={newUser.nom}
                  onChange={(e) => setNewUser({...newUser, nom: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Téléphone</label>
                <input
                  type="tel"
                  value={newUser.telephone}
                  onChange={(e) => setNewUser({...newUser, telephone: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Abonnement</label>
                <select
                  value={newUser.abonnement}
                  onChange={(e) => setNewUser({...newUser, abonnement: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                >
                  <option value="Standard">Standard</option>
                  <option value="Premium">Premium</option>
                </select>
              </div>
              <div className="flex space-x-3">
                <button type="submit" className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700">
                  Ajouter
                </button>
                <button type="button" onClick={() => setShowAddModal(false)} className="flex-1 bg-gray-300 py-2 rounded-lg hover:bg-gray-400">
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GestionUtilisateurs;