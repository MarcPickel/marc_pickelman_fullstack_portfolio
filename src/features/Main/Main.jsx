import "./Main.css";
import Bookshelf from "./components/Bookshelf/Bookshelf.jsx";
import InWorks from "./components/InWorks/InWorks.jsx";

import { NavLink } from "react-router-dom";

function Main() {
  return (
    <main className="main">
      <div className="main__intro">
        <p className="main__text">Hello! I'm Marc Pickelman</p>
        <h1 className="main__header">And I write websites</h1>
        <p className="main__text">from cover to cover</p>
      </div>
      <p className="main__subtext">
        I'm a full-stack web developer, enchanted with words and their ability
        to&nbsp;
        <NavLink>forge</NavLink>, <NavLink>find</NavLink>, and&nbsp;
        <NavLink>fill</NavLink>
        &nbsp;digital spaces.
      </p>
      <section className="main__featured">
        <Bookshelf />
      </section>
      <section className="main__in-works">
        <InWorks />
      </section>
    </main>
  );
}

export default Main;
