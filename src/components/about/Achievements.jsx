import React from "react";

const achievementsContent = [
  { title: "6", subTitle1: "projets web", subTitle2: "solo" },
  { title: "2", subTitle1: "projets web", subTitle2: "à venir" },
  { title: "10", subTitle1: "conférences", subTitle2: "données" },
  { title: "2", subTitle1: "applications", subTitle2: "crypto" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
