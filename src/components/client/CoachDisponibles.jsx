import React, { useState } from 'react';
import { FaStar, FaCalendarAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const CoachDisponibles = () => {
  const [selectedSpecialite, setSelectedSpecialite] = useState('tous');

  const coachs = [
    {
      id: 1,
      nom: 'Karim Ben Ali',
      specialite: 'Cardio',
      experience: '8 ans',
      disponibilite: true,
      note: 4.8,
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      description: 'Spécialiste en cardio et perte de poids'
    },
    {
      id: 2,
      nom: 'Sofia Mansour',
      specialite: 'Musculation',
      experience: '6 ans',
      disponibilite: true,
      note: 4.9,
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      description: 'Experte en musculation et prise de masse'
    },
    {
      id: 3,
      nom: 'Mehdi Gharbi',
      specialite: 'CrossFit',
      experience: '5 ans',
      disponibilite: false,
      note: 4.7,
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      description: 'Coach CrossFit certifié'
    },
    {
      id: 4,
      nom: 'Leila Benali',
      specialite: 'Yoga',
      experience: '7 ans',
      disponibilite: true,
      note: 4.9,
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
      description: 'Instructrice Yoga et méditation'
    }
  ];

  const specialites = ['tous', 'Cardio', 'Musculation', 'CrossFit', 'Yoga'];

  const filteredCoachs = selectedSpecialite === 'tous' 
    ? coachs 
    : coachs.filter(c => c.specialite === selectedSpecialite);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Coachs Disponibles</h2>

      {/* Filtres */}
      <div className="flex flex-wrap gap-3 mb-8">
        {specialites.map((spec, index) => (
          <button
            key={index}
            onClick={() => setSelectedSpecialite(spec)}
            className={`px-5 py-2 rounded-lg font-medium transition ${
              selectedSpecialite === spec
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {spec === 'tous' ? 'Tous' : spec}
          </button>
        ))}
      </div>

      {/* Liste des coachs */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredCoachs.map((coach) => (
          <div
            key={coach.id}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-32 bg-gray-100 flex items-center justify-center p-4">
                <img
                  src={coach.image}
                  alt={coach.nom}
                  className="w-24 h-24 rounded-full object-cover border-4 border-blue-600"
                />
              </div>
              <div className="flex-1 p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{coach.nom}</h3>
                    <p className="text-blue-600 font-medium">{coach.specialite}</p>
                  </div>
                  <div className="flex items-center space-x-1 bg-yellow-100 px-2 py-1 rounded-lg">
                    <FaStar className="text-yellow-500" />
                    <span className="font-semibold">{coach.note}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mt-2">{coach.description}</p>
                
                <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                  <span>📅 {coach.experience}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    coach.disponibilite ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {coach.disponibilite ? 'Disponible' : 'Indisponible'}
                  </span>
                </div>

                <div className="flex space-x-3 mt-4">
                  <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2">
                    <FaCalendarAlt />
                    <span>Réservation</span>
                  </button>
                  <button className="px-4 py-2 border border-green-500 text-green-600 rounded-lg hover:bg-green-50 transition">
                    <FaWhatsapp />
                  </button>
                  <button className="px-4 py-2 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                    <FaEnvelope />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoachDisponibles;