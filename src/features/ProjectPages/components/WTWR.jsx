import ProjectPage from "../ProjectPage.jsx";
import logo from "../../../assets/wtwr-logo.svg";

function WTWR() {
  return (
    <ProjectPage
      name="wtwr"
      image={logo}
      title="What to Wear App"
      description="A clothing application that tells you what to wear based on your local weather"
    >
      <p className="project__text">
        <span className="project__initial">C</span>omplete with a frontend made
        using React.js and a backend made using Express.js, MongoDB, Nginx, and
        Google Cloud, this app suggests clothing options to the user based on
        the local weather.
      </p>
      <p className="project__text">
        The app is also complete with testing, using Jest, and registration and
        login functionality, as well as the option to edit your profile avatar
        and information.
      </p>
      <p className="project__text">
        The app also serves as a sort of social media platform, allowing
        multiple users to add images of various clothing items based on the
        weather, then share them in a feed for other users to like.
      </p>
      <p className="project__text">
        Navigating to your profile page, the app distinguishes between the
        images that you have added and the images that you have liked that other
        users have added.
      </p>
      <p className="project__text">
        Click{" "}
        <a
          href="https://github.com/MarcPickel/se_project_react"
          className="project__link"
          target="_blank"
          title="Take me thither"
        >
          here
        </a>{" "}
        to see the project's frontend repository.
      </p>
      <p className="project__text">
        Click{" "}
        <a
          href="https://github.com/MarcPickel/se_project_express"
          className="project__link"
          target="_blank"
          title="Take me thither"
        >
          here
        </a>{" "}
        to see the project's backend repository.
      </p>
    </ProjectPage>
  );
}

export default WTWR;
