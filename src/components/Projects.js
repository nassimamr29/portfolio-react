import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink, Gitlab, X } from 'lucide-react';
import { projects, profile } from '../data';

function ProjectGraphic({ project }) {
  if (project.kind === 'infra') {
    return <div className="diagram diagram-infra" aria-label="Schéma illustratif : automatisation d'un environnement virtualisé" role="img">
      <div className="diagram-heading"><span className="diagram-dot" /> infrastructure / overview</div>
      <div className="infra-graph"><div className="infra-master"><span className="graph-icon">{`>_`}</span><strong>Ansible</strong><small>configuration</small></div><div className="graph-connector" aria-hidden="true"><i/><i/><i/></div><div className="infra-nodes"><span>VM / web</span><span>VM / db</span><span>VM / services</span></div></div>
      <span className="diagram-label">VAGRANT · VIRTUALBOX · LINUX</span>
    </div>;
  }
  if (project.kind === 'docker') {
    return <div className="diagram diagram-docker" aria-label="Schéma illustratif : API et base de données dans Docker Compose" role="img">
      <div className="diagram-heading"><span className="diagram-dot" /> docker-compose.yml</div>
      <div className="docker-graph"><div className="docker-node"><span className="docker-node-icon">{`{ }`}</span><b>api</b><small>service</small></div><div className="docker-line" aria-hidden="true"><span>↔</span></div><div className="docker-node"><span className="docker-node-icon">▤</span><b>database</b><small>service</small></div></div>
      <span className="diagram-label">SERVICES · RÉSEAU · CONTENEURS</span>
    </div>;
  }
  return <div className="project-image"><img src={project.images[0]} alt={`Aperçu du projet ${project.title}`} loading="lazy" /></div>;
}

function ProjectDialog({ project, onClose }) {
  const [index, setIndex] = useState(0);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'Tab') {
        const focusable = Array.from(dialogRef.current?.querySelectorAll('a[href], button:not([disabled])') || []);
        if (!focusable.length) return;
        const first = focusable[0]; const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  return <div className="dialog-backdrop" onMouseDown={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="project-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title" ref={dialogRef}>
      <div className="dialog-toolbar"><span>PROJET / {project.number}</span><button ref={closeButtonRef} type="button" className="icon-button" onClick={onClose} aria-label="Fermer les détails du projet"><X size={20}/></button></div>
      <div className="dialog-content">
        <div className="dialog-preview">
          {project.images.length ? <>
            <img src={project.images[index]} alt={`Capture ${index + 1} sur ${project.images.length} du projet ${project.title}`}/>
            {project.images.length > 1 && <div className="gallery-controls"><button type="button" aria-label="Image précédente" onClick={() => setIndex((index + project.images.length - 1) % project.images.length)}><ChevronLeft size={19}/></button><span>{index + 1} / {project.images.length}</span><button type="button" aria-label="Image suivante" onClick={() => setIndex((index + 1) % project.images.length)}><ChevronRight size={19}/></button></div>}
          </> : <ProjectGraphic project={project} />}
        </div>
        <div className="eyebrow-mini">{project.category}</div>
        <h2 id="dialog-title">{project.title}</h2>
        <p className="dialog-lead">{project.context}</p>
        <h3>Ce que j’ai mis en pratique</h3>
        <ul>{project.highlights.map(item => <li key={item}>{item}</li>)}</ul>
        <h3>Technologies utilisées</h3>
        <div className="tags dialog-tags">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
        <div className="dialog-actions">
          {project.link ? <a className="button button-primary" href={project.link} target="_blank" rel="noopener noreferrer">Voir le code source <ExternalLink size={17}/></a> : <span className="no-repo">Détails techniques disponibles sur demande</span>}
        </div>
      </div>
    </div>
  </div>;
}

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const closeDialog = React.useCallback(() => setSelected(null), []);
  return <section className="section projects-section" id="projects" aria-labelledby="projects-title">
    <div className="layout">
      <div className="section-head projects-head"><div><div className="section-eyebrow"><span>03</span> / SÉLECTION DE PROJETS</div><h2 className="section-title" id="projects-title">Apprendre en <span>construisant.</span></h2></div><p>De l’automatisation d’infrastructures au développement d’applications : quelques réalisations qui reflètent mon parcours.</p></div>
      <div className="projects-grid">
        {projects.map(project => <article className={`project-card${project.featured ? ' project-card-featured' : ''}`} key={project.id}>
          <button className="project-open" type="button" onClick={() => setSelected(project)} aria-label={`Voir les détails du projet ${project.title}`}>
            <div className="project-art"><ProjectGraphic project={project}/><span className="project-art-arrow"><ArrowUpRight size={18}/></span></div>
            <div className="project-details"><div className="project-category">{project.category}</div><div className="project-title-line"><h3>{project.title}</h3><span className="project-number">{project.number} / {String(projects.length).padStart(2, '0')}</span></div><p>{project.short}</p><div className="project-bottom"><div className="project-tags">{project.stack.slice(0, 3).map(item => <span key={item}>{item}</span>)}</div><span className="project-read">Détails <ArrowRight size={15}/></span></div></div>
          </button>
        </article>)}
      </div>
      <div className="more-projects"><span>MES AUTRES PROJETS SONT SUR GITLAB</span><a href={profile.gitlab} target="_blank" rel="noopener noreferrer" aria-label="Voir mes autres projets sur GitLab" title="Voir mes autres projets sur GitLab"><Gitlab size={20}/><ArrowUpRight size={15}/></a></div>
    </div>
    {selected && <ProjectDialog project={selected} onClose={closeDialog}/>}
  </section>;
}
