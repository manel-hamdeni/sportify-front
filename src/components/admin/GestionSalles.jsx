import React, { useState } from 'react';
import { FaSearch, FaEdit, FaTrash, FaPlus, FaMapMarkerAlt, FaUsers, FaDumbbell, FaClock } from 'react-icons/fa';

const GestionSalles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [salles, setSalles] = useState([
    {
      id: 1,
      nom: 'Sportify Centre',
      adresse: 'Avenue Habib Bourguiba, Tunis',
      localisation: 'Tunis Centre',
      capacite: 50,
      equipements: ['Cardio', 'Musculation', 'CrossFit'],
      horaires: '08:00 - 22:00',
      status: 'ouvert',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=200&fit=crop'
    },
    {
      id: 2,
      nom: 'Sportify Lac',
      adresse: 'Les Berges du Lac, Tunis',
      localisation: 'Lac 1',
      capacite: 40,
      equipements: ['Yoga', 'Pilates', 'Cardio'],
      horaires: '09:00 - 21:00',
      status: 'ouvert',
      image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=300&h=200&fit=crop'
    },
    {
      id: 3,
      nom: 'Sportify Ariana',
      adresse: 'Ariana Ville, Ariana',
      localisation: 'Ariana',
      capacite: 35,
      equipements: ['Musculation', 'Cardio'],
      horaires: '08:00 - 20:00',
      status: 'ferme',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&h=200&fit=crop'
    }
  ]);

  const [newSalle, setNewSalle] = useState({
    nom: '',
    adresse: '',
    localisation: '',
    capacite: '',
    horaires: '',
    status: 'ouvert'
  });

  const filteredSalles = salles.filter(salle =>
    salle.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    salle.localisation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddSalle = (e) => {
    e.preventDefault();
    const salle = {
      id: salles.length + 1,
      ...newSalle,
      equipements: ['Cardio', 'Musculation'],
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=200&fit=crop'
    };
    setSalles([salle, ...salles]);
    setNewSalle({ nom: '', adresse: '', localisation: '', capacite: '', horaires: '', status: 'ouvert' });
    setShowAddModal(false);
    alert('Salle ajoutée avec succès!');
  };

  const handleDeleteSalle = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette salle ?')) {
      setSalles(salles.filter(salle => salle.id !== id));
      alert('Salle supprimée!');
    }
  };

  const handleToggleStatus = (id) => {
    setSalles(salles.map(salle => 
      salle.id === id 
        ? { ...salle, status: salle.status === 'ouvert' ? 'ferme' : 'ouvert' }
        : salle
    ));
    alert('Statut modifié!');
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Gestion des Salles</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition flex items-center space-x-2"
        >
          <FaPlus />
          <span>Ajouter une salle</span>
        </button>
      </div>

      {/* Barre de recherche */}
      <div className="relative mb-6">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Rechercher par nom ou localisation..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition"
        />
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-600">{salles.length}</div>
          <div className="text-sm text-gray-600">Total salles</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-600">{salles.filter(s => s.status === 'ouvert').length}</div>
          <div className="text-sm text-gray-600">Ouvertes</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-purple-600">{salles.reduce((sum, s) => sum + s.capacite, 0)}</div>
          <div className="text-sm text-gray-600">Capacité totale</div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-yellow-600">{salles.length}</div>
          <div className="text-sm text-gray-600">Villes</div>
        </div>
      </div>

      {/* Liste des salles */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredSalles.map((salle) => (
          <div key={salle.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition">
            <div className="flex h-32">
              <img src={salle.image} alt={salle.nom} className="w-32 h-32 object-cover" />
              <div className="flex-1 p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{salle.nom}</h3>
                    <div className="flex items-center space-x-1 text-sm text-gray-500 mt-1">
                      <FaMapMarkerAlt className="text-red-500" />
                      <span>{salle.localisation}</span>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    salle.status === 'ouvert' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {salle.status === 'ouvert' ? 'Ouvert' : 'Fermé'}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-3 mt-2 text-sm">
                  <div className="flex items-center space-x-1 text-gray-600">
                    <FaUsers />
                    <span>Capacité: {salle.capacite}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-600">
                    <FaClock />
                    <span>{salle.horaires}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mt-2">
                  {salle.equipements.map((eq, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                      {eq}
                    </span>
                  ))}
                </div>

                <div className="flex justify-end space-x-2 mt-3">
                  <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition">
                    <FaEdit />
                  </button>
                  <button 
                    onClick={() => handleToggleStatus(salle.id)}
                    className={`p-2 rounded-lg transition ${salle.status === 'ouvert' ? 'text-yellow-600 hover:bg-yellow-50' : 'text-green-600 hover:bg-green-50'}`}
                  >
                    <FaClock />
                  </button>
                  <button 
                    onClick={() => handleDeleteSalle(salle.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Ajouter Salle */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Ajouter une salle</h3>
            <form onSubmit={handleAddSalle}>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Nom de la salle</label>
                <input
                  type="text"
                  value={newSalle.nom}
                  onChange={(e) => setNewSalle({...newSalle, nom: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Adresse complète</label>
                <input
                  type="text"
                  value={newSalle.adresse}
                  onChange={(e) => setNewSalle({...newSalle, adresse: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Localisation (Ville)</label>
                <input
                  type="text"
                  value={newSalle.localisation}
                  onChange={(e) => setNewSalle({...newSalle, localisation: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Capacité</label>
                <input
                  type="number"
                  value={newSalle.capacite}
                  onChange={(e) => setNewSalle({...newSalle, capacite: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Horaires</label>
                <input
                  type="text"
                  value={newSalle.horaires}
                  onChange={(e) => setNewSalle({...newSalle, horaires: e.target.value})}
                  placeholder="Ex: 08:00 - 22:00"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Statut</label>
                <select
                  value={newSalle.status}
                  onChange={(e) => setNewSalle({...newSalle, status: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                >
                  <option value="ouvert">Ouvert</option>
                  <option value="ferme">Fermé</option>
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

export default GestionSalles;