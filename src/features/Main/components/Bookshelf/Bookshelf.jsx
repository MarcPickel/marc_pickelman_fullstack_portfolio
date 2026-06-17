import "./Bookshelf.css";

import { NavLink } from "react-router-dom";
import { SmBook, MdBook, LgBook } from "../Books/Books.jsx";

function Bookshelf({ handleTopScroll, onRiddleClick }) {
  return (
    <div className="bookshelf">
      {/* Books in descending order based on time: newer -> older */}
      <div className="bookshelf__books">
        <NavLink to="/psalter" onClick={handleTopScroll}>
          <SmBook title="Smpl Psltr" color="green" band="silver" />
        </NavLink>
        <NavLink to="/msfr" onClick={handleTopScroll}>
          <MdBook title="MSFR" color="blue" band="silver" />
        </NavLink>
        <NavLink to="/wtwr" onClick={handleTopScroll}>
          <LgBook title="WTWR" color="gray" band="blue" />
        </NavLink>
        <NavLink onClick={onRiddleClick}>
          <SmBook title="Gelachter" color="purple" band="silver" />
        </NavLink>
        <NavLink to="/spots" onClick={handleTopScroll}>
          <MdBook title="Spots" color="yellow" band="blue" />
        </NavLink>
      </div>
      <div className="bookshelf__shelf"></div>
    </div>
  );
}

export default Bookshelf;
