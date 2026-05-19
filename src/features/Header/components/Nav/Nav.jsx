import "./Nav.css";

import { NavLink } from "react-router-dom";

import quill from "../../../../assets/black_quill.svg";

function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/seo">
        <button className="nav__button" type="button">
          SEO
        </button>
      </NavLink>
      <NavLink to="/writing">
        <button className="nav__button" type="button">
          Writing
        </button>
      </NavLink>
      <NavLink to="/about">
        <button className="nav__button" type="button">
          About
        </button>
      </NavLink>
      <NavLink>
        <img src={quill} className="nav__icon" />
      </NavLink>
    </nav>
  );
}

export default Nav;
