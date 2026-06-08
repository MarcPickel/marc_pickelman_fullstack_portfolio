import ProjectPage from "../ProjectPage.jsx";
import logo from "../../../assets/msfr__logo_big.svg";

function MSFR() {
  return (
    <ProjectPage
      name="msfr"
      image={logo}
      title="Man's Search for Reading Website"
      description="How a Men's Book Club Began in Kansas City, Branched in Sioux Falls, and Inspired a Final Project"
    >
      <p className="project__text">
        <span className="project__initial">G</span>ood books are aplenty in the
        world and made easily available and cheap, thanks to the many
        technological advances in printing and online shopping. And yet, in an
        age of abundant literature, few men actually read.
      </p>
      <p className="project__text">
        Tyler Supalla, along with several other fellows who were all seriously
        reading and discussing good books, felt that something was missing,
        namely, a shared commitment and a space where men could read together
        with intention.
      </p>
      <p className="project__text">
        Thus they established in Kansas City a book club called{" "}
        <span className="project__text_italic">Man's Search for Reading</span>,
        coined after Viktor Frankl's book,{" "}
        <span className="project__text_italic">Man's Search for Meaning</span>.
      </p>
      <p className="project__text">
        Today, there spreads a branch from this same men's book club in Sioux
        Falls. The sister of the founder proposed that it would be worthwhile to
        get a branch started here. I took on her proposal and lead this branch.
      </p>
      <p className="project__text">
        Thus, I wanted to make a website for the men's book club. The current
        website, hosted on GitHub Pages, marks the end of my{" "}
        <a
          href="https://tripleten.com/"
          className="project__link"
          target="_blank"
          title="Take me thither"
        >
          TripleTen
        </a>{" "}
        Software Engineering Bootcamp as my final project.
      </p>
      <p className="project__text">
        Currently, the website possesses a home page, a page to search for books
        via the{" "}
        <a
          href="https://openlibrary.org/developers/api"
          className="project__link"
          target="_blank"
          title="Take me thither"
        >
          Open Library API
        </a>
        , to temporarily favorite books to read later, and information about
        several authors and poets.
      </p>
      <p className="project__text">
        I have plans to simplify the website and allow any seeking man to join
        the book club by signing up via email.
      </p>
      <p className="project__text">
        Click{" "}
        <a
          href="https://marcpickel.github.io/se_final_project_frontend/#/"
          className="project__link"
          target="_blank"
          title="Take me thither"
        >
          here
        </a>{" "}
        to visit the current website.
      </p>
    </ProjectPage>
  );
}

export default MSFR;
