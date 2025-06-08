import React, { useRef } from "react";
import { Download } from "lucide-react";
import "../styles/CVDownload.css";

function Card3D({ children, className = "" }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    const rotateX = (y / height) * 14;
    const rotateY = (x / width) * -14;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
  };

  const resetTransform = () => {
    cardRef.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      ref={cardRef}
      className={`cv-card card-3d ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTransform}
    >
      {children}
    </div>
  );
}

function CVDownload() {
  return (
    <section id="cv-download" className="cv-section">
      <Card3D>
        <h2>Mon CV</h2>
        <p>Retrouvez mon parcours, mes expériences et mes compétences dans un seul document.</p>
        <a href="/CV_NASSIM_AMROUCHE.pdf" download className="download-btn">
          <Download className="icon" />
          Télécharger le CV
        </a>
      </Card3D>
    </section>
  );
}

export default CVDownload;
