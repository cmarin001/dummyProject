import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Menu } from "./../Menu";
import { MdMenu } from "react-icons/md";

import "./styles.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className="header__content">
        <div className="logo">Dummy App</div>
        <MdMenu className="hamburger" onClick={handleClick} />
      </div>
      {showMenu &&
        ReactDOM.createPortal(
          <Menu handleClose={() => setShowMenu(false)} />,
          document.body
        )}
    </header>
  );
};

export { Header };
