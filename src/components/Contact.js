import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, Copy, Gitlab, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent('Échange au sujet d’un stage de fin d’études — mars 2027')}`;
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch (_error) {
      window.location.href = mailto;
    }
  };
  return <section className="section contact-section" id="contact" aria-labelledby="contact-title">
    <div className="layout">
      <div className="contact-panel">
        <div className="contact-grid-bg" aria-hidden="true" />
        <div className="contact-content"><div className="section-eyebrow"><span>05</span> / CONTACT</div><div className="contact-availability"><i/> DISPONIBLE POUR UN STAGE DÈS MARS 2027</div><h2 id="contact-title">Construisons la <span>suite.</span></h2><p>Je recherche un stage de fin d’études de 5 à 6 mois, idéalement en Île-de-France, dans une équipe travaillant sur le DevOps, le Cloud, l’infrastructure, les systèmes ou la sécurité.</p>
          <div className="contact-buttons"><a className="button button-primary button-light" href={mailto}>Écrivez-moi <Mail size={18}/></a>{profile.cvUrl ? <a className="button button-contact-alt" href={profile.cvUrl} download>Télécharger mon CV <ArrowRight size={17}/></a> : <a className="button button-contact-alt" href={`${mailto}&body=${encodeURIComponent('Bonjour, pourriez-vous me transmettre votre CV actualisé ?')}`}>Demander mon CV <ArrowRight size={17}/></a>}</div>
        </div>
        <div className="contact-links">
          <div className="contact-quick-heading">RESTONS EN CONTACT <span>↘</span></div>
          <button type="button" className="contact-link" onClick={copyEmail}><span><Mail size={19}/> {profile.email}</span>{copied ? <Check size={18} aria-label="Copié"/> : <Copy size={18} aria-label="Copier"/>}</button>
          <a className="contact-link" href={profile.gitlab} target="_blank" rel="noopener noreferrer" aria-label="Ouvrir mon profil GitLab" title="GitLab"><span><Gitlab size={19}/> GitLab</span><ArrowUpRight size={19}/></a>
          <a className="contact-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Ouvrir mon profil LinkedIn" title="LinkedIn"><span><Linkedin size={19}/> LinkedIn</span><ArrowUpRight size={19}/></a>
          <span className="copy-feedback" role="status" aria-live="polite">{copied ? 'Adresse email copiée.' : '\u00a0'}</span>
        </div>
      </div>
    </div>
  </section>;
}
