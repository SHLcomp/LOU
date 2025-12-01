import React, { useEffect, useRef } from "react";
import "./Services.scss";
import data from "../../data/services";
// import img from '../../assets/bg1.jpg'

export const Services = () => {
  const itemsRef = useRef([]);
  const headerRef = useRef(null); // <- h1 ref
  const subheaderRef = useRef(null);
  const imgRef = useRef(null);

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
    // observe image
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="services" id="services">
      <h1 className="golden-glow-text" ref={headerRef}>
        <span className="secondary-text">Sectors LOU Serves</span>
        Our Services
      </h1>
      <p className="des-text" ref={subheaderRef}>
        Our mission is to create unforgettable experiences that captivate and
        inspire. From conceptualization to execution. <br /> Delivering seamless
        event management with a touch of elegance, ensuring every detail is
        perfect and every moment unforgettable. <br /> At <span className="brand-name">Light Of the Universe</span>, we
        believe that every event should be a masterpiece, and we are dedicated
        to making that a reality
      </p>

      <div className="container">
        <div className="img">
          <img
            src="https://images.pexels.com/photos/8837715/pexels-photo-8837715.jpeg"
            alt=""
            ref={imgRef}
          />
        </div>
        <div className="cards">
          {data.map((service, i) => {
            return (
              <div
                className="card"
                key={i}
                ref={(el) => (itemsRef.current[i] = el)}
              >
                <div className="card-img">
                  <img src={service.img} alt="" />
                </div>
                <div className="card-text">
                  <h3>{service.name}</h3>
                  <p>{service.des}</p>
                  <h5 className="cta2">Read more</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
