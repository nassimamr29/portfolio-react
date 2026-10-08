import React from 'react';
import { ArrowUpRight, BookOpen, BriefcaseBusiness, GraduationCap } from 'lucide-react';

export default function Journey() {
  return <section className="section journey-section" id="journey" aria-labelledby="journey-title">
    <div className="layout journey-layout">
      <div className="journey-left"><div className="section-eyebrow"><span>04</span> / PARCOURS</div><h2 id="journey-title" className="section-title">Un parcours orienté <span>technique.</span></h2><p>Une formation en informatique, complétée par des projets concrets en développement, systèmes et automatisation.</p><a href="#contact" className="text-link">Échanger sur mon parcours <ArrowUpRight size={16}/></a></div>
      <div className="timeline">
        <article className="timeline-item"><span className="timeline-icon"><GraduationCap size={20}/></span><div className="timeline-content"><span className="timeline-date">2025 — 2027</span><h3>Master Informatique · P2S</h3><p className="timeline-place">Université Sorbonne Paris Nord</p><p>Programmation, sûreté et sécurité : systèmes distribués, administration système, réseaux, cybersécurité et vérification des systèmes.</p></div></article>
        <article className="timeline-item"><span className="timeline-icon"><BookOpen size={20}/></span><div className="timeline-content"><span className="timeline-date">FORMATION ANTÉRIEURE</span><h3>Licence Informatique</h3><p className="timeline-place">Université Sorbonne Paris Nord</p><p>Fondamentaux en programmation, algorithmique, bases de données et systèmes informatiques.</p></div></article>
        <article className="timeline-item"><span className="timeline-icon"><BriefcaseBusiness size={20}/></span><div className="timeline-content"><span className="timeline-date">EXPÉRIENCE</span><h3>Stage · Akswell Consulting</h3><p className="timeline-place">Expérience en entreprise</p><p>Découverte du fonctionnement d’une organisation, analyse des besoins et échanges entre équipes.</p></div></article>
      </div>
    </div>
  </section>;
}
