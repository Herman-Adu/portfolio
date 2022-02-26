import React from "react"
import { Desktop, Mobile, OffCanvas } from ".."

const Navbar = () => {
  return (
    <div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-dark; top: 200">
      {/* destop nav view */}
      <Desktop />

      {/*  mobile nav view */}
      <Mobile />

      {/* off canvas nav view  */}
      <OffCanvas />
    </div>
  )
}

export default Navbar
