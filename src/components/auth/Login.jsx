import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login, loading, error } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await login(email, password);
      // Redirection automatique selon le rôle retourné par le backend
      if (userData.role === 'client') {
        navigate('/dashboard/client');
      } else if (userData.role === 'coach') {
        navigate('/dashboard/coach');
      } else if (userData.role === 'admin') {
        navigate('/dashboard/admin');
      } else {
        navigate('/');
      }
    } catch (err) {
      // L'erreur est déjà gérée dans AuthContext
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🏋️</div>
          <h2 className="text-3xl font-bold text-gray-800">Connexion</h2>
          <p className="text-gray-500 mt-2">Connectez-vous à votre compte</p>
        </div>

        {/* Afficher les erreurs du backend */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-xl">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block text-gray-700 mb-2 font-semibold">Email</label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                placeholder="exemple@email.com"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-semibold">Mot de passe</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Pas de compte ?{' '}
            <Link to="/register" className="text-blue-600 font-semibold hover:underline">
              Inscrivez-vous
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
