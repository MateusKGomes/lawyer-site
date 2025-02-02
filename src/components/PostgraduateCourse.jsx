import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import posGraduacao from '../assets/course.jpeg'

const PostgraduateCourse = () => (
  <section className="course-section" aria-labelledby="course-heading">
    <div className="container">
      <div className="course-content">
        <div className="course-image-container">
          <img
            src={posGraduacao}
            alt="Certificado de Pós-Graduação"
            className="course-image"
            loading="lazy"
          />
        </div>

        <div className="course-info">

          <div className="course-details">

            <a
              href="https://excelenciaprev.com.br/posrpps"
              className="cta-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Certificação
              <FaGraduationCap className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PostgraduateCourse;