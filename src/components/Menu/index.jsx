import React from "react";
import "./styles.css";

const Menu = ({ handleClose }) => {
  return (
    <div className="fullscreen-menu">
      <div className="menu__header">
        <div className="menu__title">Menu</div>
        <div className="close-icon" onClick={handleClose}>
          &times;
        </div>
      </div>
      <ul className="menu__options">
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
      </ul>
    </div>
  );
};

export { Menu };
