import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';

const Register = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'client',
    abonnement: 'mensuel',
    specialite: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const { register, loading, error } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }
    try {
      const payload = {
        nom: formData.nom,
        prenom: formData.prenom,
        email: formData.email,
        motDePasse: formData.password,
        role: formData.role,
        ...(formData.role === 'client' && { abonnement: formData.abonnement }),
        ...(formData.role === 'coach' && { specialite: formData.specialite }),
      };
      const userData = await register(payload);
      if (userData.role === 'client') navigate('/dashboard/client');
      else if (userData.role === 'coach') navigate('/dashboard/coach');
      else if (userData.role === 'admin') navigate('/dashboard/admin');
      else navigate('/');
    } catch (err) {
      // L'erreur est déjà gérée dans AuthContext
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🎉</div>
          <h2 className="text-3xl font-bold text-gray-800">Inscription</h2>
          <p className="text-gray-500 mt-2">Créez votre compte gratuitement</p>
        </div>

        {/* Afficher les erreurs du backend */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-xl">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Rôle */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-semibold">Je suis</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
            >
              <option value="client">👤 Client</option>
              <option value="coach">👨‍🏫 Coach</option>
            </select>
          </div>

          {/* Nom */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-semibold">Nom</label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                placeholder="Dupont"
                required
              />
            </div>
          </div>

          {/* Prénom */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-semibold">Prénom</label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                placeholder="Jean"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-semibold">Email</label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                placeholder="exemple@email.com"
                required
              />
            </div>
          </div>

          {/* Spécialité si Coach */}
          {formData.role === 'coach' && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-semibold">Spécialité</label>
              <input
                type="text"
                name="specialite"
                value={formData.specialite}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                placeholder="Yoga, Musculation, Cardio..."
              />
            </div>
          )}

          {/* Abonnement si Client */}
          {formData.role === 'client' && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-semibold">Abonnement</label>
              <select
                name="abonnement"
                value={formData.abonnement}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
              >
                <option value="mensuel">Mensuel</option>
                <option value="trimestriel">Trimestriel</option>
                <option value="annuel">Annuel</option>
                <option value="premium">Premium</option>
              </select>
            </div>
          )}

          {/* Mot de passe */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-semibold">Mot de passe</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                placeholder="••••••••"
                required
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Confirmer mot de passe */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-semibold">Confirmer mot de passe</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                placeholder="••••••••"
                required
              />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? 'Inscription...' : "S'inscrire"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Déjà un compte ?{' '}
            <Link to="/login" className="text-blue-600 font-semibold hover:underline">
              Connectez-vous
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
