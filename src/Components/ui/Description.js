import React from "react";

const Description = ({ title, info }) => (
  <div className="description">
    <h1 className="title-sm">{title}</h1>
    <p>{info}</p>
  </div>
);

export default Description;
