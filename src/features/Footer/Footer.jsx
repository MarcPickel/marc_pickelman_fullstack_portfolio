import "./Footer.css";

import { NavLink } from "react-router-dom";

function Footer() {
  const handleTopScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer__column">
        <NavLink to="/" onClick={handleTopScroll}>
          <h3 className="footer__header">Marc Pickelman</h3>
        </NavLink>
        <p className="footer__text">Full-Stack Web Developer</p>
        <p className="footer__text">Writing websites from cover to cover</p>
      </div>
      <div className="footer__column">
        <p className="footer__column-header">Pages</p>
        <NavLink to="/" onClick={handleTopScroll}>
          <p className="footer__link">Home</p>
        </NavLink>
        <NavLink to="/seo">
          <p className="footer__link">SEO</p>
        </NavLink>
        <NavLink to="/writing">
          <p className="footer__link">Writing</p>
        </NavLink>
        <NavLink to="">
          <p className="footer__link">Moria</p>
        </NavLink>
        <NavLink to="/about">
          <p className="footer__link">About</p>
        </NavLink>
      </div>
      <div className="footer__column">
        <p className="footer__column-header">Get ahold of me</p>
        <a href="mailto:marcpc@att.net" className="footer__link">
          Email
        </a>
        <a href="tel:+19063228501" className="footer__link">
          Phone
        </a>
        <a
          href="https://www.linkedin.com/in/marc-pickelman"
          className="footer__link"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/MarcPickel"
          className="footer__link"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;
