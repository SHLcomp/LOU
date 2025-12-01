import React, { useEffect, useRef } from "react";
import "./ShortAU.scss";
// import img from '../../assets/bg1.jpg'

export const ShortAU = () => {
  const itemsRef = useRef([]);
  const headerRef = useRef(null); // <- h1 ref
  const subheaderRef = useRef(null);
  const imgRef = useRef(null);

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
    // observe image
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="shortau" id="shortau">
      <div className="container">
        <div className="img">
          <img
            src="https://images.pexels.com/photos/7640741/pexels-photo-7640741.jpeg"
            alt=""
            ref={imgRef}
          />
        </div>
        <div className="text">
        
          <h2 className="golden-glow-text" ref={headerRef}><span className="secondary-text">About LOU</span> Our Business Culture</h2>
          <h5 ref={subheaderRef}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            delectus, voluptates nemo, labore magni non eveniet voluptatum
            distinctio temporibus minima, ipsa ab molestias repellat ea
            perspiciatis beatae incidunt neque fugiat.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ShortAU;
