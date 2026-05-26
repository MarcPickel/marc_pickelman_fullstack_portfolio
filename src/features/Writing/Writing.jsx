import "./Writing.css";

import { NavLink } from "react-router-dom";

function Writing() {
  return (
    <div className="writing">
      <div className="writing__intro">
        <h1 className="writing__header_one">Writing</h1>
        <p className="writing__text">
          I have 3 years of professional writing experience and, along with my{" "}
          <NavLink to="/">
            <span className="writing__link">software engineering</span>
          </NavLink>{" "}
          and{" "}
          <NavLink to="/writing">
            <span className="writing__link">writing</span>
          </NavLink>
          , continuously seek to improve my understanding and ability in this
          digital trade.
        </p>
        <h2 className="writing__header_two">writing Tools:</h2>
        <p className="writing__text">
          <a
            href="https://ahrefs.com/"
            className="writing__link"
            target="_blank"
          >
            Ahrefs
          </a>
          ,{" "}
          <a
            href="https://www.semrush.com/"
            className="writing__link"
            target="_blank"
          >
            SemRush
          </a>
          ,{" "}
          <a
            href="https://developers.google.com/analytics"
            className="writing__link"
            target="_blank"
          >
            Google Analytics
          </a>
          ,{" "}
          <a
            href="https://search.google.com/search-console/about"
            className="writing__link"
            target="_blank"
          >
            Google Search Console
          </a>
          ,{" "}
          <a
            href="https://business.google.com/en-all/ad-tools/keyword-planner/"
            className="writing__link"
            target="_blank"
          >
            Google Keyword Planner
          </a>
          ,{" "}
          <a
            href="https://trends.google.com/trends/"
            className="writing__link"
            target="_blank"
          >
            Google Trends
          </a>
          ,{" "}
          <a
            href="https://tinypng.com/"
            className="writing__link"
            target="_blank"
          >
            TinyPNG
          </a>
          ,{" "}
          <a
            href="https://www.localfalcon.com/"
            className="writing__link"
            target="_blank"
          >
            LocalFalcon
          </a>
          ,{" "}
          <a
            href="https://www.writingptimer.com/backlink-checker/"
            className="writing__link"
            target="_blank"
          >
            writingptimer Backlink Checker
          </a>
          ,{" "}
          <a
            href="https://www.brightlocal.com/"
            className="writing__link"
            target="_blank"
          >
            BrightLocal
          </a>
          ,{" "}
          <a href="https://moz.com/" className="writing__link" target="_blank">
            Moz
          </a>
        </p>
      </div>
      <div className="writing__container">
        <div className="writing__box">
          <h3 className="writing__title">SE writing LinkedIn Campaign</h3>
          <p className="writing__date">January, 2026 - Present</p>
          <p className="writing__text">
            A dual-purpose campaign aimed at manipulating LinkedIn search
            results and boosting online interactions to promote my new
            full-stack software engineer profile in an effort to connect with
            new people and provide the services of a web developer.
          </p>
        </div>
        <div className="writing__box">
          <h3 className="writing__title">DIY writing Campaign</h3>
          <p className="writing__date">2025 - Present</p>
          <p className="writing__text">
            A campaign to build a product that would help non-writing experts
            map out keyword and link strategies in externally sourced posts to
            improve search results for their website. It would allow experts in
            particular fields to write knowledgeable and experienced content
            online while getting guidance in search engine optimization, instead
            of an expert in writing writing content about something he has no
            experience in.
          </p>
        </div>
        <div className="writing__box">
          <h3 className="writing__title">
            writing Specialist | Tiger29 | Sioux Falls, SD
          </h3>
          <p className="writing__date">November, 2019 - August 2022</p>
          <p className="writing__text">
            A local writing company that trained me in Organic writing with
            local businesses. I utilized GBP, WordPress, Ahrefs, AWS, and
            numerous Google products to implement keyword and link strategies
            and manipulate search engines.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Writing;
