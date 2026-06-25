import "./About.css";

import profile from "../../assets/marc-pickelman.jpg";

function About({ onRiddleClick }) {
  return (
    <div className="about">
      <h1 className="about__header">About</h1>
      <section className="about__section about__section_intro">
        <div className="about__container">
          <div className="about__image-container">
            <img
              className="about__image"
              src={profile}
              onClick={onRiddleClick}
            />
          </div>
          <div className="about__content">
            <p className="about__text about__text_intro">
              I'm Marc Pickelman, a Full-Stack Software Engineer who hails from
              the Midwest.
            </p>
            <p className="about__text about__text_intro">
              I am enamored with anything to do with words, such as coding,
              optimizing websites for search engines, writing prose and poetry,
              studying languages for fun, and reading.
            </p>
            <p className="about__text about__text_intro">
              My aim is to make true, good, and beautiful digital spaces, and to
              build up the Kingdom of Heaven on this Middle-earth.
            </p>
          </div>
        </div>
      </section>
      <section className="about__section">
        <h2 className="about__title">Work</h2>
        <p className="about__text">
          Presently, I am looking for someone to share in an adventure, that is,
          a work-adventure of coding.
        </p>
      </section>
      <section className="about__section">
        <h2 className="about__title">Writing</h2>
        <p className="about__text">
          Apart from writing code, fictional prose and traditional poetry are
          also things I like to write.
        </p>
      </section>
      <section className="about__section">
        <h2 className="about__title">Books</h2>
        <p className="about__text">
          Reading for me is as refreshing as drinking a draft of cold water on a
          hot day. Here are five of my favorite books.
        </p>
        <ul className="about__list">
          <li className="about__list_item">
            1.{" "}
            <a
              href="https://bible.usccb.org/bible"
              className="about__link"
              target="_blank"
              title="Take me thither"
            >
              The Holy Bible
            </a>
          </li>
          <li className="about__list_item">
            2.{" "}
            <a
              href="https://tolkiengateway.net/wiki/The_Hobbit"
              className="about__link"
              target="_blank"
              title="Take me thither"
            >
              The Hobbit
            </a>
          </li>
          <li className="about__list_item">
            3.{" "}
            <a
              href="https://tolkiengateway.net/wiki/The_Lord_of_the_Rings"
              className="about__link"
              target="_blank"
              title="Take me thither"
            >
              The Lord of the Rings
            </a>
          </li>
          <li className="about__list_item">
            4.{" "}
            <a
              href="https://www.gutenberg.org/files/10148/10148-h/10148-h.htm"
              className="about__link"
              target="_blank"
              title="Take me thither"
            >
              The Merry Adventures of Robin Hood
            </a>
          </li>
          <li className="about__list_item">
            5.{" "}
            <a
              href="https://www.gutenberg.org/files/19/19-h/19-h.htm"
              className="about__link"
              target="_blank"
              title="Take me thither"
            >
              The Song of Hiawatha
            </a>
          </li>
        </ul>
      </section>
      <section className="about__section">
        <h2 className="about__title">Languages</h2>
        <p className="about__text">
          Studying languages for myself is more like savoring a cocktail; but
          one can get too carried away with cocktails, you know? Anyway, here
          are five natural languages that I find fun studying.
        </p>
        <ul className="about__list">
          <li className="about__list_item">
            1.{" "}
            <a
              href="https://en.wikipedia.org/wiki/Gothic_language"
              className="about__link"
              target="_blank"
              title="Take me thither"
            >
              Gothic
            </a>
          </li>
          <li className="about__list_item">
            2.{" "}
            <a
              href="https://en.wikipedia.org/wiki/Latin"
              className="about__link"
              target="_blank"
              title="Take me thither"
            >
              Latin
            </a>
          </li>
          <li className="about__list_item">
            3.{" "}
            <a
              href="https://en.wikipedia.org/wiki/Spanish_language"
              className="about__link"
              target="_blank"
              title="Take me thither"
            >
              Spanish
            </a>
          </li>
          <li className="about__list_item">
            4.{" "}
            <a
              href="https://en.wikipedia.org/wiki/French_language"
              className="about__link"
              target="_blank"
              title="Take me thither"
            >
              French
            </a>
          </li>
          <li className="about__list_item">
            5.{" "}
            <a
              href="https://en.wikipedia.org/wiki/German_language"
              className="about__link"
              target="_blank"
              title="Take me thither"
            >
              German
            </a>
          </li>
        </ul>
      </section>
      <section className="about__section">
        <h2 className="about__title">Family</h2>
        <p className="about__text">
          All of my family is my heart's delight. I'm joyfully married to a
          little flower of a wife with whom I have three children.
        </p>
      </section>
      <section className="about__section">
        <h2 className="about__title">Catholic Faith</h2>
        <p className="about__text">
          But to He who remains, as St. Thomas Aquinas writes, "
          <span className="about__text_italic">latens deitas</span>," I owe my
          life, my everything, my all. For God, who established the firmament,
          even the firmament of the digital world, do I do all things{" "}
          <span className="about__text_italic">ad majorem Dei gloriam</span>.
        </p>
      </section>
      <section className="about__section">
        <h2 className="about__title">Work with Me</h2>
        <p className="about__text about__text_extra_space">
          If you wish to share in an adventure with me, I'd be delighted. Just
          shoot me an{" "}
          <a
            href="mailto:marcpc@att.net"
            className="about__link"
            title="Email me"
          >
            email
          </a>{" "}
          or get on the{" "}
          <a href="tel:9063228501" className="about__link" title="Call me">
            horn
          </a>
          !
        </p>
        <p className="about__text">
          I'm also on{" "}
          <a
            href="https://www.linkedin.com/in/marc-pickelman"
            className="about__link"
            target="_blank"
            title="Connect with me"
          >
            LinkedIn
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/MarcPickel"
            className="about__link"
            target="_blank"
            title="Check 'er out"
          >
            GitHub
          </a>
          .
        </p>
      </section>
    </div>
  );
}

export default About;
