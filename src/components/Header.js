import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  { href: '#about', label: 'À propos' },
  { href: '#skills', label: 'Compétences' },
  { href: '#projects', label: 'Projets' },
  { href: '#journey', label: 'Parcours' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEsc = (event) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', closeOnEsc);
    return () => window.removeEventListener('keydown', closeOnEsc);
  }, []);

  return (
    <header className="site-header">
      <div className="header-inner layout">
        <a href="#top" className="brand" aria-label="Nassim Amrouche, retour en haut" onClick={() => setOpen(false)}>
          <span className="brand-mark">N<span>.</span></span>
          <span className="brand-name">NASSIM<span> / </span>AMROUCHE</span>
        </a>
        <nav id="main-navigation" className={`navigation${open ? ' navigation--open' : ''}`} aria-label="Navigation principale">
          {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
          <a className="nav-mobile-contact" href="#contact" onClick={() => setOpen(false)}>Contact <ArrowUpRight size={16} /></a>
        </nav>
        <a className="header-contact" href="#contact">Me contacter <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" type="button" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} aria-controls="main-navigation" aria-expanded={open} onClick={() => setOpen(prev => !prev)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
