import "./Bookshelf.css";
import { SmBook, MdBook, LgBook } from "../Books/Books.jsx";

function Bookshelf() {
  return (
    <div className="bookshelf">
      {/* Books in descending order based on time: newer -> older */}
      <div className="bookshelf__books">
        <SmBook title="Smpl Psltr" color="green" band="silver" />
        <MdBook title="MSFR" color="blue" band="silver" />
        <LgBook title="WTWR" color="gray" band="blue" />
        <MdBook title="Spots" color="yellow" band="blue" />
      </div>
      <div className="bookshelf__shelf"></div>
    </div>
  );
}

export default Bookshelf;
