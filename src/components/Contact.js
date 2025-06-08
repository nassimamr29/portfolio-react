import React, { useRef } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Contact.css";

function Card3D({ children }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    const rotateX = (y / height) * 11;
    const rotateY = (x / width) * -11;
    card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const resetTransform = () => {
    cardRef.current.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      className="contact-item card-3d"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTransform}
    >
      {children}
    </div>
  );
}

function Contact() {
  return (
    <section id="contact">
      <h2>Contactez-moi</h2>
      <div className="contact-info">
        <Card3D>
          <FaEnvelope />
          <div className="contact-details">
            <h3>Email</h3>
            <a href="mailto:amrouche.nassim@icloud.com">amrouche.nassim@icloud.com</a>
          </div>
        </Card3D>
        <Card3D>
          <FaGithub />
          <div className="contact-details">
            <h3>GitHub</h3>
            <a
              href="https://github.com/nassimamr29/Projects"
              target="_blank"
              rel="noreferrer"
            >
              Mon GitHub
            </a>
          </div>
        </Card3D>
        <Card3D>
          <FaLinkedin />
          <div className="contact-details">
            <h3>LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/nassim-amrouche-23891b250"
              target="_blank"
              rel="noreferrer"
            >
              Mon LinkedIn
            </a>
          </div>
        </Card3D>
      </div>
    </section>
  );
}

export default Contact;
