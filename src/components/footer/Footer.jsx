import React from "react";
import "./Footer.scss";
import globe from "../../assets/earth.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-overlay"></div>

      <div className="footer-container">

        {/* Logo + About */}
        <div className="footer-brand">
          <h2 className="golden-glow-text">LOU</h2>
          <p>
            Light of the Universe crafts immersive experiences,
            blending elegance and innovation into every space.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h4>Explore</h4>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p><i className="fa-solid fa-phone"></i> +962 071234567</p>
          <p><i className="fa-solid fa-envelope"></i> info@lou.com</p>
          <p><i className="fa-solid fa-location-dot"></i> Amman, Jordan</p>
        </div>

        {/* Orb */}
        <div
          className="footer-orb"
          style={{ backgroundImage: `url(${globe})` }}
        ></div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Light of the Universe — All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
