import React from "react";
import { UilBars } from '@iconscout/react-unicons'
const Menu = () => {
  return (
    <div className="menu">
      <div className="logo">Gomo</div>
      <div className="menu-right">
        <ul>
          <li>About</li>
          <li>Experience</li>
          <li>Work</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>
        <div className="mobile-icon">
            <UilBars/>
        </div>
      </div>
    </div>
  );
};

export default Menu;
