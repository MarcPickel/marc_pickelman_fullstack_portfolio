import "./ProjectPage.css";

import { NavLink } from "react-router-dom";

function ProjectPage({ name, image, title, description, children }) {
  return (
    <div className={`project project_${name}`}>
      <div className="project__container">
        <img className="project__image" src={image} />
        <h1 className="project__title">{title}</h1>
        <p className="project__description">{description}</p>
      </div>
      <div className="project__section">{children}</div>
      <NavLink to="/">
        <button className="project__button" type="button">
          Back
        </button>
      </NavLink>
    </div>
  );
}

export default ProjectPage;
