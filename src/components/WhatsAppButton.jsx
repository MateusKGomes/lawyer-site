import React from 'react';
import whatsappIcon from '../assets/whatsapp.png';

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5541992417174"
    className="whatsapp-button"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Fale conosco via WhatsApp"
  >
    <img 
      src={whatsappIcon} 
      alt="WhatsApp Icon" 
      className="whatsapp-icon" 
    />
  </a>
);

export default WhatsAppButton;