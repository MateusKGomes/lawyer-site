import React from 'react';
import posGradacao from '../assets/course.jpeg';

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
            src={posGradacao}
            alt="Certificado de Pós-Graduação"
            className="course-image"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  </section>
);

export default PostgraduateCourse;