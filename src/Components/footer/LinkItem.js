import React from "react";
import { Link } from "react-router-dom";

const LinkItem = ({ link, to }) => (
  <span>
    <Link to={to}>{link}</Link>
  </span>
);

export default LinkItem;
