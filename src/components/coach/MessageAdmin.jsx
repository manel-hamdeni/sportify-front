import React, { useState } from 'react';
import { FaPaperPlane, FaCheckCircle, FaEnvelope, FaUserTie, FaClock } from 'react-icons/fa';

const MessageAdmin = () => {
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [messagesList, setMessagesList] = useState([
    {
      id: 1,
      sujet: 'Demande de congé',
      message: 'Je souhaite prendre un congé le 25 mai. Est-ce possible ?',
      reponse: 'Votre demande a été approuvée. Merci de prévenir vos clients.',
      date: '15 Mai 2024',
      statut: 'répondu'
    },
    {
      id: 2,
      sujet: 'Matériel endommagé',
      message: 'La machine de musculation dans la salle B est en panne.',
      reponse: 'Merci pour l\'information. Une équipe technique interviendra demain.',
      date: '10 Mai 2024',
      statut: 'répondu'
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && subject.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setMessagesList([
          {
            id: messagesList.length + 1,
            sujet: subject,
            message: message,
            reponse: 'Votre message a été reçu. L\'administrateur vous répondra dans les plus brefs délais.',
            date: new Date().toLocaleDateString('fr-FR'),
            statut: 'en attente'
          },
          ...messagesList
        ]);
        setMessage('');
        setSubject('');
        setSubmitted(false);
      }, 1500);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Contacter l'Administrateur</h2>

      {/* Formulaire */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
          <FaUserTie className="text-green-600" />
          <span>Envoyer un message à l'admin</span>
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium">Sujet</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Ex: Demande de congé, Matériel, Planning..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Écrivez votre message ici..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={submitted}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition flex items-center space-x-2 disabled:opacity-50"
          >
            {submitted ? (
              <>
                <FaCheckCircle />
                <span>Message envoyé !</span>
              </>
            ) : (
              <>
                <FaPaperPlane />
                <span>Envoyer le message</span>
              </>
            )}
          </button>
        </form>
      </div>

      {/* Historique des messages */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
          <FaEnvelope className="text-green-600" />
          <span>Mes messages ({messagesList.length})</span>
        </h3>
        
        {messagesList.length > 0 ? (
          <div className="space-y-4">
            {messagesList.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-semibold text-gray-800">📌 {item.sujet}</p>
                    <p className="text-sm text-gray-600 mt-1">{item.message}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.statut === 'répondu' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {item.statut === 'répondu' ? '✅ Répondu' : '⏳ En attente'}
                    </span>
                    <span className="text-xs text-gray-400 mt-1 flex items-center space-x-1">
                      <FaClock />
                      <span>{item.date}</span>
                    </span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 mt-2">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-green-600">Réponse admin :</span> {item.reponse}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <FaEnvelope className="text-6xl text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Aucun message envoyé pour le moment</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageAdmin;