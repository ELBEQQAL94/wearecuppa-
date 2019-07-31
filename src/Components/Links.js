import React from "react";
import { Link } from "react-router-dom";

const Links = ({ title, to }) => (
  <li className="nav-item">
    <Link to={to} className="nav-link" href="#">
      {title}
    </Link>
  </li>
);

export default Links;
