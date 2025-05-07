import React from "react";
import { Download } from "lucide-react"; // Icône stylée
import "../styles/CVDownload.css";
function CVDownload() {
  return (
    <section id="cv-download" className="cv-section">
      <div className="cv-card">
        <h2>Mon CV</h2>
        <p>Retrouvez mon parcours, mes expériences et mes compétences dans un seul document.</p>
        <a href="/cv-3.pdf" download className="download-btn">

          <Download className="icon" />
          Télécharger le CV
        </a>
      </div>
    </section>
  );
}

export default CVDownload;
