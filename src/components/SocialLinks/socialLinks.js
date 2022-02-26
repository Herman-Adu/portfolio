import React from "react"

const SocialLinks = () => {
  return (
    <div className="uk-flex">
      <a
        uk-tooltip="title: Twitter; pos: bottom-center"
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="twitter"
        alt="twitter"
        className="uk-icon-button uk-margin-small-right"
        uk-icon="twitter"
      >
        {null}
      </a>
      <a
        uk-tooltip="title: Linkedin; pos: bottom-center"
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="linkedin"
        alt="linkedin"
        className="uk-icon-button uk-margin-small-right"
        uk-icon="linkedin"
      >
        {null}
      </a>
      <a
        uk-tooltip="title: Facebook; pos: bottom-center"
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="facebook"
        alt="facebook"
        className="uk-icon-button uk-margin-small-right"
        uk-icon="facebook"
      >
        {null}
      </a>
    </div>
  )
}

export default SocialLinks
