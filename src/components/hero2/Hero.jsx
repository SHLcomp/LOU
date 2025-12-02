import React, { useEffect, useRef } from "react";
import "./Hero.scss";
import globe from "../../assets/earth.png";
import marble from "../../assets/marble.png";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);
export const Hero = () => {
  const descRef = useRef(null); // ref for description

  useEffect(() => {
    
  let split = new SplitText(".split", { type: "chars" });
  let split2 = new SplitText(".split2", { type: "lines" });
  let chars = split.chars;
  let lines = split2.lines


  gsap.from(chars, {
    yPercent: 100,
    stagger: 0.009,
    duration: 1.2,
    ease: "expo.out",
  })

   gsap.from(lines, {
    opacity: 0,
    yPercent: 100,
    duration:1.8,
    stagger: 0.009,
    ease: "expo.out",
    delay: .5

  })



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

    return () => {
      observer.disconnect();
      split.revert();
    };
  }, []);

  return (
    <div className="hero">
      <div className="hero-imgs">
        <img className="globe" src={globe} alt="" />
      </div>
      <div className="hero-text">
        <div className="desc" ref={descRef}>
          <p className="split2">
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
          <h1 className="golden-glow-text split">
            Your ideas. Our light. Universal impact.
          </h1>
        </div>
      </div>

      <div
        className="contact-orb silver-glow-text"
        style={{ backgroundImage: `url(${marble})` }}
      >
        <ul>
          <li>
            <i className="fa-solid fa-phone"></i> +962 071234567
          </li>
          <li>
            <i className="fa-solid fa-envelope"></i> email@LOU.com
          </li>
          <h3 className="cta">Contact</h3>
        </ul>
      </div>

      <div className="info">
        <p>
          Completed Project <span>500+</span>
        </p>
        <p>
          Years of Expertise <span>15+</span>
        </p>
        <p>
          Satisfaction <span>100%</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
