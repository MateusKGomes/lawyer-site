import React from 'react';
import lawyerPhoto from '../assets/lawyer.png';


const About = () => (
  <section className="about">
    <div className="about-content">

    <img src={lawyerPhoto} alt="Jean Carlos de Oliveira" className="profile-photo" />
      
      <h2>Sobre o Profissional</h2>

      <p>Jean Carlos de Oliveira (OAB/PR 99/394) é advogado, graduado em Direito pela Universidade Federal do Paraná.</p>
      <p>Jean Carlos de Oliveira (OAB/PR 99/394) é advogado, graduado em Direito pela Universidade Federal do Paraná.
 
 Especialista em Direito Administrativo e Mestre em Governança Pública, Planejamento e Desenvolvimento pela Universidade Tecnológica Federal do Paraná
  
 Atuou anteriormente junto ao Ministério Público do Paraná, na 2ª Promotoria de Justiça Criminal, eminentemente em casos de tráfico e corrupção.
  
 Formado em prática de Tribunal do Júri pelo Centro Europeu.
  
 Foi secretário, chefe da Seção de Comissões Disciplinares e Diretor Disciplinar Substituto da Diretoria Disciplinar da Universidade Federal do Paraná. Atuou como Chefe de Execução Orçamentária do Gabinete do Reitor da Universidade Federal do Paraná. Instrutor de Curso de Procedimentos Administrativos Disciplinares na UFPR.
  
 Diretor Disciplinar da Universidade Federal do Paraná de 2023 a 2025.</p>
      <a href="https://lattes.cnpq.br/9170213078805571" className="lattes-link">Currículo Lattes</a>
    </div>
  </section>
);

export default About;