import React from "react"
import { Title } from ".."

const Timeline = ({ timeline }) => {
  return (
    <div
      id="timeline"
      className="uk-section uk-section-default  uk-padding-remove-top uk-padding-remove-bottom"
    >
      <div className="uk-container  uk-padding-remove-top">
        <div className="uk-container uk-container-xsmall uk-text-center uk-section uk-padding-remove-top">
          <Title title="Timeline" styleClass="underline" />
        </div>
        <div
          className="uk-slider-container-offset uk-margin-small-right uk-margin-small-left uk-padding-remove-top"
          uk-slider="true"
        >
          <div className="uk-position-relative uk-visible-toggle" tabIndex="-1">
            <ul className="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-grid">
              {timeline.map(item => {
                const { id, image, date, text, alt } = item
                return (
                  <li key={id}>
                    <div>
                      <div className="uk-text-center">
                        <img
                          src={image}
                          style={{ height: "100px", marginBottom: "10px" }}
                          alt={alt}
                        />
                      </div>

                      <h3 className="uk-heading-line">
                        <span>{date}</span>
                      </h3>
                      <p>{text}</p>
                    </div>
                  </li>
                )
              })}
            </ul>

            <a
              className="uk-position-center-left-out uk-hidden-hover uk-margin"
              href="/"
              uk-slidenav-previous="true"
              uk-slider-item="previous"
              aria-label="previous"
            >
              {null}
            </a>
            <a
              className="uk-position-center-right-out uk-hidden-hover uk-margin"
              href="/"
              uk-slidenav-next="true"
              uk-slider-item="next"
              aria-label="next"
            >
              {null}
            </a>
          </div>

          <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
        </div>
      </div>
    </div>
  )
}

export default Timeline
