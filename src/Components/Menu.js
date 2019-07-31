import React from "react";
import Logo from "../images/logo.jpg";
import Links from "./Links";
import { Link } from 'react-router-dom';

const Menu = () => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container">
      <Link className="navbar-brand" to="#">
        <img src={Logo} alt="logo" title="logo" width="150" height="150" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbar">
        <ul className="navbar-nav mr-auto">
          <Links title="Services" to="/" />
          <Links title="Our Work" to="/our-work" />
          <Links title="About Us" to="/about-us" />
          <Links title="Blog" to="/blog" />
          <Links title="Work With Us" to="/work-with-us" />
        </ul>
      </div>
    </div>
  </nav>
);

export default Menu;
