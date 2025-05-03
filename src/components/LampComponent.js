import React, { useState, useEffect, useRef } from "react";
import "../styles/LampComponent.css";

const LampComponent = () => {
  const [isLightOn, setIsLightOn] = useState(false);
  const ropeRef = useRef(null);

  const handlePull = () => {
    ropeRef.current.classList.add("pulling");
    setTimeout(() => {
      ropeRef.current.classList.remove("pulling");
      setIsLightOn(prev => !prev);
    }, 300);
  };

  useEffect(() => {
    document.body.classList.toggle("light-background", isLightOn);
    return () => document.body.classList.remove("light-background");
  }, [isLightOn]);

  return (
    <section id="projects" className="lamp-section">
      <h3 className="lamp-title">
        {isLightOn
          ? "💡 La lumière est allumée... Mais n'oublie pas de l’éteindre, c’est pas Versailles ici !"
          : "🔴 Il fait noir ici... Appuie sur le bouton rouge pour tirer le fil et allumer la lampe !"}
      </h3>

      <div className={`lamp-container ${isLightOn ? "light-mode" : ""}`}>
        <div className={`lamp ${isLightOn ? "on" : "off"}`}>
          <div className="bulb"></div>
          <div className="glow"></div>
        </div>

        <div className="rope" onClick={handlePull} ref={ropeRef}>
          <div className="cord"></div>
          <div className="knot"></div>
        </div>
      </div>
    </section>
  );
};

export default LampComponent;
