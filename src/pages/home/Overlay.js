import React from "react";

const Overlay = ({ title, info, path }) => (
  <div className="overlay" style={{ background: `url(${path})` }}>
    <h1>{title}</h1>
    <p>{info}</p>
  </div>
);

export default Overlay;
