import React from 'react';
import { ArrowUpRight, GraduationCap, MapPin, CalendarDays } from 'lucide-react';

export default function About() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="layout about-layout">
        <div>
          <div className="section-eyebrow"><span>01</span> / À PROPOS</div>
          <h2 className="section-title" id="about-title"> Développement, systèmes et infrastructure : <span>trois domaines</span>  au cœur de mon parcours. </h2>
        </div>
        <div className="about-right">
          <p>Mon parcours en informatique m’amène à explorer le développement logiciel, les systèmes et les réseaux. En Master P2S, j’approfondis notamment les enjeux de sûreté, de sécurité et de systèmes distribués.</p>
          <p>En parallèle, je développe mes compétences pratiques sur Linux, la virtualisation et l’automatisation avec des projets autour de <strong>Docker, Vagrant et Ansible</strong>. Mon objectif : apprendre à construire des environnements compréhensibles, reproductibles et fiables.</p>
          <div className="about-facts">
            <div><GraduationCap size={19}/><span><small>FORMATION</small>Master Informatique · P2S</span></div>
            <div><MapPin size={19}/><span><small>LOCALISATION</small>Île-de-France, France</span></div>
            <div><CalendarDays size={19}/><span><small>DISPONIBILITÉ</small>Dès mars 2027 · 5 à 6 mois</span></div>
          </div>
          <a className="text-link" href="#journey">Découvrir mon parcours <ArrowUpRight size={16}/></a>
        </div>
      </div>
    </section>
  );
}
