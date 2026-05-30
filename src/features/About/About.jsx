import "./About.css";

import profile from "../../assets/marc-pickelman.jpg";

function About() {
  return (
    <div className="about">
      <h1 className="about__header">About</h1>
      <section className="about__section">
        <img className="about__image" src={profile} />
        <div className="about__content">
          <p className="about__text">
            I'm Marc Pickelman, a Full-Stack Software Engineer from the Midwest.
          </p>
          <p className="about__text">
            Having a background in SEO, I'm equipped to help any business,
            entrepreneur, or ma and pa store build its website and rank higher
            on Google and AI.
          </p>
          <p className="about__text">
            In my leisure, I enjoy time developing my faith, loving my family,
            writing stories and poetry, reading books, and studying languages.
          </p>
        </div>
      </section>
      <section className="about__section">
        <h2 className="about__title">Full-Stack Software Engineering</h2>
        <p className="about__text"></p>
      </section>
      <section className="about__section">
        <h2 className="about__title">Search Engine Optimization</h2>
        <p className="about__text"></p>
      </section>
      <section className="about__section">
        <h2 className="about__title">Writing</h2>
        <p className="about__text"></p>
      </section>
      <section className="about__section">
        <h2 className="about__title">Books</h2>
        <p className="about__text">Here are five of my favorite books.</p>
        <ul className="about__list">
          <li className="about__list_item">1. The Bible</li>
          <li className="about__list_item">2. The Hobbit</li>
          <li className="about__list_item">3. The Lord of the Rings</li>
          <li className="about__list_item">4. Otto of the Silverhand</li>
          <li className="about__list_item">5. The Song of Hiawatha</li>
        </ul>
      </section>
      <section className="about__section">
        <h2 className="about__title">Languages</h2>
        <p className="about__text">
          Here are five languages that I find fun studying.
        </p>
        <ul className="about__list">
          <li className="about__list_item">1. Gothic</li>
          <li className="about__list_item">2. Finnish</li>
          <li className="about__list_item">3. Latin</li>
          <li className="about__list_item">4. French</li>
          <li className="about__list_item">5. German</li>
        </ul>
      </section>
      <section className="about__section">
        <h2 className="about__title">Family</h2>
        <p className="about__text"></p>
      </section>
      <section className="about__section">
        <h2 className="about__title">Catholic Faith</h2>
        <p className="about__text"></p>
      </section>
      <section className="about__section">
        <h2 className="about__title">Work with Me</h2>
        <p className="about__text"></p>
      </section>
    </div>
  );
}

export default About;
