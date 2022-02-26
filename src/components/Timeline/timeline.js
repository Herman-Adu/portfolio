import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Title } from ".."

const Timeline = () => {
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
          className="uk-slider-container-offset uk-margin-small-right uk-margin-small-left"
          uk-slider="true"
        >
          <div className="uk-position-relative uk-visible-toggle" tabindex="-1">
            <ul className="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-grid">
              <li>
                <div>
                  <div className="uk-text-center">
                    <StaticImage
                      src="../../images/dreamweaver-icon.jpg"
                      placeholder="blurred"
                      formats={["AUTO", "WEBP", "AVIF"]}
                      alt="Image of Herman adu"
                      loading="eager"
                      height={100}
                      className="uk-text-center "
                    />
                  </div>

                  <h3 className="uk-heading-line">
                    <span>1995</span>
                  </h3>
                  <p>
                    A young hobbyist starting out in the world of IT using HTML
                    and note pad to write code.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <div className="uk-text-center">
                    <StaticImage
                      src="../../images/cold-fusion-logo.jpg"
                      placeholder="blurred"
                      formats={["AUTO", "WEBP", "AVIF"]}
                      alt="Image of Herman adu"
                      loading="eager"
                      height={100}
                    />
                  </div>

                  <h3 className="uk-heading-line">
                    <span>1999</span>
                  </h3>
                  <p>
                    A young web designer upgrading skill set to ColdFusion and
                    ASP web-based applications.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <div className="uk-text-center">
                    <StaticImage
                      src="../../images/javascript-logo-3.png"
                      placeholder="blurred"
                      formats={["AUTO", "WEBP", "AVIF"]}
                      alt="Image of Herman adu"
                      loading="eager"
                      height={100}
                    />
                  </div>

                  <h3 className="uk-heading-line">
                    <span>2000</span>
                  </h3>
                  <p>
                    Upgrading skill set to JavaScript designing websites using
                    macromedia products.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <div className="uk-text-center">
                    <StaticImage
                      src="../../images/support-icon.png"
                      placeholder="blurred"
                      formats={["AUTO", "WEBP", "AVIF"]}
                      alt="support icon"
                      loading="eager"
                      height={100}
                    />
                  </div>

                  <h3 className="uk-heading-line">
                    <span>2000</span>
                  </h3>
                  <p>
                    Dipped a toe into support analysis, had my first experience
                    of users and how they use their systems.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <div className="uk-text-center">
                    <StaticImage
                      src="../../images/mdx-logo.png"
                      placeholder="blurred"
                      formats={["AUTO", "WEBP", "AVIF"]}
                      alt="Image of Herman adu"
                      loading="eager"
                      height={100}
                    />
                  </div>

                  <h3 className="uk-heading-line">
                    <span>2002</span>
                  </h3>
                  <p>
                    Bachelor of science degree in computer communications with
                    applied computing - 2:1 hon.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <div className="uk-text-center">
                    <StaticImage
                      src="../../images/support-icon.png"
                      placeholder="blurred"
                      formats={["AUTO", "WEBP", "AVIF"]}
                      alt="support icon"
                      loading="eager"
                      height={100}
                    />
                  </div>

                  <h3 className="uk-heading-line">
                    <span>2004</span>
                  </h3>
                  <p>
                    Back into a support role, trying to decide my future path
                    between support and development.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <div className="uk-text-center">
                    <StaticImage
                      src="../../images/active-server-pages.jpg"
                      placeholder="blurred"
                      formats={["AUTO", "WEBP", "AVIF"]}
                      alt="Image of Herman adu"
                      loading="eager"
                      height={100}
                    />
                  </div>

                  <h3 className="uk-heading-line">
                    <span>2005</span>
                  </h3>
                  <p>
                    Web designer, upgraded skill set to include ASP, C#, .Net
                    source safe and adobe products.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <div className="uk-text-center">
                    <StaticImage
                      src="../../images/c-sharp-dot-net.jpg"
                      placeholder="blurred"
                      formats={["AUTO", "WEBP", "AVIF"]}
                      alt="Image of Herman adu"
                      loading="eager"
                      height={100}
                    />
                  </div>

                  <h3 className="uk-heading-line">
                    <span>2006</span>
                  </h3>
                  <p>
                    PC &Web development, utilising ASP.NET, C#, source safe, TFS
                    Server and SQL programming.
                  </p>
                </div>
              </li>

              <li>
                <div>
                  <div className="uk-text-center">
                    <StaticImage
                      src="../../images/mvc-icon.jpg"
                      placeholder="blurred"
                      formats={["AUTO", "WEBP", "AVIF"]}
                      alt="Image of Herman adu"
                      loading="eager"
                      height={100}
                    />
                  </div>

                  <h3 className="uk-heading-line">
                    <span>2009</span>
                  </h3>
                  <p>
                    Full stack TDD, dependency injection frameworks utilising
                    agile methodologies, TFS Server.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <div className="uk-text-center">
                    <StaticImage
                      src="../../images/xamarin.png"
                      placeholder="blurred"
                      formats={["AUTO", "WEBP", "AVIF"]}
                      alt="Image of Herman adu"
                      loading="eager"
                      height={100}
                    />
                  </div>

                  <h3 className="uk-heading-line">
                    <span>2017</span>
                  </h3>
                  <p>
                    Mobile app development, utilising .NET, C#, Xamarin,
                    standard libraries, SQL Server azure DevOps.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <div className="uk-text-center">
                    <StaticImage
                      src="../../images/jam-stack-logo.png"
                      placeholder="blurred"
                      formats={["AUTO", "WEBP", "AVIF"]}
                      alt="Image of Herman adu"
                      loading="eager"
                      height={100}
                    />
                  </div>

                  <h3 className="uk-heading-line">
                    <span>2019</span>
                  </h3>
                  <p>
                    Everything changed had a new Lease in life and the
                    oppertunity to reseach for decide for myself
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <div className="uk-text-center">
                    <StaticImage
                      src="../../images/hs-logo.jpg"
                      placeholder="blurred"
                      formats={["AUTO", "WEBP", "AVIF"]}
                      alt="Image of Herman adu"
                      loading="eager"
                      height={100}
                    />
                  </div>

                  <h3 className="uk-heading-line">
                    <span>2020</span>
                  </h3>
                  <p>
                    H&S Pepper Co, an on-line e-commerce platform utilising
                    gatsby strapi & shopify
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <div className="uk-text-center">
                    <StaticImage
                      src="../../images/adudev-Logo.png"
                      placeholder="blurred"
                      formats={["AUTO", "WEBP", "AVIF"]}
                      alt="Image of Herman adu"
                      loading="eager"
                      height={100}
                    />
                  </div>

                  <h3 className="uk-heading-line">
                    <span>2021</span>
                  </h3>
                  <p>
                    Adudev, an on-line development agency platform utilising
                    gatsby graphql and strapi
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <div className="uk-text-center">
                    <StaticImage
                      src="../../images/handshake.jpg"
                      placeholder="blurred"
                      formats={["AUTO", "WEBP", "AVIF"]}
                      alt="Image of Herman adu"
                      loading="eager"
                      height={100}
                    />
                  </div>

                  <h3 className="uk-heading-line">
                    <span>2022</span>
                  </h3>
                  <p>
                    Builds new relationships inovatating and setting new
                    standards one client at a time
                  </p>
                </div>
              </li>
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
