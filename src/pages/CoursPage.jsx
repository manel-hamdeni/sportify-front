import React, { useState } from 'react';
import {
  FaDumbbell, FaClock, FaUser, FaFire, FaLeaf, FaRunning,
  FaTimes, FaChevronLeft, FaChevronRight, FaStar, FaUsers
} from 'react-icons/fa';
import { MdSportsGymnastics, MdSelfImprovement } from 'react-icons/md';

const jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

const coursData = {
  Lundi: [
    { id: 1, nom: 'Circuit Training', coach: 'Karim Ben Ali', heure: '10:00', duree: 60, niveau: 'Intermédiaire', categorie: 'Cardio', places: 15, dispo: 5, couleur: 'blue' },
    { id: 2, nom: 'Hybrid Training', coach: 'Sofia Mansour', heure: '18:45', duree: 60, niveau: 'Avancé', categorie: 'Muscu', places: 12, dispo: 3, couleur: 'red' },
    { id: 3, nom: 'Duo Body Pump', coach: 'Mehdi Gharbi', heure: '18:45', duree: 45, niveau: 'Tous niveaux', categorie: 'Cardio', places: 20, dispo: 8, couleur: 'green' },
    { id: 4, nom: 'Iron Core', coach: 'Leila Benali', heure: '19:45', duree: 45, niveau: 'Intermédiaire', categorie: 'Muscu', places: 10, dispo: 0, couleur: 'purple' },
    { id: 5, nom: 'Spinning', coach: 'Yassine Trabelsi', heure: '19:45', duree: 50, niveau: 'Tous niveaux', categorie: 'Cardio', places: 18, dispo: 6, couleur: 'orange' },
    { id: 6, nom: 'Dance Orientale', coach: 'Amira Chaker', heure: '19:45', duree: 60, niveau: 'Débutant', categorie: 'Danse', places: 15, dispo: 10, couleur: 'pink' },
    { id: 7, nom: 'TRX', coach: 'Karim Ben Ali', heure: '20:30', duree: 45, niveau: 'Avancé', categorie: 'Muscu', places: 8, dispo: 2, couleur: 'blue' },
  ],
  Mardi: [
    { id: 8, nom: 'Hybrid Training', coach: 'Sofia Mansour', heure: '18:45', duree: 60, niveau: 'Avancé', categorie: 'Muscu', places: 12, dispo: 4, couleur: 'red' },
    { id: 9, nom: 'Body Combat', coach: 'Mehdi Gharbi', heure: '18:45', duree: 60, niveau: 'Intermédiaire', categorie: 'Cardio', places: 16, dispo: 7, couleur: 'green' },
    { id: 10, nom: 'Pilates', coach: 'Leila Benali', heure: '19:45', duree: 50, niveau: 'Débutant', categorie: 'Yoga', places: 12, dispo: 5, couleur: 'purple' },
  ],
  Mercredi: [
    { id: 11, nom: 'Yoga Flow', coach: 'Leila Benali', heure: '09:00', duree: 60, niveau: 'Tous niveaux', categorie: 'Yoga', places: 15, dispo: 8, couleur: 'purple' },
    { id: 12, nom: 'HIIT Express', coach: 'Karim Ben Ali', heure: '18:00', duree: 30, niveau: 'Avancé', categorie: 'Cardio', places: 20, dispo: 0, couleur: 'orange' },
    { id: 13, nom: 'Zumba', coach: 'Amira Chaker', heure: '19:00', duree: 60, niveau: 'Tous niveaux', categorie: 'Danse', places: 25, dispo: 12, couleur: 'pink' },
  ],
  Jeudi: [
    { id: 14, nom: 'Musculation', coach: 'Sofia Mansour', heure: '10:00', duree: 90, niveau: 'Tous niveaux', categorie: 'Muscu', places: 20, dispo: 6, couleur: 'red' },
    { id: 15, nom: 'CrossFit', coach: 'Mehdi Gharbi', heure: '18:00', duree: 60, niveau: 'Avancé', categorie: 'Cardio', places: 12, dispo: 3, couleur: 'green' },
    { id: 16, nom: 'Stretching', coach: 'Leila Benali', heure: '19:30', duree: 45, niveau: 'Débutant', categorie: 'Yoga', places: 15, dispo: 9, couleur: 'purple' },
    { id: 17, nom: 'Spinning', coach: 'Yassine Trabelsi', heure: '20:00', duree: 50, niveau: 'Intermédiaire', categorie: 'Cardio', places: 18, dispo: 4, couleur: 'blue' },
  ],
  Vendredi: [
    { id: 18, nom: 'K.P.W', coach: 'Sofia Mansour', heure: '18:45', duree: 60, niveau: 'Avancé', categorie: 'Cardio', places: 14, dispo: 0, couleur: 'red' },
    { id: 19, nom: 'Duo Body Pump', coach: 'Mehdi Gharbi', heure: '18:45', duree: 45, niveau: 'Intermédiaire', categorie: 'Muscu', places: 16, dispo: 5, couleur: 'green' },
    { id: 20, nom: 'Spinning', coach: 'Yassine Trabelsi', heure: '18:45', duree: 50, niveau: 'Tous niveaux', categorie: 'Cardio', places: 18, dispo: 7, couleur: 'orange' },
    { id: 21, nom: 'Abdos Fessiers', coach: 'Amira Chaker', heure: '19:45', duree: 45, niveau: 'Tous niveaux', categorie: 'Muscu', places: 20, dispo: 10, couleur: 'pink' },
    { id: 22, nom: 'Duo Grit', coach: 'Karim Ben Ali', heure: '19:45', duree: 30, niveau: 'Avancé', categorie: 'Cardio', places: 10, dispo: 2, couleur: 'blue' },
    { id: 23, nom: 'Abdos (45 min)', coach: 'Karim Ben Ali', heure: '20:30', duree: 45, niveau: 'Tous niveaux', categorie: 'Muscu', places: 20, dispo: 8, couleur: 'blue' },
  ],
  Samedi: [
    { id: 24, nom: 'CAF', coach: 'Karim Ben Ali', heure: '10:00', duree: 45, niveau: 'Tous niveaux', categorie: 'Muscu', places: 20, dispo: 6, couleur: 'blue' },
    { id: 25, nom: 'Zumba', coach: 'Amira Chaker', heure: '17:00', duree: 60, niveau: 'Tous niveaux', categorie: 'Danse', places: 25, dispo: 11, couleur: 'pink' },
    { id: 26, nom: 'CAF', coach: 'Amira Chaker', heure: '19:00', duree: 45, niveau: 'Tous niveaux', categorie: 'Muscu', places: 20, dispo: 0, couleur: 'pink' },
  ],
  Dimanche: [
    { id: 27, nom: 'Pilates', coach: 'Leila Benali', heure: '11:00', duree: 60, niveau: 'Débutant', categorie: 'Yoga', places: 12, dispo: 4, couleur: 'purple' },
    { id: 28, nom: 'Yoga Doux', coach: 'Leila Benali', heure: '14:00', duree: 60, niveau: 'Tous niveaux', categorie: 'Yoga', places: 15, dispo: 8, couleur: 'purple' },
    { id: 29, nom: 'Cardio Intense', coach: 'Karim Ben Ali', heure: '16:00', duree: 50, niveau: 'Intermédiaire', categorie: 'Cardio', places: 18, dispo: 5, couleur: 'blue' },
  ],
};

