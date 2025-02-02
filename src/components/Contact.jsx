import React from 'react';
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';

const Contact = () => (
  <section className="contact-section" aria-labelledby="contact-heading">
    <div className="container">
      <h2 id="contact-heading" className="section-heading">
        Contatos
      </h2>
      
      <div className="contact-grid">
        <div className="contact-card">
          <div className="flex items-center gap-4">
            <FaWhatsapp className="text-2xl" />
            <div>
              <h3 className="font-bold">WhatsApp</h3>
              <p>(41) 9 9241-7174</p>
            </div>
          </div>
        </div>

        <div className="contact-card">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-2xl" />
            <div>
              <h3 className="font-bold">E-mail</h3>
              <p>jcoliveira.advocacia@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="contact-card">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-2xl" />
            <div>
              <h3 className="font-bold">Plantão 24h</h3>
              <p>(41) 99241-7174</p>
            </div>
          </div>
        </div>

        <div className="contact-card">
          <div className="flex items-center gap-4">
            <FaClock className="text-2xl" />
            <div>
              <h3 className="font-bold">Atendimento</h3>
              <p>Presencial com agendamento</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;