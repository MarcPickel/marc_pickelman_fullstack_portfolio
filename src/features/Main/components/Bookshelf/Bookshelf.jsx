import "./Bookshelf.css";

function Bookshelf() {
  return (
    <div className="bookshelf">
      {/* Books in descending order based on time: newer -> older */}
      <div className="bookshelf__books">
        <div className="bookshelf__book">Simple Psalter App</div>
        <div className="bookshelf__book">Man's Search For Reading</div>
        <div className="bookshelf__book">WTWR</div>
        <div className="bookshelf__book">Spots</div>
      </div>
      <div className="bookshelf__shelf"></div>
    </div>
  );
}

export default Bookshelf;
