import "./Story.css";

import laptop from "../../../../assets/laptop.svg";
import github from "../../../../assets/Github.svg";
import linkedin from "../../../../assets/Linkedin.svg";

function Story() {
  return (
    <div className="story__content">
      <div className="story__column">
        <p className="story__text">
          What's the story with your website? Whether it's at the beginning,
          middle, or end, I'm happy to help with finishing it. Shoot me an{" "}
          <a href="mailto:marcpc@att.net" className="story__link">
            email
          </a>{" "}
          or get on the{" "}
          <a href="tel:+19063228501" className="story__link">
            horn
          </a>
          !
        </p>
        <p className="story__text">You can also reach me online!</p>
        <div className="story__row">
          <a
            href="https://www.linkedin.com/in/marc-pickelman"
            title="Marc's LinkedIn"
            target="_blank"
          >
            <img className="story__icon" src={linkedin} />
          </a>
          <a
            href="https://github.com/MarcPickel"
            title="Marc's GitHub"
            target="_blank"
          >
            <img className="story__icon" src={github} />
          </a>
        </div>
      </div>
      <img className="story__image" src={laptop} />
    </div>
  );
}

export default Story;
