import React, { useEffect, useRef } from "react";
import "./Hero.scss";
import globe from "../../assets/earth.png";
import marble from "../../assets/marble.png";

export const Hero = () => {
  const descRef = useRef(null); // ref for description

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("pop");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (descRef.current) observer.observe(descRef.current); // observe description

    return () => observer.disconnect();
  }, []);

  return (
    <div className="hero">
      <div className="hero-imgs">
        <img className="globe" src={globe} alt="" />
      </div>
      <div className="hero-text">
        <div className="desc" ref={descRef}>
          <p>
            Light of the Universe crafts extraordinary experiences through
            innovation, elegance, and attention to detail. We design
            transformative events, concepts, and environments that reflect
            culture, emotion, and purpose — turning every moment into an
            illuminated memory.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="a">
              <h3 className="cta">View constellations</h3>
            </a>
            <h3 className="cta">Begin your orbit</h3>
          </div>
        </div>
        <div className="hero-title">
          <h1 className="golden-glow-text">
            Your ideas. Our light. Universal impact.
          </h1>
        </div>
      </div>

      <div className="contact-orb silver-glow-text" style={{ backgroundImage: `url(${marble})` }}>
        <ul>
          <li>
            <i className="fa-solid fa-phone"></i> +962 071234567
          </li>
          <li><i className="fa-solid fa-envelope"></i> email@adress.com</li>
          <h3 className="cta">Contact</h3>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
