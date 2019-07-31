import React from "react";

// Components
import Menu from "../Menu";
import Contact from "../Contact";

const Header = () => (
  <header>
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <Menu />
        </div>
        <div className="col-md-4">
          <Contact />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
