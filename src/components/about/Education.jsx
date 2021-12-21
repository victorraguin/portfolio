import React from "react";

const educationContent = [
  {
    year: "2021",
    degree: "Développeur Web & Web Mobile",
    institute: "Ecole O'Clock",
    details: `6 mois de formation intensive et diplomante sur le développement web, par la conception de wireframes, de user stories,
    par la matrise de ReactJS et de JavaScript (props, states, redux, router, scss, containers, hooks...) puis par la maitrise du
    Back-End : node, express , postgreSQL , sequelize...`,
  },
  {
    year: "2014",
    degree: "BTS Industrialisation des Produits Mécaniques",
    institute: "Aristide Briand",
    details: `Conception 3D, gestion et amélioration continue de projets, Lean Manufacturing et Méthodes Agiles`,
  },
  {
    year: "2012",
    degree: "BAC PROFESSIONNEL",
    institute: "Aristide Briand",
    details: `Apprentissage en communication de projets, en conception par CATIA, maitrise de tours et de fraiseuses numériques dans la réalisation de produits mécaniques.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
