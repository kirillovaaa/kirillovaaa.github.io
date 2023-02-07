import React from "react";
import "./Header.css";

const Header = ({ location }) => {
  const handleClick = (id) => () => {
    const sectionElement = document.querySelector(`#${id}`); // #{что_передадим}
    sectionElement.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="header">
      <ul className="header-links">
        <li onClick={handleClick("main")}>Sasha Kirilova</li>
        <li onClick={handleClick("work")}>Work</li>
        <li onClick={handleClick("contact")}>Contact</li>
      </ul>
      <p className="header-text">
        Traveling around the world 🗺️
        <br />
        Currently in {location}
      </p>
    </header>
  );
};
export default Header;
