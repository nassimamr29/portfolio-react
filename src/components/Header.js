import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Nassim AMROUCHE</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#about">À propos</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
