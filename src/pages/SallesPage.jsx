import React, { useState } from 'react';
import {
  FaSearch, FaMapMarkerAlt, FaUsers, FaClock, FaDumbbell,
  FaPhone, FaWifi, FaParking, FaShower, FaTimes, FaCheckCircle,
  FaTimesCircle, FaChevronDown, FaChevronUp, FaDirections
} from 'react-icons/fa';
import { MdAir, MdLocalDrink, MdFitnessCenter } from 'react-icons/md';

const salles = [
  {
    id: 1,
    nom: 'Sportify Centre',
    adresse: 'Avenue Habib Bourguiba, Tunis Centre',
    localisation: 'Tunis Centre',
    capacite: 50,
    equipements: ['Cardio', 'Musculation', 'CrossFit'],
    horaires: '08:00 - 22:00',
    status: 'ouvert',
    telephone: '+216 71 123 456',
    email: 'centre@sportify.tn',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop',
    ],
    services: ['Wifi', 'Parking', 'Douches', 'Climatisation', 'Bar Nutrition', 'Vestiaires'],
    description: 'Notre salle phare au cœur de Tunis. Équipée des dernières machines, elle accueille tous les niveaux dans un cadre moderne et motivant. Coaches certifiés disponibles 7j/7.',
    tarifsAbonnement: [
      { nom: 'Mensuel', prix: 80, details: 'Accès illimité 1 mois' },
      { nom: 'Trimestriel', prix: 210, details: 'Accès illimité 3 mois (-12%)' },
      { nom: 'Annuel', prix: 720, details: 'Accès illimité 12 mois (-25%)' },
    ],
    coursDisponibles: ['Cardio Intense', 'Musculation', 'CrossFit', 'HIIT', 'Stretching'],
    mapUrl: 'https://maps.google.com/?q=Avenue+Habib+Bourguiba+Tunis',
    rating: 4.8,
    avis: 124,
  },
  {
    id: 2,
    nom: 'Sportify Lac',
    adresse: 'Les Berges du Lac 1, Tunis',
    localisation: 'Lac 1',
    capacite: 40,
    equipements: ['Yoga', 'Pilates', 'Cardio'],
    horaires: '09:00 - 21:00',
    status: 'ouvert',
    telephone: '+216 71 234 567',
    email: 'lac@sportify.tn',
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
    ],
    services: ['Wifi', 'Parking', 'Douches', 'Climatisation', 'Vestiaires'],
    description: 'Salle premium au Lac avec vue panoramique. Spécialisée dans les disciplines douces et le bien-être. Ambiance zen et instructeurs expérimentés pour votre équilibre corps-esprit.',
    tarifsAbonnement: [
      { nom: 'Mensuel', prix: 90, details: 'Accès illimité 1 mois' },
      { nom: 'Trimestriel', prix: 240, details: 'Accès illimité 3 mois (-11%)' },
      { nom: 'Annuel', prix: 800, details: 'Accès illimité 12 mois (-26%)' },
    ],
    coursDisponibles: ['Yoga', 'Pilates', 'Méditation', 'Cardio Doux', 'Zumba'],
    mapUrl: 'https://maps.google.com/?q=Lac+1+Tunis',
    rating: 4.9,
    avis: 89,
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
    telephone: '+216 71 345 678',
    email: 'ariana@sportify.tn',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
    ],
    services: ['Parking', 'Douches', 'Vestiaires'],
    description: 'Salle en cours de rénovation pour vous offrir encore plus de confort. Réouverture prévue prochainement avec de nouveaux équipements et une surface agrandie.',
    tarifsAbonnement: [
      { nom: 'Mensuel', prix: 70, details: 'Accès illimité 1 mois' },
      { nom: 'Trimestriel', prix: 180, details: 'Accès illimité 3 mois (-14%)' },
      { nom: 'Annuel', prix: 650, details: 'Accès illimité 12 mois (-22%)' },
    ],
    coursDisponibles: ['Musculation', 'Cardio', 'Functional Training'],
    mapUrl: 'https://maps.google.com/?q=Ariana+Ville+Tunis',
    rating: 4.6,
    avis: 57,
  },
];

const serviceIcons = {
  'Wifi': <FaWifi />,
  'Parking': <FaParking />,
  'Douches': <FaShower />,
  'Climatisation': <MdAir />,
  'Bar Nutrition': <MdLocalDrink />,
  'Vestiaires': <MdFitnessCenter />,
};

