import React from "react";

const ModalFiveContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>ADAA.io</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Project </span>:{" "}
              <span className="ft-wt-600 uppercase">Application Crypto</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Projet </span>:{" "}
              <span className="ft-wt-600 uppercase">personnel</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Langage </span>:{" "}
              <span className="ft-wt-600 uppercase">PHP </span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Publicité liée </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://www.lacryptomonnaie.fr/actualite-crypto-monnaie/crypto-monnaies/2019/02/airdrops-et-adaa-io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  cryptomonnaie.fr/adaa.io
                </a>
              </span>
            </div>
            {/* End .col */}
          </div>
            <div className="col-12 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Détails </span>:{" "}
              <span className="ft-wt-600 uppercase">Projet co-réalisé en 2018 avec un web designer pour réaliser une application web permettant de simplifier la récupération de cryptomonnaies. Après deux ans de fonctionnement, le site a été clôturé en attendant une évolution des projets crypto.</span>
            </div>
            {/* End .col */}
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <img src="img/projects/adaaapp.jpg" alt="Portolio" />
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalFiveContent;
