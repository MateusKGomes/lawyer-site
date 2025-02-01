// components/About.jsx
import React from 'react';

const About = () => {
  const qualifications = [
    'Especialista em Direito Administrativo',
    'Mestre em Governança Pública',
    'Atuou no Ministério Público do Paraná',
    'Formado em prática de Tribunal do Júri',
    'Diretor Disciplinar da UFPR (2023-2025)'
  ];

  return (
    <section id="about" className="py-16 bg-white" aria-labelledby="about-heading">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 id="about-heading" className="section-heading">
          Sobre o Profissional
        </h2>
        
        <div className="grid md:grid-cols-[250px_1fr] gap-8 items-start">
          <img
            src="/lawyer.jpg"
            alt="Jean Carlos de Oliveira"
            className="w-60 h-60 rounded-full object-cover shadow-lg"
            loading="lazy"
          />

          <div className="space-y-4 text-gray-600">
            <p className="text-lg leading-relaxed">
              <span className="font-semibold text-primary-blue">Jean Carlos de Oliveira</span> 
              (OAB/PR 99/394) é advogado, graduado em Direito pela Universidade Federal do Paraná.
            </p>

            
            
            <ul className="grid gap-3 sm:grid-cols-2">
              {qualifications.map((item, index) => (
                <li 
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                >
                  <svg 
                    className="flex-shrink-0 w-5 h-5 text-primary-brown mt-1" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;