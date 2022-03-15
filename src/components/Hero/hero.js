import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import CV from "../../docs/cv.pdf"

const Hero = ({ image, welcome, title, callToAction, buttons }) => {
  //console.log("Hero component image:", image)
  //console.log("Hero component title:", title)
  //console.log("Hero component callToAction:", callToAction)
  //console.log("Hero component  bittons:", buttons)

  return (
    <section id="home">
      <div className="uk-cover-container">
        {/* image && (
          <GatsbyImage
            image={image}
            style={{
              height: "55vh",
              width: "100vw",
            }}
            alt=""
          />
        ) */}
        <img
          src={image}
          //uk-img="true"
          alt="Hero Background"
          style={{
            height: "65vh",
            width: "100vw",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />

        <div className="uk-overlay uk-overlay-primary uk-position-cover uk-flex uk-flex-center uk-flex-middle uk-light uk-text-center">
          <div className="uk-flex uk-flex-center">
            <div className="uk-width-3-3 uk-margin-top">
              {image ? (
                <div className="uk-heading-medium uk-text-center uk-light uk-animation-fade uk-animation-slide-top-medium uk-margin-medium-bottom">
                  {/* <span>
                    <GatsbyImage image={image} alt="adudev logo" />
                  </span> */}
                  <span>
                    <StaticImage
                      src="../../images/adudev-light.png"
                      placeholder="blurred"
                      height={135}
                      alt="Adudev Logo"
                    />
                    {/* <img src={image} alt="adudev" /> */}
                  </span>
                </div>
              ) : (
                <div className="uk-heading-medium uk-heading-line uk-text-center uk-light uk-animation-fade uk-animation-slide-top-medium medium uk-margin-small-top">
                  <span>{title}</span>
                </div>
              )}

              <h1 className="uk-text-center uk-light uk-animation-fade uk-animation-slide-bottom-medium uk-margin-medium-bottom uk-visible@s">
                {welcome}
              </h1>
              <h2 className="uk-animation-fade uk-animation-slide-bottom-medium">
                {callToAction}
              </h2>
              <div className="uk-flex uk-flex-center uk-flex-middle">
                <div>
                  <a
                    href={CV}
                    title="Herman Adu CV"
                    alt="Herman Adu CV"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="uk-button uk-button-default uk-button-medium uk-border-pill uk-animation-fade uk-animation-slide-left-medium uk-margin-small-right uk-margin-medium-bottom uk-margin-top"
                  >
                    <span>CV</span>
                  </a>
                </div>
                <div>
                  {buttons.map(button => {
                    // console.log("Button:", button)
                    return (
                      <Link
                        key={button.id}
                        to={button.slug}
                        title="Herman Adu CV"
                        alt="Herman Adu CV"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="uk-button uk-button-default uk-button-medium uk-border-pill uk-animation-fade uk-animation-slide-left-medium uk-margin-small-right uk-margin-medium-bottom uk-margin-top"
                      >
                        <span>{button.text}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
