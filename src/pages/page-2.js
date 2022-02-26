import * as React from "react"
import { Link } from "gatsby"
import HeroImage from "../images/hero.jpg"
import Image1 from "../images/marketing-2.svg"
import Logo from "../images/marketing-logo.svg"
import Marketing1 from "../images/marketing-1.svg"
import Marketing2 from "../images/marketing-1.svg"
import Marketing3 from "../images/marketing-1.svg"
import Marketing4 from "../images/marketing-1.svg"
import Marketing5 from "../images/marketing-1.svg"
import Marketing6 from "../images/marketing-1.svg"
import Marketing7 from "../images/marketing-1.svg"
import Marketing8 from "../images/marketing-8.svg"
import Marketing9 from "../images/marketing-9.svg"
import Testimonial from "../images/testimonial.jpg"

import logo1 from "../images/logo-1.svg"
import logo2 from "../images/logo-2.svg"
import logo3 from "../images/logo-3.svg"
import logo4 from "../images/logo-4.svg"
import logo5 from "../images/logo-5.svg"
import logo6 from "../images/logo-6.svg"
import logo7 from "../images/logo-7.svg"
import logo8 from "../images/logo-8.svg"
import logo9 from "../images/logo-9.svg"

import { Layout, Seo } from "../components"

const SecondPage = () => (
  <>
    {/* <!-- TOP --> */}
    <div className="top-wrap uk-position-relative uk-light uk-background-secondary">
      {/* <!-- NAV --> */}
      <div
        //class="nav"
        data-uk-sticky="cls-active: uk-background-secondary uk-box-shadow-medium; top: 100vh; animation: uk-animation-slide-top"
      >
        <div className="uk-container">
          <nav
            className="uk-navbar uk-navbar-container uk-navbar-transparent"
            uk-navbar="true"
          >
            <div className="uk-navbar-left">
              <div className="uk-navbar-item uk-padding-remove-horizontal">
                <a className="uk-logo" title="Logo" href="">
                  <img src={Logo} alt="Logo" />
                </a>
              </div>
            </div>
            <div className="uk-navbar-right">
              <ul className="uk-navbar-nav uk-visible@s">
                <li className="uk-active uk-visible@m">
                  <a href="" uk-icon="home"></a>
                </li>
                <li>
                  <a href="">Features</a>
                </li>
                <li>
                  <a href="#" uk-icon="chevron-down">
                    Products
                  </a>
                  <div className="uk-navbar-dropdown">
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                      <li>
                        <a href="#">Big Data</a>
                      </li>
                      <li>
                        <a href="#">Marketing</a>
                      </li>
                      <li>
                        <a href="#">Analytics</a>
                      </li>
                      <li>
                        <a href="#">AI Lab</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="">Testimonials</a>
                </li>
              </ul>
              <a
                className="uk-navbar-toggle uk-navbar-item uk-hidden@s"
                uk-toggle="true"
                uk-navbar-toggle-icon="true"
                href="#offcanvas-nav"
              ></a>
            </div>
          </nav>
        </div>
      </div>
      {/* <!-- /NAV --> */}

      <div className="uk-cover-container uk-light uk-flex uk-flex-middle top-wrap-height">
        {/* <!-- TOP CONTAINER --> */}
        <div
          className="uk-container uk-flex-auto top-container uk-position-relative uk-margin-medium-top"
          uk-parallax="y: 0,50; easing:0; opacity:0.2"
        >
          <div
            className="uk-width-1-2@s"
            uk-scrollspy="cls: uk-animation-slide-right-medium; target: > *; delay: 150"
          >
            <h6 className="uk-text-primary uk-margin-small-bottom">RESEARCH</h6>
            <h1 className="uk-margin-remove-top">Innovation in your hands.</h1>
            <p className="subtitle-text uk-visible@s">
              Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco{" "}
            </p>
            <a
              href="#"
              title="Learn More"
              className="uk-button uk-button-primary uk-border-pill"
              uk-scrollspy-className="uk-animation-fade"
            >
              LEARN MORE
            </a>
          </div>
        </div>
        {/* 	<!-- /TOP CONTAINER --> */}
        {/* <!-- TOP IMAGE --> */}
        <img
          sizes="100vw"
          src={HeroImage}
          alt=""
          uk-cover="true"
          uk-img="true"
          uk-parallax="opacity: 1,0.1; easing:0"
        />
        {/* <!-- /TOP IMAGE --> */}
      </div>
      <div className="uk-position-bottom-center uk-position-medium uk-position-z-index uk-text-center">
        <a
          href="#content"
          uk-scroll="duration: 500"
          uk-icon="icon: arrow-down; ratio: 2"
        ></a>
      </div>
    </div>
    {/* <!-- /TOP --> */}

    <section id="content" className="uk-section uk-section-default">
      <div className="uk-container">
        <div className="uk-section uk-section-small uk-padding-remove-top">
          <ul
            className="uk-subnav uk-subnav-pill uk-flex uk-flex-center"
            uk-switcher="connect: .uk-switcher; animation: uk-animation-fade"
          >
            <li>
              <a className="uk-border-pill" href="#">
                Discover
              </a>
            </li>
            <li>
              <a className="uk-border-pill" href="#">
                Benefits
              </a>
            </li>
            <li>
              <a className="uk-border-pill" href="#">
                Features
              </a>
            </li>
          </ul>
        </div>

        <ul className="uk-switcher uk-margin">
          <li>
            <div
              className="uk-grid uk-child-width-1-2@l uk-flex-middle"
              uk-grid="true"
              uk-scrollspy="target: > div; cls: uk-animation-slide-left-medium"
            >
              <div>
                <img src={Marketing1} alt="" uk-img="true" />
              </div>
              <div uk-scrollspy-className="uk-animation-slide-right-medium">
                <h6 className="uk-text-primary">MAIN REASONS</h6>
                <h2 className="uk-margin-small-top">
                  Take decisions with real time data based on users interaction.
                </h2>
                <p className="subtitle-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <div className="uk-grid uk-child-width-1-2@s" uk-grid="true">
                  <div>
                    <h4>Great stuff</h4>
                    <p>
                      Ut enim ad minim veniam, quis nostrud magna aliqua
                      exercitation. <a href="">Learn more.</a>
                    </p>
                  </div>
                  <div>
                    <h4>Data analysis</h4>
                    <p>
                      Ut enim ad minim veniam, quis nostrud magna aliqua
                      exercitation. <a href="">Learn more.</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className="uk-grid uk-child-width-1-2@l uk-flex-middle"
              uk-grid="true"
              uk-scrollspy="target: > div; cls: uk-animation-slide-left-medium"
            >
              <div>
                <img src={Marketing8} alt="" uk-img="true" />
              </div>
              <div uk-scrollspy-className="uk-animation-slide-right-medium">
                <h6 className="uk-text-primary">MAIN REASONS</h6>
                <h2 className="uk-margin-small-top">
                  Take decisions with real time data based on users interaction.
                </h2>
                <p className="subtitle-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <div className="uk-grid uk-child-width-1-2@s" uk-grid="true">
                  <div>
                    <h4>Great stuff</h4>
                    <p>
                      Ut enim ad minim veniam, quis nostrud magna aliqua
                      exercitation. <a href="">Learn more.</a>
                    </p>
                  </div>
                  <div>
                    <h4>Data analysis</h4>
                    <p>
                      Ut enim ad minim veniam, quis nostrud magna aliqua
                      exercitation. <a href="">Learn more.</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className="uk-grid uk-child-width-1-2@l uk-flex-middle"
              uk-grid="true"
              uk-scrollspy="target: > div; cls: uk-animation-slide-left-medium"
            >
              <div>
                <img src={Marketing9} alt="" uk-img="true" />
              </div>
              <div uk-scrollspy-className="uk-animation-slide-right-medium">
                <h6 className="uk-text-primary">MAIN REASONS</h6>
                <h2 className="uk-margin-small-top">
                  Take decisions with real time data based on users interaction.
                </h2>
                <p className="subtitle-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <div className="uk-grid uk-child-width-1-2@s" uk-grid="true">
                  <div>
                    <h4>Great stuff</h4>
                    <p>
                      Ut enim ad minim veniam, quis nostrud magna aliqua
                      exercitation. <a href="">Learn more.</a>
                    </p>
                  </div>
                  <div>
                    <h4>Data analysis</h4>
                    <p>
                      Ut enim ad minim veniam, quis nostrud magna aliqua
                      exercitation. <a href="">Learn more.</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section className="uk-section uk-section-secondary uk-section-large">
      <div className="uk-container">
        <div className="uk-grid uk-child-width-1-2@l uk-flex-middle">
          <div>
            <h6>SIMPLIFY THINGS</h6>
            <h2 className="uk-margin-small-top uk-h1">
              Manage all your data from one place only.
            </h2>
            <p className="subtitle-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              href="#"
              className="uk-button uk-button-primary uk-border-pill"
              uk-icon="arrow-right"
            >
              LEARN MORE
            </a>
          </div>
          <div uk-scrollspy="cls: uk-animation-fade">
            {/* <Image1 /> */}
            <img src={Image1} uk-img="true" alt="Image" />
          </div>
        </div>
      </div>
    </section>
    <section className="uk-cover-container overlay-wrap">
      <img
        sizes="100vw"
        src={Testimonial}
        alt=""
        uk-cover="true"
        uk-img="true"
      />
      <div className="uk-container uk-position-z-index uk-position-relative uk-section uk-section-xlarge uk-light">
        <div className="uk-grid uk-flex-right">
          <div
            className="uk-width-2-5@m"
            uk-parallax="y: 50,-50; easing: 0; media:@l"
          >
            <h6>TESTIMONIALS</h6>
            <div
              className="uk-position-relative uk-visible-toggle uk-light"
              uk-slider="easing: cubic-bezier(.16,.75,.47,1)"
            >
              <ul className="uk-slider-items uk-child-width-1-1">
                <li>
                  <div uk-slider-parallax="opacity: 0.2,1,0.2">
                    <h2 className="uk-margin-small-top">
                      "Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur"
                    </h2>
                    <p className="uk-text-meta">
                      Lorena Smith, founder of Some Cool Startup
                    </p>
                  </div>
                </li>
                <li>
                  <div uk-slider-parallax="opacity: 0.2,1,0.2">
                    <h2 className="uk-margin-small-top">
                      "Aute irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur"
                    </h2>
                    <p className="uk-text-meta">
                      Lorena Smith, founder of Some Cool Startup
                    </p>
                  </div>
                </li>
                <li>
                  <div uk-slider-parallax="opacity: 0.2,1,0.2">
                    <h2 className="uk-margin-small-top">
                      "Irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur"
                    </h2>
                    <p className="uk-text-meta">
                      Lorena Smith, founder of Some Cool Startup
                    </p>
                  </div>
                </li>
              </ul>
              <ul className="uk-slider-nav uk-dotnav uk-margin-top">
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- BOTTOM --> */}
    <section className="uk-section uk-section-default">
      <div className="uk-container uk-container-xsmall uk-text-center uk-section uk-padding-remove-top">
        <h5 className="uk-text-primary">ANALYTICS</h5>
        <h2 className="uk-margin-remove uk-h1">
          Know the behavior of your potential customers.
        </h2>
      </div>
      <div className="uk-container">
        <div
          className="uk-grid uk-grid-large uk-child-width-1-3@m"
          uk-grid="true"
          uk-scrollspy="target: > div; delay: 150; cls: uk-animation-slide-bottom-medium"
        >
          <div className="uk-text-center">
            <img src={Marketing2} uk-img="true" alt="Image" />
            <h4 className="uk-margin-small-bottom uk-margin-top uk-margin-remove-adjacent">
              Lorem ipsum dolor sit amet
            </h4>
            <p>
              24/7 support. We’re always here for you no matter what time of
              day.
            </p>
          </div>
          <div className="uk-text-center">
            <img src={Marketing3} uk-img="true" alt="Image" />
            <h4 className="uk-margin-small-bottom uk-margin-top uk-margin-remove-adjacent">
              Lorem ipsum dolor sit amet
            </h4>
            <p>
              24/7 support. We’re always here for you no matter what time of
              day.
            </p>
          </div>
          <div className="uk-text-center">
            <img src={Marketing5} uk-img="true" alt="Image" />
            <h4 className="uk-margin-small-bottom uk-margin-top uk-margin-remove-adjacent">
              Lorem ipsum dolor sit amet
            </h4>
            <p>
              24/7 support. We’re always here for you no matter what time of
              day.
            </p>
          </div>
          <div className="uk-text-center">
            <img src={Marketing5} uk-img="true" alt="Image" />
            <h4 className="uk-margin-small-bottom uk-margin-top uk-margin-remove-adjacent">
              Lorem ipsum dolor sit amet
            </h4>
            <p>
              24/7 support. We’re always here for you no matter what time of
              day.
            </p>
          </div>
          <div className="uk-text-center">
            <img src={Marketing4} uk-img="true" alt="Image" />
            <h4 className="uk-margin-small-bottom uk-margin-top uk-margin-remove-adjacent">
              Lorem ipsum dolor sit amet
            </h4>
            <p>
              24/7 support. We’re always here for you no matter what time of
              day.
            </p>
          </div>
          <div className="uk-text-center">
            <img src={Marketing3} uk-img="true" alt="Image" />
            <h4 className="uk-margin-small-bottom uk-margin-top uk-margin-remove-adjacent">
              Lorem ipsum dolor sit amet
            </h4>
            <p>
              24/7 support. We’re always here for you no matter what time of
              day.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- BOTTOM --> */}
    {/* <!-- LOGOS --> */}
    <div className="uk-section uk-section-small uk-section-muted">
      <div className="uk-container uk-container-small">
        <div
          className="uk-grid uk-child-width-1-4 uk-child-width-expand@m logos-grid"
          uk-grid="true"
          uk-scrollspy="cls: uk-animation-scale-down; target: > div > img; delay: 100"
        >
          <div>
            <img src={logo1} uk-img="true" alt="Image" />
          </div>
          <div>
            <img src={logo2} uk-img="true" alt="Image" />
          </div>
          <div>
            <img src={logo3} uk-img="true" alt="Image" />
          </div>
          <div>
            <img src={logo4} uk-img="true" alt="Image" />
          </div>
          <div>
            <img src={logo5} uk-img="true" alt="Image" />
          </div>
          <div>
            <img src={logo6} uk-img="true" alt="Image" />
          </div>
          <div>
            <img src={logo7} uk-img="true" alt="Image" />
          </div>
          <div>
            <img src={logo7} uk-img="true" alt="Image" />
          </div>
        </div>
      </div>
    </div>
    {/* <!-- /LOGOS --> */}
    {/* <!-- FOOTER --> */}
    <footer className="uk-section uk-section-secondary uk-padding-remove-bottom">
      <div className="uk-container">
        <div className="uk-grid uk-grid-large" uk-grid="true">
          <div className="uk-width-1-2@m">
            <h5>OUR COMPANY</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud cillum dolore eu fugiat nulla
              contact to:{" "}
              <a href="#" title="">
                info@company.com
              </a>
            </p>
            <div>
              <a href="" className="uk-icon-button" uk-icon="twitter"></a>
              <a href="" className="uk-icon-button" uk-icon="facebook"></a>
              <a href="" className="uk-icon-button" uk-icon="instagram"></a>
            </div>
          </div>
          <div className="uk-width-1-6@m">
            <h5>PRODUCTS</h5>
            <ul className="uk-list">
              <li>Big Data</li>
              <li>Marketing</li>
              <li>Analytics</li>
              <li>AI Lab</li>
            </ul>
          </div>
          <div className="uk-width-1-6@m">
            <h5>OUR COMPANY</h5>
            <ul className="uk-list">
              <li>Team</li>
              <li>Work</li>
              <li>Culture</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="uk-width-1-6@m">
            <h5>OUR OFFICES</h5>
            <ul className="uk-list">
              <li>London</li>
              <li>Chicago</li>
              <li>Dubai</li>
              <li>Brussels</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="uk-text-center uk-padding uk-padding-remove-horizontal">
        <span className="uk-text-small uk-text-muted">
          © 2019 Marketing Layout -{" "}
          <a href="https://github.com/zzseba78/Kick-Off">Created by KickOff</a>{" "}
          | Built with{" "}
          <a
            href="http://getuikit.com"
            title="Visit UIkit 3 site"
            target="_blank"
            uk-tooltip
          >
            <span uk-icon="uikit"></span>
          </a>
        </span>
      </div>
    </footer>
    {/* <!-- /FOOTER --> */}
    {/* <!-- OFFCANVAS --> */}
    <div id="offcanvas-nav" uk-offcanvas="flip: true; overlay: false">
      <div className="uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-slide">
        <button
          className="uk-offcanvas-close uk-close uk-icon"
          type="button"
          uk-close="true"
        ></button>
        <ul className="uk-nav uk-nav-default">
          <li className="uk-active">
            <a href="#">Active</a>
          </li>
          <li className="uk-parent">
            <a href="#">Parent</a>
            <ul className="uk-nav-sub">
              <li>
                <a href="#">Sub item</a>
              </li>
              <li>
                <a href="#">Sub item</a>
              </li>
            </ul>
          </li>
          <li className="uk-nav-header">Header</li>
          <li>
            <a href="#js-options">
              <span
                className="uk-margin-small-right uk-icon"
                uk-icon="icon: table"
              ></span>{" "}
              Item
            </a>
          </li>
          <li>
            <a href="#">
              <span
                className="uk-margin-small-right uk-icon"
                uk-icon="icon: thumbnails"
              ></span>{" "}
              Item
            </a>
          </li>
          <li className="uk-nav-divider"></li>
          <li>
            <a href="#">
              <span
                className="uk-margin-small-right uk-icon"
                uk-icon="icon: trash"
              ></span>{" "}
              Item
            </a>
          </li>
        </ul>
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    {/* <!-- /OFFCANVAS --> */}
  </>
)

export default SecondPage
