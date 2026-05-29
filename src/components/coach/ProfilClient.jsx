import React, { useState } from 'react';
import { FaSearch, FaUser, FaCalendarAlt, FaDumbbell, FaChartLine, FaEnvelope, FaPhone, FaStar } from 'react-icons/fa';

const ProfilClient = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClient, setSelectedClient] = useState(null);

  const clients = [
    {
      id: 1,
      nom: 'Ahmed Ben Ali',
      email: 'ahmed.benali@email.com',
      telephone: '+216 22 123 456',
      age: 28,
      niveau: 'Intermédiaire',
      objectif: 'Perte de poids',
      seances: 12,
      progression: 75,
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      dernierCours: 'Cardio Intense - 20/05/2024',
      abonnement: 'Premium',
      notes: [
        { date: '15/05/2024', note: 'Bon progrès, continue comme ça!' },
        { date: '10/05/2024', note: 'Amélioration de l\'endurance' }
      ]
    },
    {
      id: 2,
      nom: 'Sara Mansour',
      email: 'sara.mansour@email.com',
      telephone: '+216 98 765 432',
      age: 24,
      niveau: 'Débutant',
      objectif: 'Prise de muscle',
      seances: 8,
      progression: 45,
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      dernierCours: 'Musculation - 19/05/2024',
      abonnement: 'Standard',
      notes: [
        { date: '14/05/2024', note: 'Technique à améliorer sur les mouvements de base' }
      ]
    },
    {
      id: 3,
      nom: 'Mehdi Gharbi',
      email: 'mehdi.gharbi@email.com',
      telephone: '+216 55 987 654',
      age: 32,
      niveau: 'Avancé',
      objectif: 'Performance',
      seances: 20,
      progression: 90,
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      dernierCours: 'CrossFit - 18/05/2024',
      abonnement: 'Premium',
      notes: [
        { date: '16/05/2024', note: 'Excellent niveau, peut passer au niveau supérieur' }
      ]
    },
    {
      id: 4,
      nom: 'Leila Benali',
      email: 'leila.benali@email.com',
      telephone: '+216 33 456 789',
      age: 26,
      niveau: 'Débutant',
      objectif: 'Flexibilité',
      seances: 6,
      progression: 30,
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
      dernierCours: 'Yoga - 17/05/2024',
      abonnement: 'Standard',
      notes: [
        { date: '13/05/2024', note: 'Progression lente mais régulière' }
      ]
    }
  ];

  const filteredClients = clients.filter(client =>
    client.nom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Profil Clients</h2>

      {/* Barre de recherche */}
      <div className="relative mb-6">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Rechercher un client..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Liste des clients */}
        <div className="lg:col-span-1 space-y-3">
          <h3 className="font-semibold text-gray-700 mb-3">Mes Clients ({filteredClients.length})</h3>
          {filteredClients.map((client) => (
            <button
              key={client.id}
              onClick={() => setSelectedClient(client)}
              className={`w-full text-left p-4 rounded-xl transition flex items-center space-x-3 ${
                selectedClient?.id === client.id
                  ? 'bg-green-50 border-2 border-green-500'
                  : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
              }`}
            >
              <img src={client.image} alt={client.nom} className="w-12 h-12 rounded-full object-cover" />
              <div className="flex-1">
                <p className="font-semibold text-gray-800">{client.nom}</p>
                <p className="text-sm text-gray-500">{client.niveau} | {client.seances} séances</p>
              </div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </button>
          ))}
        </div>

        {/* Détails du client sélectionné */}
        <div className="lg:col-span-2">
          {selectedClient ? (
            <div>
              {/* En-tête profil */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-white mb-6">
                <div className="flex items-center space-x-4">
                  <img src={selectedClient.image} alt={selectedClient.nom} className="w-20 h-20 rounded-full border-4 border-white object-cover" />
                  <div>
                    <h3 className="text-2xl font-bold">{selectedClient.nom}</h3>
                    <p className="opacity-90">Niveau {selectedClient.niveau} | Abonnement {selectedClient.abonnement}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <FaEnvelope className="text-sm" />
                      <span className="text-sm">{selectedClient.email}</span>
                      <FaPhone className="text-sm ml-3" />
                      <span className="text-sm">{selectedClient.telephone}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Statistiques */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <FaUser className="text-blue-600 text-2xl mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">{selectedClient.age}</div>
                  <div className="text-sm text-gray-600">Âge</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <FaDumbbell className="text-green-600 text-2xl mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">{selectedClient.seances}</div>
                  <div className="text-sm text-gray-600">Séances</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <FaChartLine className="text-purple-600 text-2xl mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-600">{selectedClient.progression}%</div>
                  <div className="text-sm text-gray-600">Progression</div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg text-center">
                  <FaCalendarAlt className="text-yellow-600 text-2xl mx-auto mb-2" />
                  <div className="text-sm font-semibold text-yellow-600">{selectedClient.dernierCours}</div>
                  <div className="text-sm text-gray-600">Dernier cours</div>
                </div>
              </div>

              {/* Objectif */}
              <div className="bg-gray-50 p-4 rounded-xl mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">🎯 Objectif</h4>
                <p className="text-gray-600">{selectedClient.objectif}</p>
              </div>

              {/* Barre de progression */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Progression vers l'objectif</span>
                  <span className="text-sm font-medium text-green-600">{selectedClient.progression}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-green-600 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${selectedClient.progression}%` }}
                  ></div>
                </div>
              </div>

              {/* Notes du coach */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center space-x-2">
                  <FaStar className="text-yellow-500" />
                  <span>Mes notes sur ce client</span>
                </h4>
                <div className="space-y-3">
                  {selectedClient.notes.map((note, index) => (
                    <div key={index} className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-700">{note.note}</p>
                      <p className="text-xs text-gray-400 mt-1">{note.date}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <textarea
                    placeholder="Ajouter une nouvelle note..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
                    rows="2"
                  ></textarea>
                  <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                    Ajouter une note
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <FaUser className="text-6xl text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Sélectionnez un client pour voir son profil</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilClient;