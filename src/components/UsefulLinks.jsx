import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const UsefulLinks = () => {
  const links = [
    {
      name: 'Tribunal de Justiça do PR',
      url: 'https://www.tjpr.jus.br/'
    },
    {
      name: 'Supremo Tribunal Federal',
      url: 'https://portal.stf.jus.br/'
    },
    {
      name: 'OAB Paraná',
      url: 'https://www.oabpr.org.br/'
    },
    {
      name: 'Ministério dos Direitos Humanos',
      url: 'https://www.gov.br/mdh/pt-br/navegue-por-temas/lgbt'
    },
    {
      name: 'Novidades no Direito',
      url: 'https://www.migalhas.com.br/'
    },
    { 
      name: 'Direitos LGBTQIAPN+',
      url: 'https://www.gov.br/mdh/pt-br/navegue-por-temas/lgbt'
    },
    {
      name: 'Superior Tribunal de Justiça',
      url: 'https://www.stj.jus.br/sites/portalp/Inicio'
    }
  ];

  return (
    <section className aria-labelledby="links-heading">
      <div className="container">
        <h2 id="links-heading" className="section-heading">
          Links Úteis
        </h2>
        
        <div className="practice-grid">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="practice-card hover:bg-primary-blue/10  transition-colors"
            >
              <div className="flex items-center justify-between">
                <span>{link.name}</span>
                <FaExternalLinkAlt className="text-primary-blue" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsefulLinks;