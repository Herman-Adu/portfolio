import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Title } from ".."
import Markdown from "react-markdown"

const About = ({ aboutSection }) => {
  //console.log(aboutSection)
  //console.log(aboutSection[0].title)
  return (
    <section className="uk-section uk-section-default uk-padding-remove-top uk-padding-remove-bottom">
      <div
        id="about-me"
        className="uk-container uk-container-xsmall uk-text-center uk-section uk-padding-remove-bottom"
      >
        <Title title={aboutSection[0].SectionTitle} styleClass="underline" />
      </div>

      <div className="uk-section uk-padding-remove-top uk-margin-medium-top">
        <div className="uk-container">
          <div
            className="uk-grid-collapse uk-child-width-1-2@m uk-grid-match uk-flex-middle uk-background-primary uk-light"
            data-uk-grid
          >
            <div className="uk-flex-last@m">
              <div>
                <StaticImage
                  src="../../images/herman-v2.jpg"
                  placeholder="blurred"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="image of Herman adu"
                  loading="eager"
                  width={1000}
                  //height={1000}
                />
                {/* <img src="https://images.unsplash.com/photo-1485138217907-eb696723c538?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=ae916dc1e3612624426d0cc5b1f8405e" /> */}
              </div>
            </div>
            <div className="">
              <div className="uk-padding uk-margin">
                <h2 className="uk-h1 uk-card-title">{aboutSection[0].title}</h2>
                <Markdown children={aboutSection[0].content} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
