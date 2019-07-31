import React from "react";

const Galery = ({ src, title, alt }) => (
  <div className="galery">
    <img className="img-thumbnail" src={src} alt={alt} title={title} />
  </div>
);

export default Galery;
