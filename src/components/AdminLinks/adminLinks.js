import React from "react"
import { Link } from "gatsby"

const AdminLinks = () => {
  return (
    <div className="uk-width-auto">
      <div className="uk-inline">
        <a
          href="/"
          className="uk-icon-button"
          aria-label="Icon verticle"
          uk-icon="icon:user"
        >
          {null}
        </a>
        <div uk-dropdown="mode:hover; pos: bottom-right; boundary:#author-wrap">
          <ul className="uk-nav uk-dropdown-nav">
            <li>
              <Link to="/">Sign in</Link>
            </li>
            <li>
              <Link to="/">Profile</Link>
            </li>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AdminLinks
