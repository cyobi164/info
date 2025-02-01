import React from "react";
import "./Header.css"; 
import Toggle from './Toggle';

function Header({handleChange, isChecked}) {
  return (
    <nav className="custom-navbar">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Project
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contact
          </a>
        </li>
      </ul>
      <Toggle handleChange={handleChange} isChecked={isChecked} />
    </nav>
  );
}

export default Header;
