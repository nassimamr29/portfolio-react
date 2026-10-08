import React from 'react';
import { Code2, GitBranch, Server, ShieldCheck } from 'lucide-react';
import { skills } from '../data';

const icons = { server: Server, git: GitBranch, code: Code2, shield: ShieldCheck };

export default function Skills() {
  return (
    <section className="section skills-section" id="skills" aria-labelledby="skills-title">
      <div className="layout">
        <div className="section-head">
          <div><div className="section-eyebrow"><span>02</span> / STACK TECHNIQUE</div><h2 className="section-title" id="skills-title">Des outils au service<br />des <span>systèmes.</span></h2></div>
          <p>Un socle construit en formation et à travers des projets personnels. Les notions en cours d’apprentissage sont indiquées explicitement.</p>
        </div>
        <div className="skills-grid">
          {skills.map(skill => {
            const Icon = icons[skill.icon];
            return (
              <article className="skill-card" key={skill.number}>
                <div className="skill-card-top"><span className="skill-icon"><Icon size={24} strokeWidth={1.6}/></span><span className="skill-number">/ {skill.number}</span></div>
                <h3>{skill.title}</h3><p>{skill.description}</p>
                <div className="tags">{skill.tools.map(tool => <span key={tool}>{tool}</span>)}</div>
              </article>
            );
          })}
        </div>
        <div className="skill-footnote"><span className="asterisk">*</span> Technologies pratiquées à des niveaux différents selon les projets et la formation.</div>
      </div>
    </section>
  );
}
