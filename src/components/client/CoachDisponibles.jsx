import React, { useState, useEffect } from 'react';
import { FaStar, FaCalendarAlt, FaEnvelope, FaSpinner } from 'react-icons/fa';
import { getCoachsDisponibles } from '../../services/api';

const CoachDisponibles = () => {
  const [coachs, setCoachs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSpecialite, setSelectedSpecialite] = useState('tous');

  useEffect(() => {
    const fetchCoachs = async () => {
      try {
        setLoading(true);
        const res = await getCoachsDisponibles();
        setCoachs(res.data.coachs);
      } catch (err) {
        setError('Impossible de charger les coachs.');
      } finally {
        setLoading(false);
      }
    };
    fetchCoachs();
  }, []);

  // Extraire les spécialités uniques depuis les vrais coachs
  const specialites = ['tous', ...new Set(coachs.map(c => c.specialite).filter(Boolean))];

  const filteredCoachs = selectedSpecialite === 'tous'
    ? coachs
    : coachs.filter(c => c.specialite === selectedSpecialite);

  if (loading) return (
    <div className="flex justify-center items-center h-48">
      <FaSpinner className="animate-spin text-blue-600 text-3xl" />
      <span className="ml-3 text-gray-600">Chargement des coachs...</span>
    </div>
  );

  if (error) return (
    <div className="p-4 bg-red-100 text-red-700 rounded-xl">{error}</div>
  );

  if (coachs.length === 0) return (
    <div className="text-center p-8 text-gray-500">
      <FaCalendarAlt className="text-4xl mx-auto mb-3 text-gray-300" />
      <p>Aucun coach disponible pour le moment.</p>
    </div>
  );

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Coachs Disponibles</h2>

      {/* Filtres par spécialité */}
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
          <div key={coach._id}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-32 bg-gray-100 flex items-center justify-center p-4">
                {coach.photo ? (
                  <img src={coach.photo} alt={coach.nom}
                    className="w-24 h-24 rounded-full object-cover border-4 border-blue-600" />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl font-bold border-4 border-blue-300">
                    {coach.prenom?.[0]}{coach.nom?.[0]}
                  </div>
                )}
              </div>
              <div className="flex-1 p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{coach.prenom} {coach.nom}</h3>
                    <p className="text-blue-600 font-medium">{coach.specialite || 'Général'}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    coach.disponibilite ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {coach.disponibilite ? 'Disponible' : 'Indisponible'}
                  </span>
                </div>

                {coach.bio && (
                  <p className="text-gray-600 text-sm mt-2">{coach.bio}</p>
                )}

                <div className="flex space-x-3 mt-4">
                  <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2">
                    <FaCalendarAlt />
                    <span>Réservation</span>
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
