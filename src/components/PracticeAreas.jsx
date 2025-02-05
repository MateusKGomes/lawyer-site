import React from "react";
import {
  FaBalanceScale,
  FaHandshake,
  FaUsers,
  FaGavel,
  FaRainbow,
} from "react-icons/fa";
import { RiFileListLine } from "react-icons/ri";
import { MdOutlinePolicy } from "react-icons/md";
import { HiOutlineBriefcase } from "react-icons/hi";

import { FaHandcuffs } from "react-icons/fa6";

const PracticeAreas = () => {
  const areas = [
    {
      icon: <FaBalanceScale />, title: "Administrativo",
    },

    { icon: <FaHandshake />, title: "Contratos" },

    { icon: <FaHandcuffs />, title: "Criminal" },

    { icon: <FaRainbow />, title: "Direitos LGBTQIAPN+" },

    { icon: <HiOutlineBriefcase />, title: "Empresarial" },

    { icon: <FaUsers />, title: "Família" },

    { icon: <RiFileListLine />, title: "Inventários" },

    { icon: <FaGavel />, title: "Júri" },

    {
      icon: <MdOutlinePolicy />,
      title: "Processo Administrativo Disciplinar (PAD)",
    },

    // Adicione outras áreas
  ];

  return (
    <section className="practice-section" aria-labelledby="practice-heading">
      <div className="container">
        <h2 id="practice-heading" className="section-heading">
          Áreas de Atuação
        </h2>

        <div className="practice-grid">
          {areas.map((area, index) => (
            <div key={index} className="practice-card">
              <div className="flex items-center gap-4">
                <span className="text-primary-blue text-xl">{area.icon}</span>
                <h3 className="font-medium">{area.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
