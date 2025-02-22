import React from "react";
import "./Header.css";
import Toggle from "./Toggle";
import { Link } from "react-scroll";

function Header({ handleChange, isChecked }) {
  return (
    <nav className="custom-navbar">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            className="nav-link"
            to="about"
            smooth={true}
            duration={500}
            offset={-50}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="skill"
            smooth={true}
            duration={500}
            offset={-50}
          >
              Skill
            </Link>
        </li>
        <li className="nav-item">
          <Link
           className="nav-link"
           to="socials"
           smooth={true}
           duration={500}
           offset={-50}
          >
            Contact
          </Link>
        </li>
      </ul>
      <Toggle handleChange={handleChange} isChecked={isChecked} />
    </nav>
  );
}

export default Header;
