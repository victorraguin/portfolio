import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Localisation</span>Chaumes-en-Retz<br/>
        (30min de Nantes et véhiculé)
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">E-mail</span>{" "}
        <a href="mailto:victor.raguin@live.fr">victor.raguin@live.fr</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">Téléphone</span>{" "}
        <a href="Tel: +33662398343">06.62.39.83.43</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
