import "./Books.css";

function SmBook({ title, color, band }) {
  return (
    <div className="book__wrapper">
      <div className={`book book__cover book__cover_${color}`}>
        <div className={`book__top book__top_${color}`}></div>
        <div className={`book book_sm`}>
          <p className={`book__title book__title_${band}`}>{title}</p>
        </div>
      </div>
    </div>
  );
}

function MdBook({ title, color, band }) {
  return (
    <div className="book__wrapper">
      <div className={`book book__cover book__cover_${color}`}>
        <div className={`book__top book__top_${color}`}></div>
        <div className={`book book_md`}>
          <p className={`book__title book__title_${band}`}>{title}</p>
        </div>
      </div>
    </div>
  );
}

function LgBook({ title, color, band }) {
  return (
    <div className="book__wrapper">
      <div className={`book book__cover book__cover_${color}`}>
        <div className={`book__top book__top_${color}`}></div>
        <div className={`book book_lg`}>
          <p className={`book__title book__title_${band}`}>{title}</p>
        </div>
      </div>
    </div>
  );
}

export { SmBook, MdBook, LgBook };
