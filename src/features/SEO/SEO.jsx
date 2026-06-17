import "./SEO.css";

import { NavLink } from "react-router-dom";

function SEO({ onRiddleClick }) {
  return (
    <div className="seo">
      <div className="seo__section seo__section_intro">
        <h1 className="seo__header_one">Search Engine Optimization</h1>
      </div>
      <section className="seo__section seo__section_work">
        <div>
          <h3 className="seo__title">
            <a
              href="https://www.linkedin.com/in/marc-pickelman/recent-activity/all/"
              className="seo__link"
              target="_blank"
              title="Take me thither"
            >
              SE SEO LinkedIn Campaign
            </a>
          </h3>
          <p className="seo__date">January, 2026 - Present</p>
          <p className="seo__text">
            A dual-purpose campaign aimed at manipulating LinkedIn search
            results and boosting online interactions to promote my new
            full-stack software engineer profile in an effort to connect with
            new people and provide the services of a web developer.
          </p>
        </div>
        <div>
          <h3 className="seo__title">
            <a
              onClick={onRiddleClick}
              className="seo__link"
              title="Take me thither"
            >
              St. Ives, Cornwall SEO Campaign
            </a>
          </h3>
          <p className="seo__date">1730 - Present</p>
          <p className="seo__text">
            A small campaign that serves but one part of an integral whole,
            meant for the purpose of meeting a twofold satisfaction, both for
            the user and the programmer. Incidentally, this clever strategy of
            utilizing a larger body of context beside a significantly individual
            keyword to suggest but not explicitly define a link between the two
            parts proves effective at producing confusion in the problem solver.
            It is, at any rate, destinctive in its ability to convey a false
            link whilst maintaining the power and importance of remaining
            consistent with keywords.
          </p>
        </div>
        <div>
          <h3 className="seo__title">
            <a
              href="https://www.tiger29.com/"
              className="seo__link"
              target="_blank"
              title="Take me thither"
            >
              SEO Specialist | Tiger29 | Sioux Falls, SD
            </a>
          </h3>
          <p className="seo__date">November, 2019 - August 2022</p>
          <p className="seo__text">
            A local SEO company that trained me in Organic SEO with local
            businesses. I utilized GBP, WordPress, Ahrefs, AWS, and numerous
            Google products to implement keyword and link strategies and
            manipulate search engines.
          </p>
        </div>
      </section>
      <section className="seo__section">
        <h2 className="seo__header_two">SEO Tools:</h2>
        <p className="seo__text">
          <a href="https://ahrefs.com/" className="seo__link" target="_blank">
            Ahrefs
          </a>
          ,{" "}
          <a
            href="https://www.semrush.com/"
            className="seo__link"
            target="_blank"
          >
            SemRush
          </a>
          ,{" "}
          <a
            href="https://developers.google.com/analytics"
            className="seo__link"
            target="_blank"
          >
            Google Analytics
          </a>
          ,{" "}
          <a
            href="https://search.google.com/search-console/about"
            className="seo__link"
            target="_blank"
          >
            Google Search Console
          </a>
          ,{" "}
          <a
            href="https://trends.google.com/trends/"
            className="seo__link"
            target="_blank"
          >
            Google Trends
          </a>
          ,{" "}
          <a href="https://tinypng.com/" className="seo__link" target="_blank">
            TinyPNG
          </a>
          .
        </p>
      </section>
    </div>
  );
}

export default SEO;
