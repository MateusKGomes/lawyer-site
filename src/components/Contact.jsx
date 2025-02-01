// components/Contact.jsx
import React from 'react';
import ContactItem from './ContactItem';

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

// Adicione no Contact.jsx antes do componente Contact
const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const Contact = () => (
  <section id="contact" className="py-16 bg-gray-50" aria-labelledby="contact-heading">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 id="contact-heading" className="section-heading">
        Contatos
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <ContactItem
            icon={<PhoneIcon />}
            label="WhatsApp"
            value="(41) 9 9241-7174"
            href="https://wa.me/5541992417174"
          />
          <ContactItem
            icon={<EmailIcon />} // Crie o EmailIcon similarmente
            label="E-mail"
            value="jcoliveira.advocacia@gmail.com"
            href="mailto:jcoliveira.advocacia@gmail.com"
          />
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Horário de Atendimento</h3>
          <div className="space-y-2">
            <p className="font-medium">Segunda a Sexta</p>
            <p className="text-gray-600">08:00 - 18:00</p>
            <p className="font-medium mt-4">Plantão 24h</p>
            <p className="text-primary-blue">(41) 99241-7174</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;