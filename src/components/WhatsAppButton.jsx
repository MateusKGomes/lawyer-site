import React from 'react';
import '../App.css';

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/5541992417174" 
    className="whatsapp-button"
    target="_blank" 
    rel="noreferrer"
  >
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
      alt="WhatsApp" 
    />
  </a>
);

export default WhatsAppButton;