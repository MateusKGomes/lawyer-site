// components/ContactItem.jsx
import React from 'react';

const ContactItem = ({ icon, label, value, href }) => (
  <div className="flex items-center space-x-4 p-3 hover:bg-gray-100 rounded-lg transition-colors">
    <div className="text-primary-brown w-6 h-6 flex-shrink-0">
      {icon}
    </div>
    <div>
      <p className="font-medium text-gray-600">{label}</p>
      {href ? (
        <a
          href={href}
          className="text-primary-blue hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {value}
        </a>
      ) : (
        <p className="text-gray-900">{value}</p>
      )}
    </div>
  </div>
);

export default ContactItem;