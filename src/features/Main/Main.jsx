import "./Main.css";
import Bookshelf from "./components/Bookshelf/Bookshelf.jsx";
import InWorks from "./components/InWorks/InWorks.jsx";
import Story from "./components/Story/Story.jsx";

import { NavLink } from "react-router-dom";
import { useRef } from "react";

function Main({ handleClick, handleTopScroll, onRiddleClick }) {
  const featRef = useRef(null);
  const storyRef = useRef(null);

  const handleFeatScroll = () => {
    featRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleStoryScroll = () => {
    storyRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="main">
      <div className="main__intro">
        <p className="main__text">Hello! I'm Marc Pickelman,</p>
        <h1 className="main__header main__header_special">
          and I write websites
        </h1>
        <p className="main__text main__text_right">from cover to cover.</p>
        <p className="main__subtext">
          I'm a full-stack web developer, enamored with words and their ability
          to{" "}
          <button
            className="main__link main__link_button"
            type="button"
            onClick={handleFeatScroll}
          >
            forge
          </button>
          ,{" "}
          <NavLink to="/seo">
            <span
              className="main__link"
              onClick={() => {
                handleClick("seo");
                handleTopScroll();
              }}
            >
              find
            </span>
          </NavLink>
          , and{" "}
          <NavLink to="/writing">
            <span
              className="main__link"
              onClick={() => {
                handleClick("writing");
                handleTopScroll();
              }}
            >
              fill
            </span>
          </NavLink>{" "}
          digital spaces.
        </p>
      </div>
      <section className="main__featured">
        <h2
          className="main__featured-header main__header_special"
          ref={featRef}
        >
          Featured Projects
        </h2>
        <Bookshelf
          handleTopScroll={handleTopScroll}
          onRiddleClick={onRiddleClick}
        />
        <div className="main__featured-container">
          <button
            type="button"
            className="main__link main__featured-link_button"
            type="button"
            onClick={handleStoryScroll}
          >
            Fill the shelf
          </button>
        </div>
      </section>
      <section className="main__in-works">
        <h2 className="main__works-header main__header_special">
          In the Works
        </h2>
        <InWorks />
      </section>
      <section ref={storyRef} className="main__story">
        <h2 className="main__works-header main__header_special">
          Tell Me Your Story
        </h2>
        <Story />
      </section>
    </main>
  );
}

export default Main;
