import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { SocialLinks } from "../../components"
import AdminLinks from "../AdminLinks/adminLinks"
//import { AdminLinks, SocialLinks } from "../../components"

const Mobile = () => {
  return (
    <nav className="uk-navbar-container uk-hidden@m" uk-navbar="true">
      {/* left section for mobile nav view */}

      <div className="uk-navbar-left uk-margin-small-left">
        <Link to="/#home" className="uk-navbar-left   uk-logo">
          <StaticImage
            src="../../images/adudev-Logo.png"
            placeholder="blurred"
            //height={250}
            alt="Adudev logo"
          />
        </Link>
      </div>

      {/* right section for mobile nav view toggle button for the off canvas section */}
      <div className="uk-navbar-right uk-dark">
        <button
          className="uk-navbar-toggle uk-button"
          uk-navbar-toggle-icon="true"
          uk-toggle="target: #mobile-menu"
          aria-label="Menu"
        >
          &nbsp;&nbsp;
        </button>
      </div>

      {/* center nav section for mobile nav view  */}
      <div id="mobile-menu" className="uk-navbar-center ">
        <SocialLinks />
        <AdminLinks />
      </div>
    </nav>
  )
}

export default Mobile
