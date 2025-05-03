
import React from "react";
import "../styles/About.css";

const About = () => {

  
  return (
    <section className="about">
      <div className="about-text">
        <h1>Welcome<span className="dot">.</span></h1>
        <p>
      Étudiant en informatique passionné par la Data, l’IA, les systèmes et les technologies cloud. J’aime transformer des données en solutions concrètes. À l’aise avec les environnements Linux, j’ai également des bases solides en administration systèmes et réseaux.

Curieux, rigoureux et proactif, j'ai développé aussi des projets avec (Python , Java , C ,JavaScript, HTML, CSS, PHP) et je maîtrise les outils de versioning (GitHub, GitLab). J’attache une grande importance au travail en équipe, à l’analyse et à l’adaptabilité face aux défis techniques.
</p>
      </div>
      <div className="about-image">
        <img src="/Capture d’écran du 2025-05-03 18-08-10.png" alt="Coding illustration" />
      </div>
    </section>
  );
};

export default About;
