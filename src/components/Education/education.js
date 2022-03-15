import React from "react"
import { Title } from ".."

const Education = ({ education }) => {
  //console.log("Education: ", education)
  return (
    <section
      id="education"
      className="uk-section uk-section-default uk-padding-remove-bottom uk-padding-remove-top"
    >
      <div className="uk-container uk-container-center uk-margin-medium-top">
        <div className="uk-container uk-container-xsmall uk-text-center uk-section uk-padding-remove-top uk-padding-remove-bottom">
          <Title title="Education" styleclassName="underline" />
        </div>
        <div className="uk-section uk-padding-remove-top">
          <div className="uk-container uk-margin-medium-top">
            <div className="uk-visible-toggle" uk-slider="autoplay: false">
              <div className="uk-position-relative">
                <div className="uk-slider-container uk-box-shadow-medium uk-background-primary-light">
                  <ul className="uk-slider-items uk-child-width-1-1">
                    {education.map(item => {
                      //console.log("Item: ", item)
                      const { id, image, uni, titleH2, titleH3, text } = item

                      return (
                        <li key={id}>
                          <div className="uk-grid-collapse" uk-grid="true">
                            <div className="uk-width-1-2@m">
                              <img
                                src={image}
                                alt="text"
                                style={{
                                  height: "100%",
                                  width: "100%",
                                }}
                              />
                            </div>
                            <div className="uk-width-expand@s uk-flex uk-flex-middle">
                              <div className="uk-padding-large">
                                <h3 className="uk-text-uppercase uk-h5 uk-letter-spacing-small">
                                  {uni}
                                </h3>
                                <h2 className="uk-heading-small uk-margin-medium-top">
                                  {titleH2}
                                </h2>
                                <h3 className="uk-text-uppercase uk-h5 uk-letter-spacing-small">
                                  {titleH3}
                                </h3>
                                <div>
                                  <p>{text}</p>
                                </div>
                                <hr className="uk-margin-medium-top uk-separator-small" />
                                <h3 className="uk-margin-remove uk-text-uppercase uk-h5 uk-letter-spacing-small">
                                  <a href="/">
                                    View Details
                                    <span
                                      className="uk-margin-left"
                                      uk-icon="arrow-right"
                                    ></span>
                                  </a>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>

                <div className="uk-hidden@l">
                  <a
                    className="uk-position-center-left uk-position-small"
                    href="/"
                    uk-slidenav-previous="true"
                    uk-slider-item="previous"
                    aria-label="previous"
                  >
                    {null}
                  </a>
                  <a
                    className="uk-position-center-right uk-position-small"
                    href="/"
                    uk-slidenav-next="true"
                    uk-slider-item="next"
                    aria-label="next"
                  >
                    {null}
                  </a>
                </div>
                <div className="uk-visible@l">
                  <a
                    className="uk-position-center-left-out uk-slidenav-large"
                    href="/"
                    uk-slidenav-previous="true"
                    uk-slider-item="previous"
                    aria-label="previous"
                  >
                    {null}
                  </a>
                  <a
                    className="uk-position-center-right-out uk-slidenav-large"
                    href="/"
                    uk-slidenav-next="true"
                    uk-slider-item="next"
                    aria-label="next"
                  >
                    {null}
                  </a>
                </div>

                <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin-medium-top"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
