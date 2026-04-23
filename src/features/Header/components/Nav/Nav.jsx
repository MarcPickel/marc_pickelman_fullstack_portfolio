import "./Nav.css";

import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <div>toggle switch</div>
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
    </nav>
  );
}

export default Nav;