const catColors = {
  Cardio: { bg: 'bg-orange-100', text: 'text-orange-700', dot: 'bg-orange-500' },
  Muscu: { bg: 'bg-red-100', text: 'text-red-700', dot: 'bg-red-500' },
  Yoga: { bg: 'bg-purple-100', text: 'text-purple-700', dot: 'bg-purple-500' },
  Danse: { bg: 'bg-pink-100', text: 'text-pink-700', dot: 'bg-pink-500' },
};

const niveauColor = {
  'Débutant': 'bg-green-100 text-green-700',
  'Intermédiaire': 'bg-yellow-100 text-yellow-700',
  'Avancé': 'bg-red-100 text-red-700',
  'Tous niveaux': 'bg-blue-100 text-blue-700',
};

const cardColors = {
  blue: 'border-l-blue-500',
  red: 'border-l-red-500',
  green: 'border-l-green-500',
  purple: 'border-l-purple-500',
  orange: 'border-l-orange-500',
  pink: 'border-l-pink-500',
};

// Modal réservation cours
const CoursModal = ({ cours, onClose, onReserver }) => {
  const [confirmed, setConfirmed] = useState(false);
  const cat = catColors[cours.categorie] || catColors.Cardio;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-blue-200 transition">
            <FaTimes className="text-xl" />
          </button>
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${cat.bg} ${cat.text}`}>
            {cours.categorie}
          </span>
          <h2 className="text-white text-2xl font-bold">{cours.nom}</h2>
          <p className="text-blue-200 text-sm mt-1">avec {cours.coach}</p>
        </div>

        <div className="p-6 space-y-4">
          {/* Infos */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-blue-50 p-3 rounded-xl text-center">
              <FaClock className="text-blue-600 mx-auto mb-1" />
              <p className="font-bold text-gray-800">{cours.heure}</p>
              <p className="text-xs text-gray-500">{cours.duree} min</p>
            </div>
            <div className="bg-green-50 p-3 rounded-xl text-center">
              <FaUsers className="text-green-600 mx-auto mb-1" />
              <p className="font-bold text-gray-800">{cours.dispo > 0 ? cours.dispo : '0'}</p>
              <p className="text-xs text-gray-500">places dispo</p>
            </div>
            <div className={`p-3 rounded-xl text-center col-span-2 ${niveauColor[cours.niveau]}`}>
              <p className="font-semibold">Niveau: {cours.niveau}</p>
            </div>
          </div>

          {/* Places bar */}
          <div>
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Places réservées</span>
              <span>{cours.places - cours.dispo}/{cours.places}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all ${
                  cours.dispo === 0 ? 'bg-red-500' : cours.dispo < 5 ? 'bg-orange-500' : 'bg-green-500'
                }`}
                style={{ width: `${((cours.places - cours.dispo) / cours.places) * 100}%` }}
              />
            </div>
          </div>

          {confirmed ? (
            <div className="text-center py-4">
              <div className="text-5xl mb-3">🎉</div>
              <p className="font-bold text-green-600 text-lg">Réservation confirmée!</p>
              <p className="text-gray-500 text-sm mt-1">à {cours.heure} avec {cours.coach}</p>
            </div>
          ) : (
            <button
              onClick={() => { setConfirmed(true); setTimeout(() => { onClose(); onReserver(cours); }, 1500); }}
              disabled={cours.dispo === 0}
              className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {cours.dispo === 0 ? '❌ Complet' : '✓ Réserver ce cours'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Cours card in planning
const CoursCard = ({ cours, onClick }) => {
  const cat = catColors[cours.categorie] || catColors.Cardio;
  const isFull = cours.dispo === 0;

  return (
    <div
      onClick={onClick}
      className={`border-l-4 ${cardColors[cours.couleur]} bg-white rounded-r-xl p-3 shadow-sm hover:shadow-md transition cursor-pointer mb-2 ${isFull ? 'opacity-70' : ''}`}
    >
      <div className="flex justify-between items-start mb-1">
        <p className="font-bold text-gray-800 text-sm leading-tight">{cours.nom}</p>
        {isFull && <span className="text-xs bg-red-100 text-red-600 px-1.5 py-0.5 rounded-full font-medium">Complet</span>}
      </div>
      <p className="text-xs text-gray-500 flex items-center space-x-1 mb-1">
        <FaUser className="text-gray-400" />
        <span>{cours.coach.split(' ')[0]}</span>
      </p>
      <div className="flex justify-between items-center">
        <span className="text-xs font-bold text-blue-600">{cours.heure}</span>
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${cat.bg} ${cat.text}`}>
          {cours.categorie}
        </span>
      </div>
      <p className="text-xs text-gray-400 mt-1">{cours.duree} min</p>
    </div>
  );
};

// Toast
const Toast = ({ message, onClose }) => (
  <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 px-5 py-4 rounded-xl shadow-2xl bg-blue-600 text-white">
    <span>✅</span>
    <span className="font-medium">{message}</span>
    <button onClick={onClose}><FaTimes /></button>
  </div>
);

const CoursPage = () => {
  const [jourActif, setJourActif] = useState('Lundi');
  const [selectedCours, setSelectedCours] = useState(null);
  const [categorieFilter, setCategorieFilter] = useState('Toutes');
  const [toast, setToast] = useState(null);
  const [vue, setVue] = useState('jour'); // 'jour' ou 'semaine'

  const todayIndex = new Date().getDay(); // 0=dim, 1=lun...
  const jourMapping = [6, 0, 1, 2, 3, 4, 5]; // JS day -> index in jours array

  const categories = ['Toutes', 'Cardio', 'Muscu', 'Yoga', 'Danse'];

  const getCoursFiltered = (jour) => {
    let c = coursData[jour] || [];
    if (categorieFilter !== 'Toutes') c = c.filter(x => x.categorie === categorieFilter);
    return c;
  };

  const totalCours = Object.values(coursData).flat().length;
  const totalPlaces = Object.values(coursData).flat().reduce((s, c) => s + c.dispo, 0);

  const jourIdx = jours.indexOf(jourActif);
  const prevJour = () => setJourActif(jours[(jourIdx - 1 + 7) % 7]);
  const nextJour = () => setJourActif(jours[(jourIdx + 1) % 7]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">Planning des Cours</h1>
          <p className="text-blue-200 text-lg mb-6">Réservez votre cours de la semaine en un clic</p>
          <div className="flex justify-center space-x-6 text-sm flex-wrap gap-3">
            <div className="bg-white/20 px-4 py-2 rounded-full"><span className="font-bold">{totalCours}</span> Cours / semaine</div>
            <div className="bg-white/20 px-4 py-2 rounded-full"><span className="font-bold">{totalPlaces}</span> Places disponibles</div>
            <div className="bg-white/20 px-4 py-2 rounded-full"><span className="font-bold">6</span> Coachs</div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Légende catégories */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {categories.map(cat => {
            const c = catColors[cat];
            return (
              <button key={cat} onClick={() => setCategorieFilter(cat)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition ${
                  categorieFilter === cat
                    ? (c ? `${c.bg} ${c.text} shadow-md` : 'bg-blue-600 text-white shadow-md')
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                }`}>
                {c && <span className={`w-2 h-2 rounded-full ${c.dot}`} />}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Vue switcher */}
        <div className="flex justify-end mb-4 space-x-2">
          <button onClick={() => setVue('jour')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition ${vue === 'jour' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 shadow-sm hover:bg-gray-100'}`}>
            Vue jour
          </button>
          <button onClick={() => setVue('semaine')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition ${vue === 'semaine' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 shadow-sm hover:bg-gray-100'}`}>
            Vue semaine
          </button>
        </div>

        {vue === 'jour' ? (
          <>
            {/* Navigation jour */}
            <div className="bg-white rounded-2xl shadow-md p-4 mb-6">
              <div className="flex items-center justify-between mb-3">
                <button onClick={prevJour} className="p-2 hover:bg-gray-100 rounded-xl transition"><FaChevronLeft /></button>
                <h2 className="text-xl font-bold text-gray-800">{jourActif}</h2>
                <button onClick={nextJour} className="p-2 hover:bg-gray-100 rounded-xl transition"><FaChevronRight /></button>
              </div>
              <div className="flex space-x-1 overflow-x-auto pb-1">
                {jours.map(j => (
                  <button key={j} onClick={() => setJourActif(j)}
                    className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition ${
                      j === jourActif ? 'bg-blue-600 text-white shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}>
                    <span className="hidden md:inline">{j}</span>
                    <span className="md:hidden">{j.slice(0, 3)}</span>
                    <span className="ml-1 text-xs opacity-70">({(coursData[j] || []).length})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Cours du jour */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {getCoursFiltered(jourActif).length > 0 ? (
                getCoursFiltered(jourActif).map(cours => (
                  <div key={cours.id} onClick={() => setSelectedCours(cours)}
                    className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer overflow-hidden border-2 border-transparent hover:border-blue-200 ${cours.dispo === 0 ? 'opacity-75' : ''}`}>
                    <div className={`h-1.5 ${cours.dispo === 0 ? 'bg-red-400' : cours.dispo < 5 ? 'bg-orange-400' : 'bg-green-400'}`} />
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-bold text-gray-800 text-lg">{cours.nom}</h3>
                          <p className="text-sm text-gray-500 flex items-center space-x-1 mt-0.5">
                            <FaUser className="text-xs" /><span>{cours.coach}</span>
                          </p>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full font-bold ${catColors[cours.categorie]?.bg} ${catColors[cours.categorie]?.text}`}>
                          {cours.categorie}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm mb-3">
                        <span className="font-bold text-blue-600 text-lg">{cours.heure}</span>
                        <span className="text-gray-500">{cours.duree} min</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={`text-xs px-2 py-1 rounded-full ${niveauColor[cours.niveau]}`}>{cours.niveau}</span>
                        <span className={`text-xs font-semibold ${cours.dispo === 0 ? 'text-red-600' : cours.dispo < 5 ? 'text-orange-600' : 'text-green-600'}`}>
                          {cours.dispo === 0 ? 'Complet' : `${cours.dispo} places`}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center py-16 bg-white rounded-2xl shadow">
                  <p className="text-4xl mb-3">😴</p>
                  <p className="text-gray-500">Aucun cours ce jour</p>
                </div>
              )}
            </div>
          </>
        ) : (
          // Vue semaine
          <div className="bg-white rounded-2xl shadow-md overflow-x-auto">
            <div className="grid grid-cols-7 min-w-max">
              {jours.map(jour => (
                <div key={jour} className="min-w-36">
                  <div className={`p-3 text-center font-bold text-sm border-b ${
                    jour === jourActif ? 'bg-blue-600 text-white' : 'bg-gray-50 text-gray-700'
                  }`}>
                    {jour}
                    <span className="block text-xs font-normal opacity-70">{(coursData[jour] || []).length} cours</span>
                  </div>
                  <div className="p-2">
                    {getCoursFiltered(jour).map(cours => (
                      <CoursCard key={cours.id} cours={cours} onClick={() => setSelectedCours(cours)} />
                    ))}
                    {getCoursFiltered(jour).length === 0 && (
                      <p className="text-center text-xs text-gray-400 py-4">—</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {selectedCours && (
        <CoursModal
          cours={selectedCours}
          onClose={() => setSelectedCours(null)}
          onReserver={(c) => {
            setSelectedCours(null);
            setToast(`✅ Réservé: ${c.nom} à ${c.heure} avec ${c.coach.split(' ')[0]}`);
            setTimeout(() => setToast(null), 3500);
          }}
        />
      )}

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
};

export default CoursPage;