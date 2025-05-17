import React, { useState, useEffect } from 'react';
import "../styles/Recommendation.css";

function Recommendation() {
  const [recommendations, setRecommendations] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    profession: '', // Ajouté
    email: '',
    message: '',
    file: null
  });

  useEffect(() => {
    const storedRecs = JSON.parse(localStorage.getItem('recommendations')) || [];
    setRecommendations(storedRecs);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reader = new FileReader();

    reader.onload = () => {
      const newRec = {
        name: formData.name,
        profession: formData.profession, // Ajouté
        email: formData.email,
        message: formData.message,
        fileName: formData.file?.name || '',
        fileData: reader.result,
      };

      const updatedRecs = [newRec, ...recommendations];
      setRecommendations(updatedRecs);
      localStorage.setItem('recommendations', JSON.stringify(updatedRecs));

      setFormData({
        name: '',
        profession: '', // Réinitialisation
        email: '',
        message: '',
        file: null
      });
    };

    if (formData.file) {
      reader.readAsDataURL(formData.file);
    } else {
      reader.onload();
    }
  };

  return (
    <div id="recommendation-section">
      <h2>Laissez une recommandation</h2>

      <form onSubmit={handleSubmit} className="recommendation-form space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="profession"
          placeholder="Votre profession"
          value={formData.profession}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <textarea
          name="message"
          placeholder="Votre message de recommandation"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="file"
          name="file"
          accept="application/pdf"
          onChange={handleChange}
          className="w-full"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Envoyer la recommandation
        </button>
      </form>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-center">Recommandations reçues</h2>
<div className="recommendation-list">
  {recommendations.map((rec, index) => (
    <div key={index} className="recommendation-card">
      <p><strong>Nom :</strong> {rec.name}</p>
      <p><strong>Profession :</strong> {rec.profession}</p>
      <p><strong>Email :</strong> {rec.email}</p>
      <p><strong>Date :</strong> {rec.date || "Non précisée"}</p>
      <p className="mt-2"><strong>Message :</strong><br />{rec.message}</p>
      {rec.fileData && (
        <a href={rec.fileData} download={rec.fileName}>Télécharger la lettre PDF</a>
      )}
    </div>
  ))}
</div>

    </div>
  );
}

export default Recommendation;
