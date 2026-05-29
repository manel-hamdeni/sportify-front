import React, { useState } from 'react';
import { FaClock, FaUser, FaCheckCircle, FaTimesCircle, FaVideo } from 'react-icons/fa';

const CoachPlanning = () => {
  const [selectedDate, setSelectedDate] = useState('Lundi 20 Mai');

  const seances = [
    {
      id: 1,
      jour: 'Lundi 20 Mai',
      heure: '09:00 - 10:00',
      client: 'Ahmed Ben Ali',
      cours: 'Cardio Intense',
      salle: 'Salle A',
      statut: 'confirmé',
      niveau: 'Intermédiaire'
    },
    {
      id: 2,
      jour: 'Lundi 20 Mai',
      heure: '11:00 - 12:00',
      client: 'Sara Mansour',
      cours: 'Musculation',
      salle: 'Salle B',
      statut: 'confirmé',
      niveau: 'Débutant'
    },
    {
      id: 3,
      jour: 'Mardi 21 Mai',
      heure: '14:00 - 15:00',
      client: 'Mehdi Gharbi',
      cours: 'CrossFit',
      salle: 'Salle CrossFit',
      statut: 'annulé',
      niveau: 'Avancé'
    },
    {
      id: 4,
      jour: 'Mercredi 22 Mai',
      heure: '16:00 - 17:00',
      client: 'Leila Benali',
      cours: 'Yoga',
      salle: 'Studio Yoga',
      statut: 'confirmé',
      niveau: 'Débutant'
    },
    {
      id: 5,
      jour: 'Mercredi 22 Mai',
      heure: '18:00 - 19:00',
      client: 'Oussama Trabelsi',
      cours: 'Cardio Intense',
      salle: 'Salle A',
      statut: 'en attente',
      niveau: 'Intermédiaire'
    }
  ];

  const joursUniques = [...new Set(seances.map(s => s.jour))];
  const filteredSeances = seances.filter(s => s.jour === selectedDate);

  const getStatutStyle = (statut) => {
    switch(statut) {
      case 'confirmé':
        return 'bg-green-100 text-green-700';
      case 'annulé':
        return 'bg-red-100 text-red-700';
      case 'en attente':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatutIcon = (statut) => {
    switch(statut) {
      case 'confirmé':
        return <FaCheckCircle />;
      case 'annulé':
        return <FaTimesCircle />;
      case 'en attente':
        return <FaClock />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Mon Planning</h2>

      {/* Filtre par date */}
      <div className="flex flex-wrap gap-3 mb-8">
        {joursUniques.map((jour, index) => (
          <button
            key={index}
            onClick={() => setSelectedDate(jour)}
            className={`px-5 py-2 rounded-lg font-medium transition ${
              selectedDate === jour
                ? 'bg-green-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {jour}
          </button>
        ))}
      </div>

      {/* Statistiques rapides */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-600">
            {seances.filter(s => s.statut === 'confirmé').length}
          </div>
          <div className="text-sm text-gray-600">Séances confirmées</div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-yellow-600">
            {seances.filter(s => s.statut === 'en attente').length}
          </div>
          <div className="text-sm text-gray-600">En attente</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-600">
            {seances.length}
          </div>
          <div className="text-sm text-gray-600">Total séances</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-purple-600">
            {[...new Set(seances.map(s => s.client))].length}
          </div>
          <div className="text-sm text-gray-600">Clients uniques</div>
        </div>
      </div>

      {/* Liste des séances */}
      {filteredSeances.length > 0 ? (
        <div className="space-y-4">
          {filteredSeances.map((seance) => (
            <div
              key={seance.id}
              className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-gray-50 rounded-xl hover:shadow-md transition"
            >
              <div className="flex items-start space-x-4 mb-3 md:mb-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                  <FaClock />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-800">{seance.cours}</p>
                  <p className="text-sm text-gray-500">{seance.heure}</p>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <p className="text-sm text-gray-600 flex items-center space-x-1">
                      <FaUser className="text-green-600" />
                      <span>Client: {seance.client}</span>
                    </p>
                    <p className="text-sm text-gray-600">Salle: {seance.salle}</p>
                    <p className="text-sm text-gray-600">Niveau: {seance.niveau}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <span className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${getStatutStyle(seance.statut)}`}>
                  {getStatutIcon(seance.statut)}
                  <span>{seance.statut}</span>
                </span>
                {seance.statut === 'en attente' && (
                  <div className="flex space-x-2">
                    <button className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-700">
                      Accepter
                    </button>
                    <button className="bg-red-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-700">
                      Refuser
                    </button>
                  </div>
                )}
                {seance.statut === 'confirmé' && (
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm">
                    <FaVideo />
                    <span>Démarrer cours en ligne</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">Aucune séance prévue pour cette journée</p>
        </div>
      )}
    </div>
  );
};

export default CoachPlanning;