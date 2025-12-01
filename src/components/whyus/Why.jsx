import "./Why.scss";
import React, { useEffect, useRef } from "react";

export const Why = () => {
  const itemsRef = useRef([]);
  const divRef = useRef(null);

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

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    // observe the right container for animation
    if (divRef.current) observer.observe(divRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="why">
      <div className="right" ref={divRef}>
        <div className="txt">
          <h1
            className="golden-glow-text"
            ref={(el) => (itemsRef.current[0] = el)}
          >
            Bring Your Projects into Life
          </h1>
          <p ref={(el) => (itemsRef.current[1] = el)}>
            At Light of the Universe, we transform ideas into unforgettable
            experiences.
            <br />
            Light of the Universe isn’t just a consulting and production
            company—we are your creative partners, committed to elevating your
            vision and delivering excellence at every step.
          </p>

          <div className="info">
            <div className="info-item" ref={(el) => (itemsRef.current[2] = el)}>
              {/* <i className="fa-solid fa-message"></i> */}
              <h4 className="silver-glow-text"> <i className="fa-solid fa-message"></i> Our Mission</h4>
              <p>
                Empowering businesses by delivering tailored services that honor
                local knowledge and incorporate cultural significance. Committed
                to crafting memorable events and experiences that foster
                connections, creating lasting impressions and drive success
                through creativity and artistic simplicity.
              </p>
            </div>
            <div className="info-item" ref={(el) => (itemsRef.current[3] = el)}>
              {/* <i className="fa-solid fa-eye"></i> */}
              <h4 className="silver-glow-text"><i className="fa-solid fa-eye"></i> Our Vision</h4>
              <p>
                Seeking to be the foremost curator of transformative experiences
                that celebrate heritage and cultural values, enriching brands
                and communities through innovative conceptual creation and
                exceptional service in the luxury market, all while prioritizing
                sustainability and authenticity.
              </p>
            </div>
          </div>

          <div className="why-us" ref={(el) => (itemsRef.current[4] = el)}>
            <h2 className="golden-glow-text">Why Choose LOU</h2>
            <ul>
              <li>Tailored Creativity</li>
              <li>Expert Project Management</li>
              <li>Cultural and Local Insight</li>
              <li>Luxury with Sustainability</li>
              <li>Memorable Impact</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="left">
        <div className="img-cont">
          {[
            "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg",
            "https://images.pexels.com/photos/8441784/pexels-photo-8441784.jpeg",
            "https://images.pexels.com/photos/8112180/pexels-photo-8112180.jpeg?auto=compress&cs=tinysrgb&w=400",
            "https://images.pexels.com/photos/7490893/pexels-photo-7490893.jpeg?auto=compress&cs=tinysrgb&w=400",
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className={i === 1 ? "move-up" : i === 2 ? "move-down" : ""}
              ref={(el) => (itemsRef.current[5 + i] = el)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Why;
