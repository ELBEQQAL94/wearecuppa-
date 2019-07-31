import React from "react";

const ProjectCart = ({ title, alt, src }) => (
  <div className="cart">
    <img src={src} alt={alt} title={title} width="100%" height="100%" />
  </div>
);

export default ProjectCart;
