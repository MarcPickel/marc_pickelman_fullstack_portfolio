import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__column">
        <div className="footer__content">
          <p className="footer__header">Marc Pickelman</p>
          <p className="footer__text">Full-Stack Web Developer</p>
          <p className="footer__text">Writing websites cover to cover</p>
        </div>
        <img className="footer__image" />
      </div>
      <div className="footer__column">
        <p className="footer__column-header">Pages</p>
        <a href="" className="">
          Home
        </a>
        <a href="" className="">
          SEO
        </a>
        <a href="" className="">
          Writing
        </a>
        <a href="" className="">
          About
        </a>
      </div>
      <div className="footer__column">
        <p className="footer__column-header">Get ahold of me</p>
        <a href="" className="">
          Phone
        </a>
        <a href="" className="">
          Email
        </a>
        <a href="" className="">
          LinkedIn
        </a>
        <a href="" className="">
          GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;
