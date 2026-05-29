import React, { useState } from 'react';
import { FaPaperPlane, FaCheckCircle, FaQuestionCircle } from 'react-icons/fa';

const PoserQuestion = () => {
  const [question, setQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [questionsList, setQuestionsList] = useState([
    {
      id: 1,
      question: "Comment puis-je annuler une séance ?",
      reponse: "Vous pouvez annuler votre séance depuis votre planning au moins 24h à l'avance.",
      date: "15 Mai 2024"
    },
    {
      id: 2,
      question: "Les coachs sont-ils disponibles le week-end ?",
      reponse: "Oui, certains coachs sont disponibles le samedi de 9h à 13h.",
      date: "10 Mai 2024"
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setQuestionsList([
          {
            id: questionsList.length + 1,
            question: question,
            reponse: "Votre question a été envoyée. Un coach vous répondra dans les 24h.",
            date: new Date().toLocaleDateString('fr-FR')
          },
          ...questionsList
        ]);
        setQuestion('');
        setSubmitted(false);
      }, 1500);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Poser une Question</h2>

      {/* Formulaire */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
          <FaQuestionCircle className="text-blue-600" />
          <span>Vous avez une question ?</span>
        </h3>
        <form onSubmit={handleSubmit}>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Écrivez votre question ici..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            disabled={submitted}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition flex items-center space-x-2 disabled:opacity-50"
          >
            {submitted ? (
              <>
                <FaCheckCircle />
                <span>Envoyé !</span>
              </>
            ) : (
              <>
                <FaPaperPlane />
                <span>Envoyer la question</span>
              </>
            )}
          </button>
        </form>
      </div>

      {/* Historique des questions */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Mes questions ({questionsList.length})
        </h3>
        
        {questionsList.length > 0 ? (
          <div className="space-y-4">
            {questionsList.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
                <div className="flex justify-between items-start mb-3">
                  <p className="font-semibold text-gray-800">📝 {item.question}</p>
                  <span className="text-xs text-gray-400">{item.date}</span>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 mt-2">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-blue-600">Réponse :</span> {item.reponse}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <FaQuestionCircle className="text-6xl text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Aucune question posée pour le moment</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PoserQuestion;