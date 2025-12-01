import React, { useEffect, useRef } from "react";
import "./Hero.scss";
import img from "../../assets/bg1.2.png";

export const Hero = () => {
  const descRef = useRef(null);  // ref for description

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
      <div className="hero-img">
        <img src={img} alt="" />
      </div>
      <div className="hero-text">
        <div className="desc" ref={descRef}>
          <p>
            Light of the Universe crafts extraordinary experiences through innovation, elegance, and attention to detail.
We design transformative events, concepts, and environments that reflect culture, emotion, and purpose — turning every moment into an illuminated memory.
          </p>
          <div className="hero-cta">
            <h3 className="cta">View Projects</h3>
            <h3 className="cta">Request Quote</h3>
          </div>
        </div>
        <div className="hero-title">
          <h1 className="golden-glow-text">
            Your ideas. Our light. Universal impact.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
