import React, { useState } from 'react';
import {
  FaStar, FaPhone, FaEnvelope, FaCalendarAlt, FaSearch,
  FaFilter, FaCheckCircle, FaTimesCircle, FaTimes, FaPaperPlane
} from 'react-icons/fa';

const coachs = [
  {
    id: 1,
    nom: 'Karim Ben Ali',
    specialite: 'Cardio',
    rating: 4.8,
    telephone: '+216 22 123 456',
    email: 'karim.benali@email.com',
    experience: 8,
    salaire: 2500,
    disponible: true,
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    description: 'Coach spécialisé en cardio et endurance. 8 ans d\'expérience avec des résultats prouvés.',
    cours: ['Cardio Intense', 'Running', 'HIIT'],
    horaires: ['09:00 - 10:00', '11:00 - 12:00', '14:00 - 15:00', '16:00 - 17:00']
  },
  {
    id: 2,
    nom: 'Sofia Mansour',
    specialite: 'Musculation',
    rating: 4.9,
    telephone: '+216 98 765 432',
    email: 'sofia.mansour@email.com',
    experience: 6,
    salaire: 2800,
    disponible: true,
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    description: 'Experte en musculation et nutrition sportive. Transformez votre corps avec méthode.',
    cours: ['Musculation', 'Fitness', 'Body Pump'],
    horaires: ['08:00 - 09:00', '10:00 - 11:00', '15:00 - 16:00']
  },
  {
    id: 3,
    nom: 'Mehdi Gharbi',
    specialite: 'CrossFit',
    rating: 4.7,
    telephone: '+216 55 987 654',
    email: 'mehdi.gharbi@email.com',
    experience: 5,
    salaire: 2700,
    disponible: false,
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    description: 'Passionné de CrossFit et sports fonctionnels. Dépassez vos limites chaque jour.',
    cours: ['CrossFit', 'Functional Training', 'Kettlebell'],
    horaires: ['07:00 - 08:00', '12:00 - 13:00', '18:00 - 19:00']
  },
  {
    id: 4,
    nom: 'Leila Benali',
    specialite: 'Yoga',
    rating: 4.9,
    telephone: '+216 33 456 789',
    email: 'leila.benali@email.com',
    experience: 7,
    salaire: 2600,
    disponible: true,
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    description: 'Coach Yoga & Méditation certifiée. Corps et esprit en harmonie pour un bien-être total.',
    cours: ['Yoga', 'Méditation', 'Pilates'],
    horaires: ['09:00 - 10:00', '11:00 - 12:00', '17:00 - 18:00']
  },
  {
    id: 5,
    nom: 'Yassine Trabelsi',
    specialite: 'Natation',
    rating: 4.6,
    telephone: '+216 71 234 567',
    email: 'yassine.trabelsi@email.com',
    experience: 10,
    salaire: 3000,
    disponible: true,
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
    description: 'Champion national de natation reconverti en coach. 10 ans d\'expérience en piscine.',
    cours: ['Natation', 'Aquafitness', 'Hydrodynamisme'],
    horaires: ['07:00 - 08:00', '10:00 - 11:00', '16:00 - 17:00']
  },
  {
    id: 6,
    nom: 'Amira Chaker',
    specialite: 'Danse',
    rating: 4.8,
    telephone: '+216 25 678 901',
    email: 'amira.chaker@email.com',
    experience: 4,
    salaire: 2400,
    disponible: true,
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    description: 'Danseuse professionnelle et coach fitness. Brûlez des calories en vous amusant!',
    cours: ['Zumba', 'Danse Fitness', 'Stretching'],
    horaires: ['10:00 - 11:00', '14:00 - 15:00', '19:00 - 20:00']
  }
];

const specialites = ['Toutes', 'Cardio', 'Musculation', 'CrossFit', 'Yoga', 'Natation', 'Danse'];

