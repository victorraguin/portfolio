import React from "react";

const personalInfoContent = [
  { meta: "Prénom", metaInfo: "Victor" },
  { meta: "Nom", metaInfo: "Raguin" },
  { meta: "Age", metaInfo: "29 Years" },
  { meta: "Nationalité", metaInfo: "Française" },
  { meta: "Statut", metaInfo: "En recherche d'emploi" },
  { meta: "Adresse", metaInfo: "Chaumes-en-Retz" },
  { meta: "Téléphone", metaInfo: "06.62.39.83.43" },
  { meta: "E-Mail", metaInfo: "victor.raguin@live.fr" },
  { meta: "Langues", metaInfo: "Français, Anglais" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
