import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Title } from ".."

const Education = () => {
  return (
    <section id="education" className="uk-section uk-section-default">
      <div className="uk-container uk-container-center">
        <div className="uk-container uk-container-xsmall uk-text-center uk-section uk-padding-remove-top uk-padding-remove-bottom">
          <Title title="Education" styleclassName="underline" />
        </div>
        <div className="uk-section">
          <div className="uk-container">
            <div className="uk-visible-toggle" uk-slider="autoplay: false">
              <div className="uk-position-relative">
                <div className="uk-slider-container uk-box-shadow-medium uk-background-primary-light">
                  <ul className="uk-slider-items uk-child-width-1-1">
                    <li>
                      <div className="uk-grid-collapse" uk-grid="true">
                        <div className="uk-width-1-2@m">
                          <StaticImage
                            src="../../images/middlesex-uni-v5.jpg"
                            placeholder="blurred"
                            formats={["AUTO", "WEBP", "AVIF"]}
                            alt="Image of Herman adu"
                            loading="eager"
                            width={800}
                            height={800}
                            //style={{ width: "100%", height: "600px" }}
                          />
                        </div>
                        <div className="uk-width-expand@s uk-flex uk-flex-middle">
                          <div className="uk-padding-large">
                            <h3 className="uk-text-uppercase uk-h5 uk-letter-spacing-small">
                              Middlesex University
                            </h3>
                            <h2 className="uk-heading-small uk-margin-medium-top">
                              BSC 2:1 Hons
                            </h2>
                            <h3 className="uk-text-uppercase uk-h5 uk-letter-spacing-small">
                              Computer Communocations with Applied Computing
                            </h3>
                            <div>
                              <p>
                                My major was in Computer Communications,
                                Networking and Programming, I decided to also
                                take on a minor degree halfway through called
                                Applied Computing to nicely complement my major,
                                at Middlesex university in North London. An
                                amazing time in my life met so many great people
                                and endured one of the biggest learing curves
                                taken in my life. Yes it was worh it as i belive
                                that education is the key
                              </p>
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
                    <li>
                      <div className="uk-grid-collapse" uk-grid="true">
                        <div className="uk-width-1-2@m">
                          {/*  <img
                            src="https://source.unsplash.com/2LgJiWdDdO4/800x800"
                            alt="Image"
                          /> */}
                          <StaticImage
                            src="../../images/middlesex-uni-v3.jpg"
                            placeholder="blurred"
                            formats={["AUTO", "WEBP", "AVIF"]}
                            alt="Image of Herman adu"
                            loading="eager"
                            width={1000}
                            height={1000}
                            //style={{ height: "600px" }}
                          />
                        </div>
                        <div className="uk-width-expand@s uk-flex uk-flex-middle">
                          <div className="uk-padding-large">
                            <h3 className="uk-text-uppercase uk-h5 uk-letter-spacing-small">
                              Middlesex University
                            </h3>
                            <h2 className="uk-heading-small uk-margin-medium-top">
                              Technology
                            </h2>
                            <div>
                              <p>
                                During my time at Middlesex University i studied
                                many subjects but my programming and development
                                life started here with Microcomputing and c,
                                MIcroprocessing and c++ as well as software
                                design with java which was a great starting
                                block for my career in c/ also HCI human
                                computer interaction the human element in design
                                gave me a great starting block to incorporate
                                HCI into the stsyems i build today
                              </p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
