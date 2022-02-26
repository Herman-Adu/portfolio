import React from "react"
import { Link } from "gatsby"
import { SocialLinks } from ".."

const Footer = () => {
  return (
    <footer className="uk-section uk-section-secondary uk-padding-remove-bottom">
      <div className="uk-container">
        <div className="uk-grid uk-grid-large" uk-grid="true">
          <div className="uk-width-1-2@m">
            <h2>AduDev Personal Portfolio</h2>
            <p>
              Provide expert development and consulting Services for start-up
              and small to medium-sized businesses, helping them realise their
              online potential, utilising the latest progressive technologies to
              date. Contact us: info@adudev.co.uk
              <a
                className="adu-footer-link"
                href="mailto:info@adudev.co.uk"
                target="_blank"
                rel="noreferrer"
                alt=""
              >
                link
              </a>
            </p>
            <SocialLinks />
          </div>

          <div className="uk-width-1-6@m">
            <h5>ABOUT</h5>
            <ul className="uk-list">
              <li>
                <Link className="adu-footer-link" to="/#about-me">
                  About Me
                </Link>
              </li>
              <li>
                <Link className="adu-footer-link" to="/#technologies">
                  Technologies
                </Link>
              </li>
              <li>
                <Link className="adu-footer-link" to="/#timeline">
                  Timeline
                </Link>
              </li>
              <li>
                <a
                  className="adu-footer-link"
                  href="https://www.adudev.co.uk/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="adudev"
                  alt="adudev"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="uk-width-1-6@m">
            <h5>SERVICES</h5>
            <ul className="uk-list">
              <li>
                <Link className="adu-footer-link" to="/services">
                  consultation
                </Link>
              </li>
              <li>
                <Link className="adu-footer-link" to="/services">
                  prices
                </Link>
              </li>
              <li>
                <Link className="adu-footer-link" to="/services">
                  plans
                </Link>
              </li>
            </ul>
          </div>

          <div className="uk-width-1-6@m">
            <h5>BUSINESS</h5>
            <ul className="uk-list">
              <li>
                <Link className="adu-footer-link" to="/services">
                  Terms
                </Link>
              </li>
              <li>
                <Link className="adu-footer-link" to="/services">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="uk-flex uk-flex-between uk-flex-wrap">
          <div className="uk-margin-top uk-margin-bottom">
            © AduDev Development Services - 2021 All Rights Reserved
          </div>

          <div className="uk-margin-top uk-margin-bottom">
            <a
              className="adu-footer-link"
              href="https://adudev.co.uk"
              target="_blank rel=”noopener”"
            >
              Designed and built by AduDev
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
