import React from "react";
import "./Header.css";

const Header = ({ location }) => {
  return (
    <header className="header">
      <div className="header-links">
        <a>Sasha Kirilova</a>
        <a>Work</a>
        <a>Contact</a>
      </div>
      <p className="header-text">
        Traveling around the world 🗺️
        <br />
        Currently in {location}
      </p>
    </header>
  );
};
export default Header;
