import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const locate = useLocation();
  const [menu, setMenu] = useState("Home");
  useEffect(() => {
    switch (locate.pathname) {
      case "/":
        setMenu("Home");
        break;
      case "/services":
        setMenu("Services");
        break;
      case "/casestudies":
        setMenu("Case Studies");
        break;
      case "/about":
        setMenu("About Us");
        break;
      case "/contact":
        setMenu("Contact");
        break;
      default:
        setMenu("");
    }
  });
  return (
    <div className="nav">
      <nav onClick={() => setOpen(!open)} className={open ? "active" : ""}>
        <Link className="a" to={"/"}>
          <h1>
            <span className="colored-text">LOU</span>
            <span>Light Of the Universe</span>
          </h1>
        </Link>

        <ul className={open ? "active" : ""}>
          <Link to={"/"} className="a">
            <li
              className={menu === "Home" ? "chosen" : ""}
              onClick={() => setMenu("Home")}
            >
              Home
            </li>
          </Link>

          <Link className="a" to={"/services"}><li className={menu === "Services" ? "chosen" : ""}>Services</li></Link>
          <Link className="a" to={"/sesources"}><li className={menu === "Resources" ? "chosen" : ""}>Resources</li></Link>
          <Link className="a" to={"/casestudies"}><li className={menu === "Case Studies" ? "chosen" : ""}>Case Studies</li></Link>
          <Link className="a" to={'/about'}><li className={menu === "About Us" ? "chosen" : ""}>About Us</li></Link>
        </ul>

        <ul className={`colored ${open ? "active" : ""}`}>
          <li>Quote</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
