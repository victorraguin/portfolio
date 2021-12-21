import React from "react";

const ModalFourContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>D'une Réalité à l'Autre</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Projet </span>:{" "}
              <span className="ft-wt-600 uppercase">Site vitrine</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Client </span>:{" "}
              <span className="ft-wt-600 uppercase">D'une Réalité à l'Autre</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Langages </span>:{" "}
              <span className="ft-wt-600 uppercase">HTML / CSS / WordPress</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Voir </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://dunerealitealautre.fr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://dunerealitealautre.fr/
                </a>
              </span>
            </div>
            {/* End .col */}
          </div>
          <div className="col-12 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Détails </span>:{" "}
              <span className="ft-wt-600 uppercase">De la conception à la réalisation du projet, en déterminant le design, le logo et le type d'informations à transmettre pour le visiteur puis par la réalisation du site internet sur WordPress. </span>
            </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <img src="img/projects/dunerealitealautrewebsite.jpg" alt="Portolio" />
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalFourContent;
