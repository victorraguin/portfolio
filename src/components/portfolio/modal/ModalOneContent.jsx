import React from "react";

const ModalOneContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>Détails du projet</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Projet </span>:{" "}
              <span className="ft-wt-600 uppercase">Application Mobile</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Langages </span>:{" "}
              <span className="ft-wt-600 uppercase">HTML, CSS, ReactJS</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Voir </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://magicappcorsept.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://magicappcorsept.netlify.app/
                </a>
              </span>
            </div>
            {/* End .col */}
          </div>
            <div className="col-12 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Détails </span>:{" "}
              <span className="ft-wt-600 uppercase">Utilisation entre amis en tant que compteur de points de vie : compteur de parties, de points de vie, retenue des scores dans un state, logs des parties.</span>
            </div>
            {/* End .col */}
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <img src="img/projects/mtgapp.JPG" alt="Portolio" />
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalOneContent;
