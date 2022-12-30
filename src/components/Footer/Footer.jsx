import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__logo">
          <div className="footer__logo-img"></div>Moha - Code
        </h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/mohamed.chouati_/"
            className="footer__social-icon"
            target="_blank">
            <i class="bx bxl-instagram"></i>
          </a>

          <a
            href="https://web.facebook.com/mohamed.chouati.1004"
            className="footer__social-icon"
            target="_blank">
            <i class="bx bxl-facebook"></i>
          </a>

          <a
            href="https://twitter.com/MohamedChouati5"
            className="footer__social-icon"
            target="_blank">
            <i class="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; MohaCode. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
