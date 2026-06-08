import ProjectPage from "../ProjectPage.jsx";

import logo from "../../../assets/logo_spots.svg";
import image from "../../../assets/spots-example.jpg";

function Spots() {
  return (
    <ProjectPage
      name="spots"
      image={logo}
      title="Spots App"
      description="A social media application that allows users to share pictures they have taken of their favorite spots"
    >
      <p className="project__text">
        <span className="project__initial">B</span>uilt using the usual suspects
        - HTML, CSS, and JavaScript - this project is a social media app that
        allows users to share spots they have taken pictures of, perchance even
        their favorite spots.
      </p>
      <div className="project__image-container">
        <img className="project__image" src={image} />
      </div>
      <p className="project__text">
        The app features a simple profile located at the top of the page,
        wherein the profile image, name, and description may be edited.
      </p>
      <p className="project__text">
        Furthermore, images of spots may be posted, liked, and deleted. Clicking
        on a card expands an image in a modal, which eases in and out upon
        opening and closing.
      </p>
      <p className="project__text">
        Click{" "}
        <a
          href="https://github.com/MarcPickel/se_project_spots"
          className="project__link"
          target="_blank"
          title="Take me thither"
        >
          here
        </a>{" "}
        to see the project's frontend repository.
      </p>
    </ProjectPage>
  );
}

export default Spots;
