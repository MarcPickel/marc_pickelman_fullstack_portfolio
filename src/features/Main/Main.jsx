import "./Main.css";
import Bookshelf from "./components/Bookshelf/Bookshelf.jsx";
import InWorks from "./components/InWorks/InWorks.jsx";

import { NavLink } from "react-router-dom";

function Main() {
  return (
    <main className="main">
      <div className="main__intro">
        <p>Hello! I'm Marc Pickelman</p>
        <p>And I write websites</p>
        <p>from cover to cover</p>
      </div>
      <p className="main__text">
        I'm a full-stack web developer, enchanted with words and their ability
        to&nbsp;
        <NavLink>forge</NavLink>, <NavLink>find</NavLink>, and&nbsp;
        <NavLink>fill</NavLink>
        &nbsp;digital spaces. And there is work to be done.
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
