import React, { useState } from 'react';
import { FaSearch, FaEdit, FaTrash, FaUserPlus, FaCheckCircle, FaTimesCircle, FaStar, FaCalendarAlt } from 'react-icons/fa';

const GestionCoachs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [coachs, setCoachs] = useState([
    {
      id: 1,
      nom: 'Karim Ben Ali',
      email: 'karim.benali@email.com',
      telephone: '+216 22 123 456',
      specialite: 'Cardio',
      experience: '8 ans',
      disponibilite: true,
      note: 4.8,
      salaire: 2500,
      dateEmbauche: '01/01/2022',
      image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      id: 2,
      nom: 'Sofia Mansour',
      email: 'sofia.mansour@email.com',
      telephone: '+216 98 765 432',
      specialite: 'Musculation',
      experience: '6 ans',
      disponibilite: true,
      note: 4.9,
      salaire: 2800,
      dateEmbauche: '15/03/2022',
      image: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      id: 3,
      nom: 'Mehdi Gharbi',
      email: 'mehdi.gharbi@email.com',
      telephone: '+216 55 987 654',
      specialite: 'CrossFit',
      experience: '5 ans',
      disponibilite: false,
      note: 4.7,
      salaire: 2700,
      dateEmbauche: '10/06/2022',
      image: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
      id: 4,
      nom: 'Leila Benali',
      email: 'leila.benali@email.com',
      telephone: '+216 33 456 789',
      specialite: 'Yoga',
      experience: '7 ans',
      disponibilite: true,
      note: 4.9,
      salaire: 2600,
      dateEmbauche: '20/01/2022',
      image: 'https://randomuser.me/api/portraits/women/4.jpg'
    }
  ]);

  const [newCoach, setNewCoach] = useState({
    nom: '',
    email: '',
    telephone: '',
    specialite: 'Cardio',
    experience: '',
    salaire: ''
  });

  const specialites = ['Cardio', 'Musculation', 'CrossFit', 'Yoga', 'Pilates', 'Zumba'];

  const filteredCoachs = coachs.filter(coach =>
    coach.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coach.specialite.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddCoach = (e) => {
    e.preventDefault();
    const coach = {
      id: coachs.length + 1,
      ...newCoach,
      disponibilite: true,
      note: 5.0,
      dateEmbauche: new Date().toLocaleDateString('fr-FR'),
      image: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 50) + 1}.jpg`
    };
    setCoachs([coach, ...coachs]);
    setNewCoach({ nom: '', email: '', telephone: '', specialite: 'Cardio', experience: '', salaire: '' });
    setShowAddModal(false);
    alert('Coach ajouté avec succès!');
  };

  const handleDeleteCoach = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce coach ?')) {
      setCoachs(coachs.filter(coach => coach.id !== id));
      alert('Coach supprimé!');
    }
  };

  const handleToggleDisponibilite = (id) => {
    setCoachs(coachs.map(coach => 
      coach.id === id 
        ? { ...coach, disponibilite: !coach.disponibilite }
        : coach
    ));
    alert('Disponibilité modifiée!');
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Gestion des Coachs</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition flex items-center space-x-2"
        >
          <FaUserPlus />
          <span>Ajouter un coach</span>
        </button>
      </div>

      {/* Barre de recherche */}
      <div className="relative mb-6">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Rechercher un coach par nom ou spécialité..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition"
        />
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-600">{coachs.length}</div>
          <div className="text-sm text-gray-600">Total coachs</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-600">{coachs.filter(c => c.disponibilite).length}</div>
          <div className="text-sm text-gray-600">Disponibles</div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-yellow-600">{coachs.reduce((sum, c) => sum + (c.note || 0), 0) / coachs.length}</div>
          <div className="text-sm text-gray-600">Note moyenne</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-purple-600">{coachs.length}</div>
          <div className="text-sm text-gray-600">Spécialités</div>
        </div>
      </div>

      {/* Liste des coachs */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredCoachs.map((coach) => (
          <div key={coach.id} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
            <div className="flex items-start space-x-4">
              <img src={coach.image} alt={coach.nom} className="w-16 h-16 rounded-full object-cover" />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{coach.nom}</h3>
                    <p className="text-sm text-red-600 font-medium">{coach.specialite}</p>
                  </div>
                  <div className="flex items-center space-x-1 bg-yellow-100 px-2 py-1 rounded-lg">
                    <FaStar className="text-yellow-500 text-sm" />
                    <span className="font-semibold text-sm">{coach.note}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mt-3 text-sm">
                  <p className="text-gray-600">📧 {coach.email}</p>
                  <p className="text-gray-600">📞 {coach.telephone}</p>
                  <p className="text-gray-600">📅 Exp: {coach.experience}</p>
                  <p className="text-gray-600">💰 {coach.salaire} DT</p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                    coach.disponibilite ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {coach.disponibilite ? <FaCheckCircle /> : <FaTimesCircle />}
                    <span>{coach.disponibilite ? 'Disponible' : 'Indisponible'}</span>
                  </span>
                  
                  <div className="flex space-x-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                      <FaCalendarAlt />
                    </button>
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition">
                      <FaEdit />
                    </button>
                    <button 
                      onClick={() => handleToggleDisponibilite(coach.id)}
                      className={`p-2 rounded-lg transition ${coach.disponibilite ? 'text-yellow-600 hover:bg-yellow-50' : 'text-green-600 hover:bg-green-50'}`}
                    >
                      {coach.disponibilite ? <FaTimesCircle /> : <FaCheckCircle />}
                    </button>
                    <button 
                      onClick={() => handleDeleteCoach(coach.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Ajouter Coach */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md max-h-screen overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">Ajouter un coach</h3>
            <form onSubmit={handleAddCoach}>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Nom complet</label>
                <input
                  type="text"
                  value={newCoach.nom}
                  onChange={(e) => setNewCoach({...newCoach, nom: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={newCoach.email}
                  onChange={(e) => setNewCoach({...newCoach, email: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Téléphone</label>
                <input
                  type="tel"
                  value={newCoach.telephone}
                  onChange={(e) => setNewCoach({...newCoach, telephone: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Spécialité</label>
                <select
                  value={newCoach.specialite}
                  onChange={(e) => setNewCoach({...newCoach, specialite: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                >
                  {specialites.map(spec => (
                    <option key={spec} value={spec}>{spec}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Expérience (années)</label>
                <input
                  type="text"
                  value={newCoach.experience}
                  onChange={(e) => setNewCoach({...newCoach, experience: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                  placeholder="Ex: 5 ans"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Salaire (DT)</label>
                <input
                  type="number"
                  value={newCoach.salaire}
                  onChange={(e) => setNewCoach({...newCoach, salaire: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                  required
                />
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

export default GestionCoachs;