import React, { useEffect, useState } from "react";
import "./Header.css";
import Toggle from "../light_and_dark/Toggle";
import { Link } from "react-scroll";

function Header({ handleChange, isChecked }) {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // User is scrolling down, hide the header
        setIsHidden(true);
      } else {
        // User is scrolling up, show the header
        setIsHidden(false);
      }
      lastScrollY = window.scrollY > 0 ? window.scrollY : 0;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`custom-navbar ${isHidden ? "hidden" : ""}`}>
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
            to="projects"
            smooth={true}
            duration={500}
            offset={-50}
          >
            Projects
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
