import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact">
      <h2>Contactez-moi</h2>

      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope />
          <div className="contact-details">
            <h3>Email</h3>
            <a href="mailto:amrouche.nassim@icloud.com">amrouche.nassim@icloud.com</a>
          </div>
        </div>

        <div className="contact-item">
          <FaGithub />
          <div className="contact-details">
            <h3>GitHub</h3>
            <a href="https://github.com/nassimamr29/Projects" target="_blank" rel="noreferrer">
              Mon GitHub
            </a>
          </div>
        </div>

        <div className="contact-item">
          <FaLinkedin />
          <div className="contact-details">
            <h3>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/nassim-amrouche-23891b250" target="_blank" rel="noreferrer">
              Mon LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
