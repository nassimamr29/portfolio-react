import React from 'react';
import { ArrowRight, ArrowUpRight, Gitlab, Terminal } from 'lucide-react';
import { profile } from '../data';

function TerminalCard() {
  return (
    <div className="terminal-wrap">
      <div className="terminal-halo" aria-hidden="true" />
      <div className="terminal" aria-label="Terminal de présentation de mon parcours">
        <div className="terminal-top">
          <div className="window-controls" aria-hidden="true"><i /><i /><i /></div>
          <span><Terminal size={13} /> nassim — bash</span>
          <span className="terminal-top-right">~/portfolio</span>
        </div>
        <div className="terminal-body">
          <p><span className="term-prompt">➜</span> <span className="term-path">~</span> whoami</p>
          <p className="term-output"><span className="term-soft">name:</span> Nassim AMROUCHE</p>
          <p className="term-output"><span className="term-soft">role:</span> Étudiant en Master 2</p>
          <p className="term-output"><span className="term-soft">track:</span> Informatique · P2S</p>
          <p className="term-gap"><span className="term-prompt">➜</span> <span className="term-path">~</span> cat objectif.txt</p>
          <p className="term-output"><span className="term-green">✓</span> Stage de fin d’études</p>
          <p className="term-output"><span className="term-green">✓</span> Mars 2027 · 5–6 mois</p>
          <p className="term-output"><span className="term-green">✓</span> Île-de-France</p>
          <p className="term-gap"><span className="term-prompt">➜</span> <span className="term-path">~</span> ls focus/</p>
          <p className="term-output term-tags"><span>linux/</span><span>devops/</span><span>cloud/</span><span>sécurité/</span></p>
          <p className="term-gap"><span className="term-prompt">➜</span> <span className="term-path">~</span> <span className="cursor" aria-hidden="true" /></p>
        </div>
        <div className="terminal-status"><span className="status-dot" /> Environnement de travail <span>●</span> disponible pour un stage</div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-glow" aria-hidden="true" />
      <div className="layout hero-grid">
        <div className="hero-content">
          <div className="availability"><span className="availability-dot" /> À LA RECHERCHE D’UN STAGE · MARS 2027</div>
          <p className="hero-intro">BONJOUR, JE SUIS NASSIM AMROUCHE <span className="hero-line" /></p>
<h1 id="hero-title">
  Du code à <em>l'infrastructure.</em>
</h1>          <p className="hero-lead">Étudiant en <strong>Master 2 Informatique — parcours P2S</strong> à l’Université Sorbonne Paris Nord. Je m’intéresse à l’administration Linux, au Cloud, au DevOps et à la sécurité des systèmes.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Découvrir mes projets <ArrowRight size={18} /></a>
            <a className="button button-outline" href="#contact">Me contacter <ArrowUpRight size={18} /></a>
          </div>
          <a className="hero-github" href={profile.gitlab} target="_blank" rel="noopener noreferrer" aria-label="Voir mon profil GitLab" title="GitLab"><Gitlab size={20} /><ArrowUpRight size={14} /></a>
        </div>
        <TerminalCard />
      </div>
      <div className="layout hero-bottom"><span>01 / INTRODUCTION</span><div aria-hidden="true" className="hero-rule" /><a href="#about">FAIRE DÉFILER <span>↓</span></a></div>
    </section>
  );
}
