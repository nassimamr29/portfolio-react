import React, { useRef } from "react";
import "../styles/Header.css";

function Header() {
  const headerRef = useRef(null);

  // Effet 3D à la souris sur le header
  const handleMouseMove = (e) => {
    const card = headerRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    const rotateX = (y / height) * 12;
    const rotateY = (x / width) * -12;
    card.style.transform = `perspective(1300px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const resetTransform = () => {
    headerRef.current.style.transform =
      "perspective(1300px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <header
      className="header-3d"
      ref={headerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTransform}
    >
      <div className="logo-3d">Nassim&nbsp;AMROUCHE</div>
      <nav>
        <ul className="nav-links-3d">
          <li><a href="#about">À propos</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#cv-download">Mon CV</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