// Modal détails salle
const SalleModal = ({ salle, onClose }) => {
  const [activeImg, setActiveImg] = useState(0);
  const [activeTab, setActiveTab] = useState('info');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl my-4">
        {/* Header image */}
        <div className="relative h-56 rounded-t-2xl overflow-hidden">
          <img src={salle.images[activeImg]} alt={salle.nom} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <button onClick={onClose} className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-40 text-white rounded-full p-2 transition">
            <FaTimes />
          </button>
          <div className="absolute bottom-4 left-4">
            <h2 className="text-white text-2xl font-bold">{salle.nom}</h2>
            <div className="flex items-center space-x-2 mt-1">
              <FaMapMarkerAlt className="text-red-400 text-sm" />
              <span className="text-white text-sm">{salle.adresse}</span>
            </div>
          </div>
          <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${
            salle.status === 'ouvert' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
          }`}>
            {salle.status === 'ouvert' ? '✓ Ouvert' : '✗ Fermé'}
          </span>
          {/* Thumbnails */}
          {salle.images.length > 1 && (
            <div className="absolute bottom-4 right-4 flex space-x-1">
              {salle.images.map((_, i) => (
                <button key={i} onClick={() => setActiveImg(i)}
                  className={`w-2 h-2 rounded-full transition ${i === activeImg ? 'bg-white' : 'bg-white/40'}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          {['info', 'cours', 'tarifs'].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-sm font-semibold capitalize transition ${
                activeTab === tab ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'
              }`}>
              {tab === 'info' ? '📋 Informations' : tab === 'cours' ? '🏋️ Cours' : '💰 Tarifs'}
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === 'info' && (
            <div className="space-y-5">
              <p className="text-gray-600 leading-relaxed">{salle.description}</p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-3 rounded-xl flex items-center space-x-3">
                  <FaUsers className="text-blue-600 text-xl" />
                  <div>
                    <p className="text-xs text-gray-500">Capacité</p>
                    <p className="font-bold text-gray-800">{salle.capacite} personnes</p>
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded-xl flex items-center space-x-3">
                  <FaClock className="text-green-600 text-xl" />
                  <div>
                    <p className="text-xs text-gray-500">Horaires</p>
                    <p className="font-bold text-gray-800">{salle.horaires}</p>
                  </div>
                </div>
                <div className="bg-purple-50 p-3 rounded-xl flex items-center space-x-3">
                  <FaPhone className="text-purple-600 text-xl" />
                  <div>
                    <p className="text-xs text-gray-500">Téléphone</p>
                    <p className="font-bold text-gray-800">{salle.telephone}</p>
                  </div>
                </div>
                <div className="bg-orange-50 p-3 rounded-xl flex items-center space-x-3">
                  <span className="text-orange-600 text-xl">⭐</span>
                  <div>
                    <p className="text-xs text-gray-500">Note clients</p>
                    <p className="font-bold text-gray-800">{salle.rating} <span className="text-xs font-normal text-gray-500">({salle.avis} avis)</span></p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-3">🛠️ Services disponibles</h4>
                <div className="grid grid-cols-3 gap-2">
                  {salle.services.map((s, i) => (
                    <div key={i} className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg text-sm text-gray-700">
                      <span className="text-blue-500">{serviceIcons[s] || <FaCheckCircle />}</span>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a href={salle.mapUrl} target="_blank" rel="noreferrer"
                className="flex items-center justify-center space-x-2 w-full py-3 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition font-semibold">
                <FaDirections />
                <span>Voir sur la carte</span>
              </a>
            </div>
          )}

          {activeTab === 'cours' && (
            <div className="space-y-3">
              <p className="text-gray-500 text-sm mb-4">Cours disponibles dans cette salle :</p>
              {salle.coursDisponibles.map((cours, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition">
                  <div className="flex items-center space-x-3">
                    <FaDumbbell className="text-blue-500" />
                    <span className="font-medium text-gray-800">{cours}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    salle.status === 'ouvert' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {salle.status === 'ouvert' ? 'Disponible' : 'Indisponible'}
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'tarifs' && (
            <div className="space-y-4">
              <p className="text-gray-500 text-sm mb-4">Choisissez la formule qui vous convient :</p>
              {salle.tarifsAbonnement.map((tarif, i) => (
                <div key={i} className={`p-4 rounded-xl border-2 transition ${
                  i === 1 ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
                }`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold text-gray-800">{tarif.nom}</p>
                      <p className="text-sm text-gray-500">{tarif.details}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">{tarif.prix} <span className="text-sm">DT</span></p>
                      {i === 1 && <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">Populaire</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Salle Card
const SalleCard = ({ salle, onClick }) => (
  <div
    onClick={onClick}
    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border-2 border-transparent hover:border-blue-200 group"
  >
    <div className="relative h-48 overflow-hidden">
      <img src={salle.image} alt={salle.nom} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${
        salle.status === 'ouvert' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
      }`}>
        {salle.status === 'ouvert' ? '✓ Ouvert' : '✗ Fermé'}
      </span>
      <div className="absolute bottom-3 left-3 flex items-center space-x-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-lg">
        <span className="text-yellow-400 text-sm">⭐</span>
        <span className="text-white text-sm font-bold">{salle.rating}</span>
        <span className="text-white/70 text-xs">({salle.avis})</span>
      </div>
    </div>

    <div className="p-5">
      <h3 className="text-lg font-bold text-gray-800 mb-1">{salle.nom}</h3>
      <div className="flex items-center space-x-1 text-sm text-gray-500 mb-3">
        <FaMapMarkerAlt className="text-red-400 text-xs" />
        <span>{salle.adresse}</span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
        <div className="flex items-center space-x-1.5">
          <FaUsers className="text-blue-400 text-xs" />
          <span>Cap: {salle.capacite}</span>
        </div>
        <div className="flex items-center space-x-1.5">
          <FaClock className="text-blue-400 text-xs" />
          <span>{salle.horaires}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {salle.equipements.map((eq, i) => (
          <span key={i} className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full font-medium">{eq}</span>
        ))}
      </div>

      <button className="w-full py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition group-hover:shadow-md">
        Voir les détails →
      </button>
    </div>
  </div>
);

