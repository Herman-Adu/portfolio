import React from "react"
//import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { AdminLinks, SocialLinks } from ".."

const OffCanvas = () => {
  return (
    <div id="mobile-menu" uk-offcanvas="overlay: true">
      <div className="uk-offcanvas-bar">
        <button
          className="uk-offcanvas-close "
          type="button"
          uk-close="true"
          aria-label="button"
        />
        <div className="bar-content uk-position-relative">
          <ul className="uk-nav-default uk-nav-parent-icon" uk-nav="true">
            <li className="uk-active">
              <Link
                className="uk-nav-header"
                to="/#home"
                uk-icon="icon: home; ratio: 1.2"
              ></Link>
            </li>

            <li>
              <Link
                to="/#about-me"
                //uk-tooltip="title: About; pos: bottom-center"
              >
                About Me
              </Link>
            </li>

            <li>
              <Link
                to="/#technologies"
                uk-tooltip="title: Technologies; pos: bottom-center"
              >
                Technologies
              </Link>
            </li>
            <li>
              <Link
                to="/#timeline"
                uk-tooltip="title: Technologies; pos: bottom-center"
              >
                Timeline
              </Link>
              <ul className="uk-nav-sub">
                <li>
                  <Link
                    to="/#experience"
                    //uk-tooltip="title: Technologies; pos: right"
                  >
                    Experience
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#education"
                    //uk-tooltip="title: Technologies; pos: bottom-center"
                  >
                    Education
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#achievements"
                    //uk-tooltip="title: Technologies; pos: bottom-center"
                  >
                    Achievements
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/#featured-projects"
                //uk-tooltip="title: Projects; pos: bottom-center"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/#contact"
                //uk-tooltip="title: Projects; pos: bottom-center"
              >
                Contact Me
              </Link>
            </li>

            <li className="uk-nav-divider" />
            <li className="uk-active">
              <Link to="/">
                <span
                  className="uk-margin-small-right"
                  data-uk-icon="icon: sign-in; ratio: 1.2"
                />
                Login
              </Link>
            </li>
            <li className="uk-active">
              <Link to="/">
                <span
                  className="uk-margin-small-right"
                  data-uk-icon="icon: sign-in ; ratio: 1.2"
                />
                Login-Dark
              </Link>
            </li>
            <li className="uk-nav-header uk-text-center">Social Media</li>
            <div className="uk-navbar-item ">
              <SocialLinks />
              <AdminLinks />
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default OffCanvas