// Modal Réservation
const ReservationModal = ({ coach, onClose, onConfirm }) => {
  const [selectedHoraire, setSelectedHoraire] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [note, setNote] = useState('');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-2xl p-5 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src={coach.image} alt={coach.nom} className="w-12 h-12 rounded-full border-2 border-white object-cover" />
            <div>
              <h3 className="text-white font-bold text-lg">Réserver une séance</h3>
              <p className="text-blue-200 text-sm">avec {coach.nom}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-white hover:text-blue-200 transition">
            <FaTimes className="text-xl" />
          </button>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">📅 Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={e => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">⏰ Horaire disponible</label>
            <div className="grid grid-cols-2 gap-2">
              {coach.horaires.map((h, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedHoraire(h)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                    selectedHoraire === h
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {h}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">📝 Note (optionnel)</label>
            <textarea
              value={note}
              onChange={e => setNote(e.target.value)}
              placeholder="Votre objectif, niveau, demandes spéciales..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              rows="3"
            />
          </div>
          <button
            onClick={() => {
              if (selectedDate && selectedHoraire) onConfirm({ coach, date: selectedDate, horaire: selectedHoraire, note });
            }}
            disabled={!selectedDate || !selectedHoraire}
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition font-semibold disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            <FaCalendarAlt />
            <span>Confirmer la réservation</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Modal Message
const MessageModal = ({ coach, onClose, onSend }) => {
  const [message, setMessage] = useState('');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-t-2xl p-5 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src={coach.image} alt={coach.nom} className="w-12 h-12 rounded-full border-2 border-white object-cover" />
            <div>
              <h3 className="text-white font-bold text-lg">Envoyer un message</h3>
              <p className="text-green-200 text-sm">à {coach.nom}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-white hover:text-green-200 transition">
            <FaTimes className="text-xl" />
          </button>
        </div>
        <div className="p-6 space-y-4">
          <div className="bg-green-50 p-3 rounded-xl flex items-center space-x-3">
            <FaEnvelope className="text-green-600" />
            <span className="text-sm text-gray-600">{coach.email}</span>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">💬 Votre message</label>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder={`Bonjour ${coach.nom}, je souhaite...`}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
              rows="5"
            />
          </div>
          <button
            onClick={() => { if (message.trim()) onSend({ coach, message }); }}
            disabled={!message.trim()}
            className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition font-semibold disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            <FaPaperPlane />
            <span>Envoyer</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Modal Rating
const RatingModal = ({ coach, onClose, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [comment, setComment] = useState('');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-t-2xl p-5 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src={coach.image} alt={coach.nom} className="w-12 h-12 rounded-full border-2 border-white object-cover" />
            <div>
              <h3 className="text-white font-bold text-lg">Évaluer le coach</h3>
              <p className="text-yellow-100 text-sm">{coach.nom}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-white hover:text-yellow-200 transition">
            <FaTimes className="text-xl" />
          </button>
        </div>
        <div className="p-6 space-y-5">
          <div className="text-center">
            <p className="text-gray-700 font-medium mb-3">Votre note</p>
            <div className="flex justify-center space-x-2">
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHovered(star)}
                  onMouseLeave={() => setHovered(0)}
                  className="text-4xl transition-transform hover:scale-125"
                >
                  <FaStar className={star <= (hovered || rating) ? 'text-yellow-400' : 'text-gray-200'} />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="text-sm text-gray-500 mt-2">
                {rating === 1 ? 'Mauvais' : rating === 2 ? 'Passable' : rating === 3 ? 'Bien' : rating === 4 ? 'Très bien' : 'Excellent!'}
              </p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">💬 Commentaire</label>
            <textarea
              value={comment}
              onChange={e => setComment(e.target.value)}
              placeholder="Partagez votre expérience..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition"
              rows="3"
            />
          </div>
          <button
            onClick={() => { if (rating > 0) onSubmit({ coach, rating, comment }); }}
            disabled={rating === 0}
            className="w-full bg-yellow-500 text-white py-3 rounded-xl hover:bg-yellow-600 transition font-semibold disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            <FaStar />
            <span>Soumettre l'évaluation</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Toast notification
const Toast = ({ message, type, onClose }) => (
  <div className={`fixed bottom-6 right-6 z-50 flex items-center space-x-3 px-5 py-4 rounded-xl shadow-2xl text-white transition-all ${
    type === 'success' ? 'bg-green-600' : 'bg-blue-600'
  }`}>
    <FaCheckCircle className="text-xl" />
    <span className="font-medium">{message}</span>
    <button onClick={onClose} className="ml-2 opacity-70 hover:opacity-100"><FaTimes /></button>
  </div>
);

// Coach Card
const CoachCard = ({ coach, onReserver, onMessage, onRate }) => (
  <div className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 ${
    coach.disponible ? 'border-transparent hover:border-blue-200' : 'border-transparent opacity-90'
  }`}>
    <div className="p-5">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img src={coach.image} alt={coach.nom} className="w-16 h-16 rounded-full object-cover border-2 border-gray-100 shadow" />
          <div>
            <h3 className="font-bold text-gray-800 text-lg leading-tight">{coach.nom}</h3>
            <p className="text-blue-600 font-medium text-sm">{coach.specialite}</p>
          </div>
        </div>
        <div className="bg-yellow-50 px-3 py-1.5 rounded-xl flex items-center space-x-1">
          <FaStar className="text-yellow-400 text-sm" />
          <span className="font-bold text-gray-700">{coach.rating}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
        <div className="flex items-center space-x-1.5">
          <FaPhone className="text-blue-400 text-xs" />
          <span>{coach.telephone}</span>
        </div>
        <div className="flex items-center space-x-1.5">
          <FaEnvelope className="text-blue-400 text-xs" />
          <span className="truncate">{coach.email}</span>
        </div>
        <div className="flex items-center space-x-1.5">
          <FaCalendarAlt className="text-blue-400 text-xs" />
          <span>Exp: {coach.experience} ans</span>
        </div>
        <div className="flex items-center space-x-1.5">
          <span className="text-blue-400 text-xs">💰</span>
          <span>{coach.salaire} DT</span>
        </div>
      </div>

      <div className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
        coach.disponible ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
      }`}>
        {coach.disponible ? <FaCheckCircle /> : <FaTimesCircle />}
        <span>{coach.disponible ? 'Disponible' : 'Indisponible'}</span>
      </div>

      <div className="flex space-x-2">
        <button
          onClick={() => onReserver(coach)}
          disabled={!coach.disponible}
          className="flex-1 bg-blue-600 text-white py-2 rounded-xl text-sm font-semibold hover:bg-blue-700 transition disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center space-x-1"
        >
          <FaCalendarAlt className="text-xs" />
          <span>Réserver</span>
        </button>
        <button
          onClick={() => onRate(coach)}
          className="px-3 py-2 bg-yellow-50 text-yellow-600 rounded-xl hover:bg-yellow-100 transition"
          title="Évaluer"
        >
          <FaStar />
        </button>
        <button
          onClick={() => onMessage(coach)}
          className="px-3 py-2 bg-green-50 text-green-600 rounded-xl hover:bg-green-100 transition"
          title="Message"
        >
          <FaEnvelope />
        </button>
      </div>
    </div>
  </div>
);

const CoachsPage = () => {
  const [search, setSearch] = useState('');
  const [specialiteFilter, setSpecialiteFilter] = useState('Toutes');
  const [disponibleOnly, setDisponibleOnly] = useState(false);
  const [reservationModal, setReservationModal] = useState(null);
  const [messageModal, setMessageModal] = useState(null);
  const [ratingModal, setRatingModal] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  const filtered = coachs.filter(c => {
    const matchSearch = c.nom.toLowerCase().includes(search.toLowerCase()) ||
      c.specialite.toLowerCase().includes(search.toLowerCase());
    const matchSpec = specialiteFilter === 'Toutes' || c.specialite === specialiteFilter;
    const matchDispo = !disponibleOnly || c.disponible;
    return matchSearch && matchSpec && matchDispo;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-3">Nos Coachs</h1>
          <p className="text-blue-200 text-lg">Choisissez votre coach idéal et réservez votre séance</p>
          <div className="flex justify-center space-x-6 mt-6 text-sm">
            <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
              <span className="font-bold">{coachs.length}</span> Coachs
            </div>
            <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
              <span className="font-bold">{coachs.filter(c => c.disponible).length}</span> Disponibles
            </div>
            <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
              <span className="font-bold">6</span> Spécialités
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-md p-5 mb-8 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un coach..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
            />
          </div>
          <div className="flex items-center space-x-2">
            <FaFilter className="text-gray-400" />
            <select
              value={specialiteFilter}
              onChange={e => setSpecialiteFilter(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition bg-white"
            >
              {specialites.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
          <label className="flex items-center space-x-2 cursor-pointer">
            <div
              onClick={() => setDisponibleOnly(!disponibleOnly)}
              className={`w-12 h-6 rounded-full transition-colors ${disponibleOnly ? 'bg-blue-600' : 'bg-gray-300'} relative`}
            >
              <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${disponibleOnly ? 'translate-x-7' : 'translate-x-1'}`} />
            </div>
            <span className="text-sm text-gray-600 font-medium">Disponibles uniquement</span>
          </label>
        </div>

        {/* Results count */}
        <p className="text-gray-500 mb-5 text-sm">
          {filtered.length} coach{filtered.length > 1 ? 's' : ''} trouvé{filtered.length > 1 ? 's' : ''}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(coach => (
              <CoachCard
                key={coach.id}
                coach={coach}
                onReserver={setReservationModal}
                onMessage={setMessageModal}
                onRate={setRatingModal}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow">
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-gray-500 text-lg">Aucun coach trouvé</p>
            <button onClick={() => { setSearch(''); setSpecialiteFilter('Toutes'); setDisponibleOnly(false); }}
              className="mt-4 text-blue-600 hover:underline text-sm">
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>

      {/* Modals */}
      {reservationModal && (
        <ReservationModal
          coach={reservationModal}
          onClose={() => setReservationModal(null)}
          onConfirm={(data) => {
            setReservationModal(null);
            showToast(`✅ Séance réservée avec ${data.coach.nom} le ${data.date} à ${data.horaire}`);
          }}
        />
      )}
      {messageModal && (
        <MessageModal
          coach={messageModal}
          onClose={() => setMessageModal(null)}
          onSend={(data) => {
            setMessageModal(null);
            showToast(`📩 Message envoyé à ${data.coach.nom}!`);
          }}
        />
      )}
      {ratingModal && (
        <RatingModal
          coach={ratingModal}
          onClose={() => setRatingModal(null)}
          onSubmit={(data) => {
            setRatingModal(null);
            showToast(`⭐ Évaluation envoyée pour ${data.coach.nom}!`);
          }}
        />
      )}

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
};

export default CoachsPage;