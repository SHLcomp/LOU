import React, { useState } from "react";
import marble from "../../assets/marble.png";
import './Orb.scss';

const Orb = () => {
  const [orbOpen, setOrbOpen] = useState(false);
  return (
    <div
            className={`contact-orb silver-glow-text ${orbOpen ? "open" : ""}`}
            style={{ backgroundImage: `url(${marble})` }}
            onClick={() => setOrbOpen(!orbOpen)}
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
  )
}

export default Orb