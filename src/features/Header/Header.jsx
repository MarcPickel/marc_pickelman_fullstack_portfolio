import "./Header.css";
import Nav from "./components/Nav/Nav.jsx";

import { useState } from "react";
import { NavLink } from "react-router-dom";

import quill from "../../assets/black_quill.svg";

function Header() {
  const [isActive, setIsActive] = useState("");

  const handleClick = (page) => {
    setIsActive(page);
  };

  return (
    <header className="header">
      <NavLink to="/">
        <p
          onClick={() => {
            handleClick("");
          }}
          className="header__text"
        >
          Pickelman
        </p>
      </NavLink>
      <nav className="nav">
        <NavLink to="/seo">
          <button
            onClick={() => {
              handleClick("seo");
            }}
            className={`header__nav-button header__nav-button_${isActive === "seo" ? "active" : ""}`}
            type="button"
          >
            SEO
          </button>
        </NavLink>
        <NavLink to="/writing">
          <button
            onClick={() => {
              handleClick("writing");
            }}
            className={`header__nav-button header__nav-button_${isActive === "writing" ? "active" : ""}`}
            type="button"
          >
            Writing
          </button>
        </NavLink>
        <NavLink to="/about">
          <button
            onClick={() => {
              handleClick("about");
            }}
            className={`header__nav-button header__nav-button_${isActive === "about" ? "active" : ""}`}
            type="button"
          >
            About
          </button>
        </NavLink>
        <NavLink>
          <img src={quill} className="header__icon" />
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
