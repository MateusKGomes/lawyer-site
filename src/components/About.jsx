import React from "react";
import { FaGraduationCap, FaBalanceScale } from "react-icons/fa";
import lawyerPhoto from "../assets/lawyer.png";

const About = () => {
  const qualifications = [
    {
      icon: <FaGraduationCap />,
      text: "Formado em prática de Tribunal do Júri pelo Centro Europeu.",
    },
    {
      icon: <FaBalanceScale />,
      text: "Especialista em Direito Administrativo",
    },
  ];

  return (
    <section className="about-section" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-content">
          <img
            src={lawyerPhoto}
            alt="Jean Carlos de Oliveira"
            className="profile-photo"
            loading="lazy"
          />

          <div className="text-balance">
            <p className="text-lg">
              Jean Carlos de Oliveira (OAB/PR 99/394) é advogado, graduado em
              Direito pela Universidade Federal do Paraná.
            </p>

            <div className="practice-grid">
              {qualifications.map((item, index) => (
                <div key={index} className="practice-card">
                  <span className="icon">{item.icon}</span>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            <a
              href="https://lattes.cnpq.br/9170213078805571"
              className="cta-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Currículo Lattes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
