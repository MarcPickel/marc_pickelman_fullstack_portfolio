import "./Header.css";
import Nav from "./components/Nav/Nav.jsx";
import { GiPolarStar } from "react-icons/gi";

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <NavLink to="/">
          <GiPolarStar className="header__star" />
        </NavLink>
        <p className="header__text">Gil-estel, Star of High Hope</p>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
