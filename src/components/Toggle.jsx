import React from 'react';
import './Toggle.css';
import { useState, useEffect } from 'react';


export const Toggle = ({ handleChange, isChecked }) => {

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
    <div className={`toggle-container ${isHidden ? 'hidden' : ''}`}>
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check">Dark Mode</label>
    </div>
  );
};

export default Toggle;
