import React from 'react';
import { FaBalanceScale, FaHandshake, FaUsers, FaGavel, FaRainbow } from 'react-icons/fa';


const PracticeAreas = () => {
  const areas = [
    { icon: <FaBalanceScale />, title: 'Especialista em Direito Administrativo' },
    { icon: <FaHandshake />, title: 'Contratos' },
    { icon: <FaUsers />, title: 'Direito de Família' },
    { icon: <FaGavel />, title: 'Tribunal do Júri' },
    { icon: <FaRainbow />, title: 'Direitos LGBTQIA+'}
    // Adicione outras áreas
  ];

  return (
    <section className="practice-section" aria-labelledby="practice-heading">
      <div className="container">
        <h2 id="practice-heading" className="section-heading">
          Áreas de Atuação
        </h2>
        
        <div className="practice-grid">
          {areas.map((area, index) => (
            <div key={index} className="practice-card">
              <div className="flex items-center gap-4">
                <span className="text-primary-blue text-xl">{area.icon}</span>
                <h3 className="font-medium">{area.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
