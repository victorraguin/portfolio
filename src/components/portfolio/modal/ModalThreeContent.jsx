import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ModalThreeContent = () => {

  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>J'Danse Association</h3>
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
              <span className="ft-wt-600 uppercase">J'Danse Association</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Langages </span>:{" "}
              <span className="ft-wt-600 uppercase">ReactJS (Template)</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Voir (en construction) </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://jdanse-association.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.associationjdanse.fr
                </a>
              </span>
            </div>
            {/* End .col */}
          </div>
          <div className="col-12 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Détails </span>:{" "}
              <span className="ft-wt-600 uppercase">Projet en cours de construction ! Essai sur un template ReactJS pour le modifier et ne garder que les composants d'animation. Modification en fonction des besoins du client. Projet en pause.</span>
            </div>
          {/* End .row */}
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <img src="img/projects/jdanseasso.jpg" alt="Portolio" />
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalThreeContent;
