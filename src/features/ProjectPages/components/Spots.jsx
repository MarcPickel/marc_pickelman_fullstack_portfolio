import ProjectPage from "../ProjectPage.jsx";
import logo from "../../../assets/logo_spots.svg";

function Spots() {
  return (
    <ProjectPage
      name="spots"
      image={logo}
      title="Spots App"
      description="A social media application that allows users to share pictures they have taken of their favorite spots"
    >
      <p className="project__text">
        <span className="project__initial"></span>
      </p>
      <p className="project__text"></p>
      <p className="project__text"></p>
      <p className="project__text"></p>
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
