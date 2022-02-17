import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 200">
      <nav
        className="uk-navbar-container uk-container uk-container-large"
        uk-navbar="true"
      >
        <div className="uk-navbar-left">
          <Link clLinkssName="uk-navbar-item uk-logo desktop" to="/">
            <img src="https://i.ibb.co/55PFRN5/logo-30x30.png" alt="" />
          </Link>

          <ul className="uk-navbar-nav uk-navbar-center desktop uk-visible@s">
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Projects</Link>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li>
                    <Link to="/">Project A</Link>
                  </li>
                  <li>
                    <Link to="/">Project B</Link>
                  </li>
                  <li>
                    <Link to="/">Project C</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/">Technologies</Link>
            </li>
            <li>
              <Link to="/">Timeline</Link>
            </li>
          </ul>

          <div className="uk-navbar-center uk-hidden@s">
            <ul className="uk-navbar-nav desktop">
              <li>
                <Link to="/">Login</Link>
              </li>
            </ul>

            <Link
              className="uk-navbar-toggle mobile"
              to="/"
              uk-search-icon="true"
              uk-toggle="target: #modal-search"
            ></Link>
          </div>
        </div>

        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav desktop uk-visible@s">
            <li>
              <Link to="/">Login</Link>
            </li>
          </ul>

          <Link
            className="uk-navbar-toggle mobile uk-visible@s"
            to="/"
            uk-search-icon="true"
            uk-toggle="target: #modal-search"
          ></Link>
          <div className="uk-hidden@s">
            <Link
              className="uk-navbar-toggle mobile"
              uk-navbar-toggle-icon="true"
              to="/"
              uk-toggle="target: #offcanvas-nav"
            ></Link>
          </div>
        </div>
      </nav>

      {/* search box full page */}
      <div id="modal-search" className="uk-modal-full uk-modal" uk-modal="true">
        <div
          className="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle"
          uk-height-viewport="true"
        >
          <button
            className="uk-modal-close-full"
            type="button"
            uk-close="true"
            aria-label="close button"
          ></button>
          <form className="uk-search uk-search-large">
            <input
              className="uk-search-input uk-text-center"
              type="search"
              placeholder="Search..."
              autofocus
            />
          </form>
        </div>
      </div>

      <div id="offcanvas-nav" uk-offcanvas="true">
        <div className="uk-offcanvas-bar">
          <button
            className="uk-offcanvas-close"
            type="button"
            uk-close="true"
            aria-label="close button"
          ></button>
          <br />

          <div className="uk-width-1-2@s uk-width-2-5@m">
            <ul className="uk-nav uk-nav-default">
              <li className="uk-active uk-margin">
                <Link to="/">
                  <span className="uk-margin-small-right" uk-icon="move"></span>
                  About
                </Link>
              </li>
              <li className="uk-parent uk-margin">
                <Link className="uk-margin" to="/">
                  <span className="uk-margin-small-right" uk-icon="cog"></span>
                  Projects
                </Link>
                <ul className="uk-nav-sub">
                  <li className="uk-margin">
                    <Link to="/">
                      <span
                        className="uk-margin-small-right"
                        uk-icon="history"
                      ></span>
                      Project A
                    </Link>
                  </li>
                  <li className="uk-margin">
                    <Link to="/">
                      <span
                        className="uk-margin-small-right"
                        uk-icon="future"
                      ></span>
                      Project B
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span
                        className="uk-margin-small-right"
                        uk-icon="play-circle"
                      ></span>
                      Project C
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="uk-margin">
                <Link to="/">
                  <span className="uk-margin-small-right" uk-icon="nut"></span>
                  Technologies
                </Link>
              </li>
              <li className="uk-margin">
                <Link to="/">
                  <span className="uk-margin-small-right" uk-icon="nut"></span>
                  Timeline
                </Link>
              </li>
              <li className="uk-margin">
                <hr className="uk-divider-icon" />
              </li>
              <li className="uk-margin">
                <Link to="/">
                  <span
                    className="uk-margin-small-right"
                    uk-icon="sign-in"
                  ></span>
                  LOGIN
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
