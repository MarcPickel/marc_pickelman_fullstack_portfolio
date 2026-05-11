import "./Main.css";
import Bookshelf from "./components/Bookshelf/Bookshelf.jsx";
import InWorks from "./components/InWorks/InWorks.jsx";

import { NavLink } from "react-router-dom";

function Main() {
  return (
    <main className="main">
      <div className="main__intro">
        <p className="main__text">Hello! I'm Marc Pickelman,</p>
        <h1 className="main__header main__header_special">
          and I write websites
        </h1>
        <p className="main__text main__text_right">from cover to cover.</p>
        <p className="main__subtext">
          I'm a full-stack web developer, enchanted with words and their ability
          to&nbsp;
          <span className="main__link">
            <NavLink>forge</NavLink>
          </span>
          ,&nbsp;
          <span className="main__link">
            <NavLink>find</NavLink>
          </span>
          , and&nbsp;
          <span className="main__link">
            <NavLink>fill</NavLink>
          </span>
          &nbsp;digital spaces.
        </p>
      </div>
      <section className="main__featured">
        <h2 className="main__featured-header main__header_special">
          Featured Projects
        </h2>
        <Bookshelf />
      </section>
      <section className="main__in-works">
        <h2 className="main__works-header main__header_special">
          In the Works
        </h2>
        <InWorks />
      </section>
    </main>
  );
}

export default Main;
