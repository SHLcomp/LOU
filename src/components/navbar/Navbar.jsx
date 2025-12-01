import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav">
      <nav onClick={() => setOpen(!open)} className={open ? "active" : ""}>
        <h1>
          <span className="colored-text">LOU</span>
          <span>Light Of the Universe</span>
        </h1>

        <ul className={open ? "active" : ""}>
          <Link to={"/"} className="a">
            <li className="chosen">Home</li>
          </Link>
          <a href="#services" className="a"><li>Services</li></a>
          <li>Resources</li>
          <li>Case Studies</li>
          <li>About Us</li>
        </ul>

        <ul className={`colored ${open ? "active" : "" }`}>
          <li>Quote</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
