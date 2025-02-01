const PracticeAreas = () => {
    const areas = [
      'Direito Administrativo e Processo Administrativo Disciplinar (PAD)',
      'Contratos',
      'Empresarial',
      'Família',
      'Sucessões',
      'Criminal',
      'Júri',
      'Direitos das pessoas LGBTQIA+'
    ];
  
    return (
      <section className="practice-areas">
        <h2>Áreas de Atuação</h2>
        <ul>
          {areas.map((area, index) => (
            <li key={index}>{area}</li>
          ))}
        </ul>
      </section>
    );
  };

  export default PracticeAreas;