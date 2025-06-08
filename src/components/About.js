import React, { useRef } from "react";
import "../styles/About.css";

const About = () => {
  // Ajout du ref pour la perspective 3D
  const cardRef = useRef(null);

  // Effet 3D à la souris
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    const rotateX = (y / height) * 16; // Plus le nombre est grand, plus ça tourne
    const rotateY = (x / width) * -16;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const resetTransform = () => {
    cardRef.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section
      className="about-3d card-3d"
      id="about"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTransform}
    >
      <div className="about-text">
        <h1>
          Welcome<span className="dot">.</span>
        </h1>
        <p>
          Étudiant en informatique passionné par la Data, l’IA, les systèmes et les technologies cloud. J’aime transformer des données en solutions concrètes. À l’aise avec les environnements Linux, j’ai également des bases solides en administration systèmes et réseaux.
          <br />
          <br />
          Curieux, rigoureux et proactif, j'ai développé aussi des projets avec (Python, Java, C, JavaScript, HTML, CSS) et je maîtrise les outils de versioning (GitHub, GitLab). J’attache une grande importance au travail en équipe, à l’analyse et à l’adaptabilité face aux défis techniques.
        </p>
      </div>
      <div className="about-image">
        <img
          src="/Capture d’écran du 2025-05-03 18-08-10.png"
          alt="Coding illustration"
        />
      </div>
    </section>
  );
};

export default About;
