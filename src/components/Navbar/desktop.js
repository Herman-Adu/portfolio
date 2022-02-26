import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { AdminLinks, SocialLinks } from ".."

const Desktop = () => {
  return (
    <nav
      className="uk-navbar-container uk-navbar-transparent uk-background-muted uk-visible@s"
      uk-navbar="true"
    >
      {/* left section for desktop nav view  */}
      <div className="uk-navbar-left uk-margin-small-left uk-visible@m">
        <Link to="/" className="uk-navbar-item   uk-logo">
          <StaticImage
            src="../../images/adudev-Logo.png"
            placeholder="blurred"
            //height={250}
            alt="A kitten"
          />
        </Link>
      </div>

      {/* center section for desktop nav view  */}
      <div className="uk-navbar-center uk-visible@m">
        <ul className="uk-navbar-nav uk-nav-primary">
          <li>
            <Link
              to="/"
              uk-tooltip="title: Home; pos: bottom-center"
              uk-icon="icon: home"
            ></Link>
          </li>
          <li>
            <Link to="/#about-me" uk-tooltip="title: About; pos: bottom-center">
              About
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
              //uk-tooltip="title: Timeline; pos: bottom-center"
            >
              Timeline
            </Link>
            <div class="uk-navbar-dropdown">
              <ul class="uk-nav uk-navbar-dropdown-nav">
                <li class="uk-active">
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
            </div>
          </li>
          {/* <li>
            <Link
              to="/#achievements"
              uk-tooltip="title: Technologies; pos: bottom-center"
            >
              Achievements
            </Link>
          </li> */}
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
              //uk-tooltip="title: Timeline; pos: bottom-center"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>

      {/* right section for desktop nav view  */}
      <div className="uk-navbar-right">
        {/* <!-- hide social icons from tablet and mobile --> */}
        <div className="uk-navbar-item  uk-visible@m">
          <SocialLinks />
          <AdminLinks />
        </div>
      </div>
    </nav>
  )
}

export default Desktop