const SallesPage = () => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('Toutes');
  const [selectedSalle, setSelectedSalle] = useState(null);

  const filtered = salles.filter(s => {
    const matchSearch = s.nom.toLowerCase().includes(search.toLowerCase()) ||
      s.localisation.toLowerCase().includes(search.toLowerCase()) ||
      s.adresse.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'Toutes' ||
      (statusFilter === 'Ouvertes' && s.status === 'ouvert') ||
      (statusFilter === 'Fermées' && s.status === 'ferme');
    return matchSearch && matchStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-3">Nos Salles</h1>
          <p className="text-red-200 text-lg">Trouvez la salle la plus proche et réservez votre abonnement</p>
          <div className="flex justify-center space-x-6 mt-6 text-sm flex-wrap gap-3">
            <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
              <span className="font-bold">{salles.length}</span> Salles
            </div>
            <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
              <span className="font-bold">{salles.filter(s => s.status === 'ouvert').length}</span> Ouvertes
            </div>
            <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
              <span className="font-bold">{salles.reduce((sum, s) => sum + s.capacite, 0)}</span> Places totales
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Filtres */}
        <div className="bg-white rounded-2xl shadow-md p-5 mb-8 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher par nom, ville ou adresse..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition"
            />
          </div>
          <div className="flex space-x-2">
            {['Toutes', 'Ouvertes', 'Fermées'].map(f => (
              <button key={f} onClick={() => setStatusFilter(f)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                  statusFilter === f ? 'bg-red-600 text-white shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}>
                {f}
              </button>
            ))}
          </div>
        </div>

        <p className="text-gray-500 text-sm mb-5">{filtered.length} salle{filtered.length > 1 ? 's' : ''} trouvée{filtered.length > 1 ? 's' : ''}</p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(salle => (
              <SalleCard key={salle.id} salle={salle} onClick={() => setSelectedSalle(salle)} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow">
            <p className="text-5xl mb-4">🏋️</p>
            <p className="text-gray-500 text-lg">Aucune salle trouvée</p>
            <button onClick={() => { setSearch(''); setStatusFilter('Toutes'); }}
              className="mt-4 text-red-600 hover:underline text-sm">
              Réinitialiser la recherche
            </button>
          </div>
        )}
      </div>

      {selectedSalle && (
        <SalleModal salle={selectedSalle} onClose={() => setSelectedSalle(null)} />
      )}
    </div>
  );
};

export default SallesPage;