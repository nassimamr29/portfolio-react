import React, { useState } from "react";
import "../styles/Projects.css";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: "MegaFlix ",
      description: "Bienvenue sur Megaflix, votre plateforme de streaming innovante développée en Python et SQL !",
      stack: ["Python (PyQt5)", "SQL(PostgrSql)"],
      link: "https://github.com/nassimamr29/Projects/tree/main/MegaFlix",
      images: ["/megaflix_logo.png", "/Capture d’écran du 2025-05-01 18-03-31.png", "/Capture d’écran du 2025-05-01 18-02-45.png","/Capture d’écran du 2025-05-01 18-03-21.png"]
    },
    {
      title: "2048",
      description: "2048 est un jeu de réflexion captivant réalisé en HTML, CSS et JavaScript. Glissez les tuiles avec les flèches du clavier pour fusionner les nombres identiques et atteindre 2048 ! Suivez votre score en temps réel 🚀🎮",
      stack: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/ton-projet2",
      images: ["/Capture d’écran du 2025-05-01 18-31-38.png", "/Capture d’écran du 2025-05-01 18-32-06.png" ,"Capture d’écran du 2025-05-01 18-31-28.png" ]
    },
    {
      title: "ChatBot",
      description: "Ce mini chatbot développé en Python permet d'interagir avec un utilisateur via une interface simple, il peut analyser les entrées utilisateur, répondre automatiquement et s'améliorer avec l'apprentissage. Idéal pour une première approche de l'IA et du traitement du langage naturel ! 🤖🚀",
      stack: ["Python", "Flask", "Sql"],
      link: "https://github.com/nassimamr29/Projects/tree/main/ChatBot",
      images: ["Capture d’écran du 2025-05-01 18-54-40.png", "/Capture d’écran du 2025-05-01 18-53-59.png", "/Capture d’écran du 2025-05-01 18-54-09.png" ]
    },
    {
    title: "Autres projets ...",
    description: "Sur mon GitHub !",
    stack: ["Python", "C", "Sql","java ", "Html CSS JavaScript"],
    link: "https://github.com/nassimamr29/Projects",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" ]
  }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % selectedProject.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length
    );
  };

  return (
    <section id="projects">
      <h2>Mes Projets</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => {
              setSelectedProject(project);
              setCurrentImageIndex(0);
            }}
          >
            <img src={project.images[0]} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>×</button>
            <div className="image-container">
              <button className="prev-btn" onClick={prevImage}>⬅️</button>
              <img src={selectedProject.images[currentImageIndex]} alt={selectedProject.title} />
              <button className="next-btn" onClick={nextImage}>➡️</button>
            </div>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <p><strong>Technologies:</strong> {selectedProject.stack.join(", ")}</p>
            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">🔗 Voir sur GitHub</a>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
