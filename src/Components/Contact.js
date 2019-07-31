import React from "react";
import { ScTwitter } from "styled-icons/evil/ScTwitter";
import { Facebook } from "styled-icons/boxicons-logos/Facebook";
import { ScPinterest } from "styled-icons/evil/ScPinterest";
import { Linkedin } from "styled-icons/boxicons-logos/Linkedin";

const Contact = () => (
  <div className="contact hidden-contact">
    0147 1474 1471
    <div className="icons">
      <span>
        <a href="#" target="_blank">
          {" "}
          <ScTwitter size="30" />
        </a>
      </span>
      <span>
        <a href="#" target="_blank">
          {" "}
          <Facebook size="30" />
        </a>
      </span>
      <span>
        <a href="#" target="_blank">
          {" "}
          <ScPinterest size="30" />
        </a>
      </span>
      <span>
        <a href="#" target="_blank">
          {" "}
          <Linkedin size="30" />
        </a>
      </span>
    </div>
  </div>
);

export default Contact;
