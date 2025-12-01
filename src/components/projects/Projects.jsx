import React, { useEffect, useRef } from "react";
import "./Projects.scss";
import data from "../../data/services";
import { SassColor } from "sass";

export const Projects = () => {
  const itemsRef = useRef([]);
  const headerRef = useRef(null); // <- h1 ref
  const subheaderRef = useRef(null); 

  itemsRef.current.length = data.length;

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
      { threshold: 0.01 }
    );

    // observe cards
    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    // observe header
    if (headerRef.current) observer.observe(headerRef.current);
    if (subheaderRef.current) observer.observe(subheaderRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="projects" id="projects">
      <h1 className="golden-glow-text" ref={headerRef}>
        <span className="secondary-text">LOU Featured Projects</span>
        Our Projects
      </h1>
      <p className="des-text" ref={subheaderRef}>LOU Case Studies</p>

      <div className="cards">
        {data.map((project, i) => (
          <div
            className="card"
            key={i}
            ref={(el) => (itemsRef.current[i] = el)}
          >
            <div className="img">
              <img src={project.img} alt={project.name} />
            </div>

            <div className="text">
              <h3>{project.name}</h3>
              <p>{project.des}</p>
              <h5 className="cta2">Read more</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
