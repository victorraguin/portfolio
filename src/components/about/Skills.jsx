import React from "react";

const skillsContent = [
  { skillClass: "p83", skillPercent: "83", skillName: "ReactJs" },
  { skillClass: "p80", skillPercent: "80", skillName: "JavaScript" },
  { skillClass: "p79", skillPercent: "79", skillName: "Api Restful" },
  { skillClass: "p80", skillPercent: "80", skillName: "NodeJS" },
  { skillClass: "p76", skillPercent: "76", skillName: "PostgreSQL" },
  { skillClass: "p80", skillPercent: "80", skillName: "Communication" },
  { skillClass: "p77", skillPercent: "77", skillName: "Méthode Agiles" },
  { skillClass: "p80", skillPercent: "80", skillName: "Gestion de projet" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
