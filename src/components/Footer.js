import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return <footer className="footer"><div className="layout footer-inner"><a className="footer-brand" href="#top">N<span>.</span></a><p>© {new Date().getFullYear()} Nassim AMROUCHE. Conçu avec React.</p><a href="#top">RETOUR EN HAUT <ArrowUpRight size={16}/></a></div></footer>;
}
