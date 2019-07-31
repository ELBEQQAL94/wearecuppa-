import React from "react";

// Components
import MenuBottom from "./MenuBottom";
import Contact from "./Contact";

const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-6 hidden-sm">
          <MenuBottom />
        </div>
        <div className="col-md-6">
          <Contact />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
