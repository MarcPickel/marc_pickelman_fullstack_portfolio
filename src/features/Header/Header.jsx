import "./Header.css";
import Nav from "./components/Nav/Nav.jsx";

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <p className="header__text">Pickelman</p>
      </NavLink>
      <Nav />
    </header>
  );
}

export default Header;
