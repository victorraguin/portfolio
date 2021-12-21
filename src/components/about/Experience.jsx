import React from "react";

const experienceContent = [
  {
    year: "   Août 2021 - Aujourd'hui",
    position: " Développeur Web & Web Mobile",
    compnayName: "Ecole O'Clock",
    details: `Je développe mon expérience en créant des applications pour moi et mon entourage, en recherchant, en parrallèle, un emploi !`,
  },
  {
    year: "2017 - 2020",
    position: "Gestion de projets",
    compnayName: "A mon compte",
    details: `J'ai conçu et réalisé deux applications web sur les cryptoactifs : un blog qui me permettait de m'exprimer sur l'environnement de le développement de la technologie blockchain puis une application, ADAA.io, pour accéder à des cryptoactifs en échange de services.`,
  },
  {
    year: "2015-2017",
    position: "Métrologue 3D",
    compnayName: "TRIGO Qualitaire",
    details: `Ou "technicien qualité". Pratique de la métrologie par l'utilisation d'outils comme un bras polyarticulé 3D ou un Laser Leïca. Relevé de données spatiales, mesure et traitement de ces données pour AIRBUS.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
