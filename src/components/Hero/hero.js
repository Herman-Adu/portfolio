import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
//import heroImage from "../../images/hero-news.jpg"
import heroImage from "../../images/adudev-hero.jpeg"

const Hero = ({ logo, title }) => {
  //console.log("Hero component hero image:", image)
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
          src={heroImage}
          //uk-img="true"
          alt="Image"
          style={{
            height: "65vh",
            width: "100vw",
            //backgroundPosition: "center",
            //backgroundRepeat: "no-repeat",
            //backgroundSize: "cover",
          }}
        />

        <div className="uk-overlay uk-overlay-primary uk-position-cover uk-flex uk-flex-center uk-flex-middle uk-light uk-text-center">
          <div className="uk-flex uk-flex-center">
            <div className="uk-width-3-3 uk-margin-top">
              {/* image ? (
                <div className="uk-heading-medium uk-text-center uk-light uk-animation-fade uk-animation-slide-top-medium uk-margin-medium-bottom">
                  <span>
                    <GatsbyImage image={image} alt="adudev logo" />
                  </span>
                </div>
              ) : (
                <div className="uk-heading-medium uk-heading-line uk-text-center uk-light uk-animation-fade uk-animation-slide-top-medium medium uk-margin-small-top">
                  <span>{title}</span>
                </div>
              ) */}

              <div className="uk-heading-medium uk-text-center uk-light uk-animation-fade uk-animation-slide-top-medium uk-margin-medium-bottom">
                <span>
                  <StaticImage
                    src="../../images/adudev-light.png"
                    placeholder="blurred"
                    height={135}
                    alt="Adudev Large Logo"
                  />
                  {/* <img src={image} alt="adudev" /> */}
                </span>
              </div>

              <h1 className="uk-text-center uk-light uk-animation-fade uk-animation-slide-bottom-medium uk-margin-medium-bottom">
                Welcome to my personal profile
              </h1>
              <h2 className="uk-animation-fade uk-animation-slide-bottom-medium">
                A full-stack developer innovating one project at a time!
              </h2>
              <div className="uk-flex uk-flex-center uk-flex-middle">
                <Link
                  to="../../docs/cv.pdf"
                  className="uk-button uk-button-default uk-button-medium uk-animation-fade uk-animation-slide-left-medium uk-margin-medium-left uk-margin-medium-right uk-margin-medium-bottom uk-margin-top"
                >
                  CV
                </Link>

                <Link
                  to="/"
                  className="uk-button uk-button-default uk-button-medium uk-animation-fade uk-animation-slide-right-medium uk-margin-medium-bottom uk-margin-top"
                >
                  Blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
