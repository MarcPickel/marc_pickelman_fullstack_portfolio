import "./Writing.css";

import { NavLink } from "react-router-dom";

function Writing() {
  return (
    <div className="writing">
      <div className="writing__intro">
        <h1 className="writing__header_one">Writing</h1>
        <p className="writing__text">
          Writing, along with the love of stories, poetry, languages and,
          altogether, books, continues to play a significant role in my life's
          endeavors and has influenced many of my pursuits, such as{" "}
          <NavLink to="/">
            <span className="writing__link">software engineering</span>
          </NavLink>{" "}
          and{" "}
          <NavLink to="/seo">
            <span className="writing__link">search engine optimization</span>
          </NavLink>
          .
        </p>
        <h2 className="writing__header_two">Authors and Poets I Recommend:</h2>
        <p className="writing__text">
          <a
            href="https://en.wikipedia.org/wiki/Aesop"
            className="writing__link"
            target="_blank"
          >
            Aesop
          </a>
          ,{" "}
          <a
            href="https://en.wikipedia.org/wiki/Andrew_Lang"
            className="writing__link"
            target="_blank"
          >
            Andrew Lang
          </a>
          ,{" "}
          <a
            href="https://anthonyesolenauthor.com/"
            className="writing__link"
            target="_blank"
          >
            Anthony Esolen
          </a>
          ,{" "}
          <a
            href="https://en.wikipedia.org/wiki/Brothers_Grimm"
            className="writing__link"
            target="_blank"
          >
            Brothers Grimm
          </a>
          ,{" "}
          <a
            href="https://en.wikipedia.org/wiki/C._S._Lewis"
            className="writing__link"
            target="_blank"
          >
            C.S. Lewis
          </a>
          ,{" "}
          <a
            href="https://en.wikipedia.org/wiki/Carl_Sandburg"
            className="writing__link"
            target="_blank"
          >
            Carl Sandburg
          </a>
          ,{" "}
          <a
            href="https://en.wikipedia.org/wiki/Dante_Alighieri"
            className="writing__link"
            target="_blank"
          >
            Dante Alighieri
          </a>
          ,{" "}
          <a
            href="https://en.wikipedia.org/wiki/G._K._Chesterton"
            className="writing__link"
            target="_blank"
          >
            G.K. Chesterton
          </a>
          ,{" "}
          <a
            href="https://en.wikipedia.org/wiki/Hans_Christian_Andersen"
            className="writing__link"
            target="_blank"
          >
            Hans Christian Andersen
          </a>
          ,{" "}
          <a
            href="https://en.wikipedia.org/wiki/Henry_Wadsworth_Longfellow"
            className="writing__link"
            target="_blank"
          >
            Henry Wadsworth Longfellow
          </a>
          ,{" "}
          <a
            href="https://en.wikipedia.org/wiki/Homer"
            className="writing__link"
            target="_blank"
          >
            Homer
          </a>
          ,{" "}
          <a
            href="https://en.wikipedia.org/wiki/Howard_Pyle"
            className="writing__link"
            target="_blank"
          >
            Howard Pyle
          </a>
          ,{" "}
          <a
            href="https://en.wikipedia.org/wiki/John_Milton"
            className="writing__link"
            target="_blank"
          >
            John Milton
          </a>
          ,{" "}
          <a
            href="https://en.wikipedia.org/wiki/J._R._R._Tolkien"
            className="writing__link"
            target="_blank"
          >
            J.R.R. Tolkien
          </a>
          ,{" "}
          <a
            href="https://en.wikipedia.org/wiki/Nathaniel_Hawthorne"
            className="writing__link"
            target="_blank"
          >
            Nathaniel Hawthorne
          </a>
          ,{" "}
          <a
            href="https://en.wikipedia.org/wiki/Robert_Browning"
            className="writing__link"
            target="_blank"
          >
            Robert Browning
          </a>
          ,{" "}
          <a
            href="https://en.wikipedia.org/wiki/Robert_Frost"
            className="writing__link"
            target="_blank"
          >
            Robert Frost
          </a>
          ,{" "}
          <a
            href="https://en.wikipedia.org/wiki/Robert_W._Service"
            className="writing__link"
            target="_blank"
          >
            Robert W. Service
          </a>
          ,{" "}
          <a
            href="https://en.wikipedia.org/wiki/Rudyard_Kipling"
            className="writing__link"
            target="_blank"
          >
            Rudyard Kipling
          </a>
          ,{" "}
          <a
            href="https://en.wikipedia.org/wiki/Sigrid_Undset"
            className="writing__link"
            target="_blank"
          >
            Sigrid Undset
          </a>
          ,{" "}
          <a
            href="https://en.wikipedia.org/wiki/Washington_Irving"
            className="writing__link"
            target="_blank"
          >
            Washington Irving
          </a>
          ,{" "}
          <a
            href="https://en.wikipedia.org/wiki/William_Shakespeare"
            className="writing__link"
            target="_blank"
          >
            William Shakespeare
          </a>
          , and many more besides.
        </p>
        <p className="writing__text">
          {" "}
          For a fuller list of recommended books, see{" "}
          <a
            href="https://www.faithandculture.com/home/2019/1/15-the-legacy-of-john-senior"
            className="writing__link"
            target="_blank"
          >
            John Senior's
          </a>{" "}
          <a
            href="https://seascs.net/documents/2017/10/John%20Senior%20The%20Thousand%20Good%20Books%20List.pdf"
            className="writing__link"
            target="_blank"
          >
            "The Thousand Good Books."
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
