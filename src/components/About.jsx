import React from "react";
import { FaGraduationCap, FaBalanceScale } from "react-icons/fa";
import lawyerPhoto from "../assets/lawyer.png";

const About = () => {
  const qualifications = [
    { icon: <FaGraduationCap />, text: "Graduado em Direito - UFPR" },
    {
      icon: <FaBalanceScale />,
      text: "Especialista em Direito Administrativo",
    },
    // Adicione mais qualificações
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
              Jean Carlos de Oliveira (OAB/PR 99/394).
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
