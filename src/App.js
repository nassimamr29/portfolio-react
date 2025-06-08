import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CVDownload from "./components/CVDownload";
import "./App.css";

function App() {
  const [isNight, setIsNight] = useState(true);
  const [showJoke, setShowJoke] = useState(false);

  // Ajoute/enlève la classe "light-background" au <body>
  useEffect(() => {
    document.body.classList.toggle("light-background", !isNight);
  }, [isNight]);

  const toggleNight = () => {
    setIsNight((prev) => {
      if (prev) {
        setShowJoke(true);
        setTimeout(() => setShowJoke(false), 2500);
      }
      return !prev;
    });
  };

  return (
    <div className={`App ${isNight ? "night-mode" : "light-mode"}`}>
      {/* Bouton interrupteur */}
      <button
        className="toggle-light-btn"
        onClick={toggleNight}
        title={isNight ? "Allumer la lumière" : "Éteindre la lumière"}
        aria-label={isNight ? "Allumer la lumière" : "Éteindre la lumière"}
      >
        {isNight ? "💡" : "🌙"}
      </button>

      {/* Pop-up blague Versailles */}
      {showJoke && (
        <div className="joke-pop">
          <span>Éteins la lumière, c’est pas Versailles ici !</span>
        </div>
      )}

      <Header />
      <About />
      <Projects />
      <CVDownload />
      <Contact />
    </div>
  );
}

export default App;
