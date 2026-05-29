import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section avec image de fond */}
      <div className="relative h-screen min-h-[600px] flex items-center">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop" 
            alt="Gym background"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-transparent opacity-95"></div>
        </div>
        
        {/* Contenu */}
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="md:w-2/3">
            <div className="inline-block bg-blue-500 bg-opacity-30 backdrop-blur-sm rounded-full px-4 py-1 mb-4 text-white text-sm">
              🔥 Plus de 10,000 membres actifs
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white leading-tight">
              Transformez votre corps,{' '}
              <span className="text-yellow-400">transformez votre vie</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white opacity-90">
              Rejoignez Sportify et atteignez vos objectifs fitness avec nos coachs experts et salles modernes
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/register" 
                className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition transform hover:scale-105 shadow-lg"
              >
                🚀 Commencer maintenant
              </Link>
              <Link 
                to="/dashboard/client" 
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
              >
                👤 Mon Espace Client
              </Link>
              <Link 
                to="/cours" 
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition"
              >
                📖 Découvrir nos cours
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="text-4xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600 mt-2">Salles de sport</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="text-4xl font-bold text-blue-600">200+</div>
              <div className="text-gray-600 mt-2">Coachs experts</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="text-4xl font-bold text-blue-600">10k+</div>
              <div className="text-gray-600 mt-2">Membres actifs</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="text-4xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600 mt-2">Cours disponibles</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nos <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-gray-600 text-lg">Découvrez ce que nous vous proposons</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center border border-gray-100">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition">
              <div className="text-4xl group-hover:scale-110 transition">🏋️</div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Cours personnalisés</h3>
            <p className="text-gray-600">Des séances adaptées à votre niveau et objectifs</p>
            <Link to="/cours" className="inline-block mt-4 text-blue-600 font-semibold hover:underline">En savoir plus →</Link>
          </div>
          
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center border border-gray-100">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition">
              <div className="text-4xl group-hover:scale-110 transition">📍</div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Salles proches</h3>
            <p className="text-gray-600">Trouvez la salle de sport la plus proche de chez vous</p>
            <Link to="/salles" className="inline-block mt-4 text-blue-600 font-semibold hover:underline">En savoir plus →</Link>
          </div>
          
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center border border-gray-100">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition">
              <div className="text-4xl group-hover:scale-110 transition">💪</div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Coachs experts</h3>
            <p className="text-gray-600">Encadrement par des professionnels certifiés</p>
            <Link to="/coachs" className="inline-block mt-4 text-blue-600 font-semibold hover:underline">En savoir plus →</Link>
          </div>
        </div>
      </div>

      {/* Avantages Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Pourquoi choisir <span className="text-blue-600">Sportify</span> ?
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-3xl text-green-500">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Accès illimité</h3>
                <p className="text-gray-600">Accédez à toutes nos salles et cours sans limitation</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-3xl text-green-500">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Planning flexible</h3>
                <p className="text-gray-600">Réservez vos séances quand vous voulez</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-3xl text-green-500">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Support 24/7</h3>
                <p className="text-gray-600">Une équipe à votre écoute à tout moment</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-3xl text-green-500">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Prix abordables</h3>
                <p className="text-gray-600">Des forfaits adaptés à tous les budgets</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à commencer votre voyage ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez Sportify aujourd'hui et transformez votre vie
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/register" 
              className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition transform hover:scale-105 shadow-lg"
            >
              Inscription gratuite
            </Link>
            <Link 
              to="/dashboard/client" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
            >
              👤 Mon Espace Client
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;