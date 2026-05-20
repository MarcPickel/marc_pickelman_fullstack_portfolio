import "./SEO.css";

import { NavLink } from "react-router-dom";

function SEO() {
  return (
    <div className="seo">
      <div className="seo__intro">
        <h1 className="seo__header_one">Search Engine Optimization</h1>
        <p className="seo__text">
          I have 3 years of professional SEO experience and, along with my{" "}
          <NavLink to="/">
            <span className="seo__link">software engineering</span>
          </NavLink>{" "}
          and{" "}
          <NavLink to="/writing">
            <span className="seo__link">writing</span>
          </NavLink>
          , continuously seek to improve my understanding and ability in this
          digital trade.
        </p>
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
            href="https://business.google.com/en-all/ad-tools/keyword-planner/"
            className="seo__link"
            target="_blank"
          >
            Google Keyword Planner
          </a>
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
          ,{" "}
          <a
            href="https://www.localfalcon.com/"
            className="seo__link"
            target="_blank"
          >
            LocalFalcon
          </a>
          ,{" "}
          <a
            href="https://www.seoptimer.com/backlink-checker/"
            className="seo__link"
            target="_blank"
          >
            SEOptimer Backlink Checker
          </a>
          ,{" "}
          <a
            href="https://www.brightlocal.com/"
            className="seo__link"
            target="_blank"
          >
            BrightLocal
          </a>
          ,{" "}
          <a href="https://moz.com/" className="seo__link" target="_blank">
            Moz
          </a>
        </p>
      </div>
      <div className="seo__container">
        <div className="seo__box">
          <h3 className="seo__title">SE SEO LinkedIn Campaign</h3>
          <p className="seo__text">January, 2026 - Present</p>
          <p className="seo__text">
            A dual-purpose campaign aimed at manipulating LinkedIn search
            results and boosting online interactions to promote my new
            full-stack software engineer profile in an effort to get hired.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SEO;
