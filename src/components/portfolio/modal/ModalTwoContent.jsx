import React from "react";

const ModalTwoContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>ToutsurApp</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Projet </span>:{" "}
              <span className="ft-wt-600 uppercase">Fin de formation</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Ecole </span>:{" "}
              <span className="ft-wt-600 uppercase">O'Clock</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Aperçu vidéo </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://www.youtube.com/watch?v=rDUrb9VLdFA&t=5037shttps://www.youtube.com/watch?v=rDUrb9VLdFA&t=5037s"
                  target="_blank"
                  rel="noreferrer"
                >
                  YouTube.com/toutsurapp
                </a>
              </span>
            </div>
            {/* End .col */}
          </div>
            <div className="col-12 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Détails </span>:{" "}
              <span className="ft-wt-600 uppercase">Projet de fin de formation. Quatres semaines intensives en tant que Product Owner et Développeur fullstack ReactJS / Javascript. Utilisation de ReactJS, NodeJS, Express, les flux RSS. Voir la vidéo pour un détails précis ! </span>
            </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <div className="videocontainer">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/rDUrb9VLdFA?start=5035" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalTwoContent;
