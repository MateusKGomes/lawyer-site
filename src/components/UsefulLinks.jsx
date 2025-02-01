import React from 'react';

const UsefulLinks = () => {
  const links = [
    {
      name: 'Tribunal de Justiça do Paraná (TJPR)',
      url: 'https://www.tjpr.jus.br/'
    },
    {
      name: 'Supremo Tribunal Federal (STF)',
      url: 'https://portal.stf.jus.br/'
    },
    {
      name: 'Superior Tribunal de Justiça (STJ)',
      url: 'https://www.stj.jus.br/sites/portalp/Inicio'
    },
    {
      name: 'OAB Paraná',
      url: 'https://www.oabpr.org.br/'
    },
    {
      name: 'JusBrasil',
      url: 'https://www.jusbrasil.com.br/'
    },
    {
      name: 'Migalhas',
      url: 'https://www.migalhas.com.br/'
    },
    {
      name: 'Ministério dos Direitos Humanos - LGBT',
      url: 'https://www.gov.br/mdh/pt-br/navegue-por-temas/lgbt'
    }
  ];

  return (
    <section className="useful-links">
      <h2>Links Úteis</h2>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="link-item"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UsefulLinks;