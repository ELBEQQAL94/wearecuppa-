import React from "react";

// Components
import LinkItem from "./LinkItem";

const MenuBottom = () => (
  <div className="links">
    <LinkItem to="/services" link="Services" />
    <LinkItem to="/our-work" link="Our Work" />
    <LinkItem to="/about-us" link="About Us" />
  </div>
);

export default MenuBottom;
