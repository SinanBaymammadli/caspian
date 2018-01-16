import React from "react";
import "./Footer.css";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <section className="Footer-wrapper">
      <div className="container">
        <div className="Footer">
          <p>by Code Lab</p>
          <p>All rights are reserved {year}</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
