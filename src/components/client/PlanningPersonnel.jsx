import React, { useState } from 'react';
import { FaClock, FaDumbbell, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const PlanningPersonnel = () => {
  const [selectedDate, setSelectedDate] = useState('Lundi 20 Mai');

  const seances = [
    {
      id: 1,
      jour: 'Lundi 20 Mai',
      heure: '09:00 - 10:00',
      cours: 'Cardio Intense',
      coach: 'Karim Ben Ali',
      salle: 'Salle A',
      statut: 'confirmé'
    },
    {
      id: 2,
      jour: 'Lundi 20 Mai',
      heure: '14:00 - 15:00',
      cours: 'Musculation',
      coach: 'Sofia Mansour',
      salle: 'Salle B',
      statut: 'confirmé'
    },
    {
      id: 3,
      jour: 'Mardi 21 Mai',
      heure: '10:00 - 11:00',
      cours: 'Yoga',
      coach: 'Leila Benali',
      salle: 'Studio Yoga',
      statut: 'annulé'
    },
    {
      id: 4,
      jour: 'Mercredi 22 Mai',
      heure: '18:00 - 19:00',
      cours: 'CrossFit',
      coach: 'Mehdi Gharbi',
      salle: 'Salle CrossFit',
      statut: 'confirmé'
    }
  ];

  const joursUniques = [...new Set(seances.map(s => s.jour))];

  const filteredSeances = seances.filter(s => s.jour === selectedDate);

  const getStatutStyle = (statut) => {
    return statut === 'confirmé' 
      ? 'bg-green-100 text-green-700' 
      : 'bg-red-100 text-red-700';
  };

  const getStatutIcon = (statut) => {
    return statut === 'confirmé' ? <FaCheckCircle /> : <FaTimesCircle />;
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
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {jour}
          </button>
        ))}
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
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  <FaClock />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-800">{seance.cours}</p>
                  <p className="text-sm text-gray-500">{seance.heure}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Coach: {seance.coach} | Salle: {seance.salle}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${getStatutStyle(seance.statut)}`}>
                  {getStatutIcon(seance.statut)}
                  <span>{seance.statut}</span>
                </span>
                {seance.statut === 'confirmé' && (
                  <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                    Annuler
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <FaDumbbell className="text-6xl text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">Aucune séance prévue pour cette journée</p>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Réserver une séance
          </button>
        </div>
      )}

      {/* Résumé */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Séances cette semaine:</span>
          <span className="font-bold text-blue-600">
            {seances.filter(s => s.statut === 'confirmé').length} confirmées
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlanningPersonnel;