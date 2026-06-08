import ProjectPage from "../ProjectPage.jsx";

import logo from "../../../assets/simple_psalter_logo.png";
import image from "../../../assets/simple-psalter-example.jpg";

function SimplePsalter() {
  return (
    <ProjectPage
      name="psalter"
      image={logo}
      title="The Simple Psalter App"
      description="How the Lowly Deeds of an Obscure Web Developer Supplied this Simple App with Much Holy Verse"
    >
      <p className="project__text">
        <span className="project__initial">C</span>harlemagne, the Father of
        Europe, loved the Psalter, or the Book of Psalms. It is said that, while
        at meal, he would have orators read to him beautiful literature,
        especially the psalms.
      </p>
      <div className="project__image-container">
        <img className="project__image" src={image} />
      </div>
      <p className="project__text">
        Inspired by this little known tale, I strove to make a simple
        application wherein a user could randomly generate one of the one
        hundred fifty psalms and pray with them.
      </p>
      <p className="project__text">
        The user may also choose to prayerfully read the psalms in different
        translations, such as the King James Version or the Douay-Rheims.
      </p>
      <p className="project__text">
        However, if it were not for the humble and diligent work of Tim Morgan,
        a self-taught web developer, this simple, little app would not be
        possible. Click{" "}
        <a
          href="https://bible-api.com/"
          className="project__link"
          target="_blank"
          title="Take me thither"
        >
          here
        </a>{" "}
        to see his Bible API. Click{" "}
        <a
          href="https://www.youtube.com/@TimMorgan/featured"
          className="project__link"
          target="_blank"
          title="Take me thither"
        >
          here
        </a>{" "}
        to view his YouTube channel.
      </p>
      <p className="project__text">
        Click{" "}
        <a
          href="https://marcpickel.github.io/simple_psalter_app/"
          className="project__link"
          target="_blank"
          title="Take me thither"
        >
          here
        </a>{" "}
        to visit the app.
      </p>
    </ProjectPage>
  );
}

export default SimplePsalter;
