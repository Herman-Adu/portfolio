import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Footer, Navbar } from ".."

import UIkit from "uikit"
import Icons from "uikit/dist/js/uikit-icons"
import "../../styles/main.scss"
import "uikit/dist/css/uikit.min.css"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        UIkit.use(Icons)
      } catch (e) {
        console.error(e)
      }
    }
  }, [])

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
