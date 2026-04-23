import "./Header.css";
import Nav from "./components/Nav/Nav.jsx";

import { NavLink } from "react-router-dom";

function Header() {
  <div className="header">
    <NavLink to="/">
      <img class="header__image"></img>
    </NavLink>
    <Nav />
  </div>;
}

export default Header;
