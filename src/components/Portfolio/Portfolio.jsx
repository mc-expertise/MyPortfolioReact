import React from "react";
import "./Portfolio.css";
// import imgfit from "../../asset/FitClub.png";
// import imgfitM from "../../asset/FitClubMobile.png";
import imgfitC from "../../asset/fitcar.png";
// import imgho from "../../asset/HooBank.png";
// import imghoM from "../../asset/HooBankMobile.png";
import imghoC from "../../asset/hooC.png";
// import imgthree from "../../asset/Three.png";
// import imgthreeC from "../../asset/ThreeC.png";
// import imgthreeM from "../../asset/ThreeMobile.png";
import imgbar from "../../asset/bar.png";
import ProductImg from "../../asset/PageProduct.png";
const Portfolio = () => {
  // => Demo
  // const [Toggle, SetToggle] = useState(0);
  // const toggleTap = (index) => {
  //   SetToggle(index);
  // };
  // const [swich, setSwich] = useState(0);
  // const swichTab = (index) => {
  //   setSwich(index);
  // };
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>
      <div className="portfolio__container container grid">
        <div className="portfolio__content">
          <div className="portfolio__content-overview">
            <img src={imgfitC} alt="" className="portfolio__img" />
            <h3 className="portfolio__title">Fit Club Web</h3>
            <a
              href="https://github.com/MohamedCh99/FitClub_WebSite"
              className="portfolio__button"
              target={"_blank"}
              rel="noreferrer">
              Demo
              <i className="uil uil-arrow-right portfolio__button-icon"></i>
            </a>
          </div>
          <div className="portfolio__description">
            <div className="portfolio__description-overview">
              <h3 className="portfolio__description-title">Project Overview</h3>
              <p className="portfolio__description-para">
                Fit Club Site of bodybuilding and fitness that sells programs to
                have the ideal body during all your life!
              </p>
            </div>
            <div className="portfolio__description-tools">
              <h3 className="portfolio__description-title">Tools Used</h3>
              <ul className="ul">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Git</li>
                <li>Github</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="portfolio__content">
          <div className="portfolio__content-overview">
            <img src={imghoC} alt="" className="portfolio__img" />
            <h3 className="portfolio__title">HooBank Web</h3>
            <a
              href="https://github.com/MohamedCh99/WebSiteBank"
              className="portfolio__button"
              target="_blank"
              rel="noreferrer">
              Demo{" "}
              <i className="uil uil-arrow-right portfolio__button-icon"></i>
            </a>
          </div>

          <div className="portfolio__description">
            <div className="portfolio__description-overview">
              <h3 className="portfolio__description-title">Project Overview</h3>
              <p className="portfolio__description-para">
                Hoo Bank Site represents the new method of payment
              </p>
            </div>
            <div className="portfolio__description-tools">
              <h3 className="portfolio__description-title">Tools Used</h3>
              <ul className="ul">
                <li>HTML</li>
                <li>Tailwind</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Git</li>
                <li>Github</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="portfolio__content">
          <div className="portfolio__content-overview">
            <img src={ProductImg} alt="" className="portfolio__img" />
            <h3 className="portfolio__title">Product Page</h3>
            <a
              href="https://github.com/MohamedCh99/Product-Page"
              className="portfolio__button"
              target="_blank"
              rel="noreferrer">
              Demo
              <i className="uil uil-arrow-right portfolio__button-icon"></i>
            </a>
          </div>

          <div className="portfolio__description">
            <div className="portfolio__description-overview">
              <h3 className="portfolio__description-title">Project Overview</h3>
              <p className="portfolio__description-para">
                it's a Product Page, you can add the quantity you want and
                validate it then you can see the total price at the checkout.
              </p>
            </div>
            <div className="portfolio__description-tools">
              <h3 className="portfolio__description-title">Tools Used</h3>
              <ul className="ul">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Git</li>
                <li>Github</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="portfolio__content">
          <div className="portfolio__content-overview">
            <img src={imgbar} alt="" className="portfolio__img" />
            <h3 className="portfolio__title">Search Bar</h3>
            <a
              href="https://github.com/MohamedCh99/Javascript30Jours/tree/main/06%20-%20TypeAhead"
              className="portfolio__button"
              target="_blank"
              rel="noreferrer">
              Demo
              <i className="uil uil-arrow-right portfolio__button-icon"></i>
            </a>
          </div>
          <div className="portfolio__description">
            <div className="portfolio__description-overview">
              <h3 className="portfolio__description-title">Project Overview</h3>
              <p className="portfolio__description-para">
                Search bar helps you to search the city or state by name and see
                the population of each city or state searched .
              </p>
            </div>
            <div className="portfolio__description-tools">
              <h3 className="portfolio__description-title">Tools Used</h3>
              <ul className="ul">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>API</li>
                <li>Git</li>
                <li>Github</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className={
          Toggle === 1 ? "portfolio__modal active-modal" : "portfolio__modal"
        }>
        <div className="portfolio__layout"></div>
        <div className="portfolio__modal-content">
          <h3 className="portfolio__modal-title">Fit Club Web</h3>
          <i
            className="uil uil-times portfolio__modal-close"
            onClick={() => toggleTap(0)}></i>
          <div className="portfolio__modal-icons">
            <div
              className={
                swich === 0 ? "portfolio__active" : "portfolio__modal-icon1"
              }>
              <i class="uil uil-monitor" onClick={() => swichTab(0)}></i>
            </div>
            <div
              className={
                swich === 1 ? "portfolio__active" : "portfolio__modal-icon2"
              }>
              <i class="uil uil-mobile-android" onClick={() => swichTab(1)}></i>
            </div>
          </div>
          <img
            src={imgfit}
            alt=""
            className={
              swich === 0
                ? "active-modal portfolio__modal-img"
                : "portfolio__modal-img"
            }
          />
          <img
            src={imgfitM}
            alt=""
            className={
              swich === 1
                ? "active-modal portfolio__modal-img"
                : "portfolio__modal-img-mobile"
            }
          />
          <p className="portfolio__modal-description">
            Figma/Mockup Design to ReactJs, CSS3, Responsive.
          </p>
        </div>
      </div>

      <div
        className={
          Toggle === 2 ? "portfolio__modal active-modal" : "portfolio__modal"
        }>
        <div className="portfolio__layout"></div>
        <div className="portfolio__modal-content">
          <h3 className="portfolio__modal-title">Fit Club Web</h3>
          <i
            className="uil uil-times portfolio__modal-close"
            onClick={() => toggleTap(0)}></i>
          <div className="portfolio__modal-icons">
            <div
              className={
                swich === 0 ? "portfolio__active" : "portfolio__modal-icon1"
              }>
              <i class="uil uil-monitor" onClick={() => swichTab(0)}></i>
            </div>
            <div
              className={
                swich === 1 ? "portfolio__active" : "portfolio__modal-icon2"
              }>
              <i class="uil uil-mobile-android" onClick={() => swichTab(1)}></i>
            </div>
          </div>
          <img
            src={imgho}
            alt=""
            className={
              swich === 0
                ? "active-modal portfolio__modal-img"
                : "portfolio__modal-img "
            }
          />
          <img
            src={imghoM}
            alt=""
            className={
              swich === 1
                ? "active-modal portfolio__modal-img"
                : "portfolio__modal-img-mobile"
            }
          />
          <p className="portfolio__modal-description">
            Figma/Mockup Design to ReactJs, CSS3, Responsive.
          </p>
        </div>
      </div>

      <div
        className={
          Toggle === 3 ? "portfolio__modal active-modal" : "portfolio__modal"
        }>
        <div className="portfolio__layout"></div>
        <div className="portfolio__modal-content">
          <h3 className="portfolio__modal-title">Fit Club Web</h3>
          <i
            className="uil uil-times portfolio__modal-close"
            onClick={() => toggleTap(0)}></i>
          <div className="portfolio__modal-icons">
            <div
              className={
                swich === 0 ? "portfolio__active" : "portfolio__modal-icon1"
              }>
              <i class="uil uil-monitor" onClick={() => swichTab(0)}></i>
            </div>
            <div
              className={
                swich === 1 ? "portfolio__active" : "portfolio__modal-icon2"
              }>
              <i class="uil uil-mobile-android" onClick={() => swichTab(1)}></i>
            </div>
          </div>
          <img
            src={imgthree}
            alt=""
            className={
              swich === 0
                ? "active-modal portfolio__modal-img"
                : "portfolio__modal-img "
            }
          />
          <img
            src={imgthreeM}
            alt=""
            className={
              swich === 1
                ? "active-modal portfolio__modal-img"
                : "portfolio__modal-img-mobile"
            }
          />
          <p className="portfolio__modal-description">
            Figma/Mockup Design to ReactJs, CSS3, Responsive.
          </p>
        </div>
      </div> */}
    </section>
  );
};

export default Portfolio;
