import React from 'react';
import posGraduacao from '../assets/course.jpeg';
import PAD from '../assets/PAD.jpeg';



const PostgraduateCourse = () => (
  <section className="course-section" aria-labelledby="course-heading">
    <div className="container">
      <div className="course-content">
        <a
          href="https://excelenciaprev.com.br/posrpps"
          className="course-image-container"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver certificação do curso"
        >
          <img
            src={posGraduacao}
            alt="Certificado de Pós-Graduação"
            className="course-image"
            loading="lazy"
          />
        </a>
      </div>
      <div className="course-content">
        <a
          href="https://esa.oab.org.br/home/course/5165-curso-de-processo-administrativo-disciplinar/867"
          className="course-image-container-1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver certificação do curso"
        >
          <img
            src={PAD}
            alt="Processo administrativo Disciplinar"
            className="course-image"
            loading="lazy"
          />
        </a>
      </div>
      
    </div>
  </section>
);

export default PostgraduateCourse;