import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate,NavLink } from "react-router-dom";


function Navbar() {
     const navigate = useNavigate();
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <NavLink to="/" className="nav__brand">
        surajpatil4899
      </NavLink>
      <ul className={active}>
        <li className="nav__item">
          <NavLink to="/" className="nav__link">
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/about" className="nav__link">
            About
          </NavLink>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Portfolio
          </a>
        </li>
        <li className="nav__item">
          <NavLink to="/skills" className="nav__link">
            Skills
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/contact" className="nav__link">
            Contact
          </NavLink>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
