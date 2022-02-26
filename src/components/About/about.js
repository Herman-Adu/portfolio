import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Title } from ".."

const About = () => {
  return (
    <section classNameName="uk-section uk-section-default">
      <div
        id="about-me"
        className="uk-container uk-container-xsmall uk-text-center uk-section uk-padding-remove-bottom"
      >
        <Title title="About Me" styleClass="underline" />
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
            <div>
              <div className="uk-card uk-card-body">
                <h2 className="uk-h1 uk-card-title">Herman Adu</h2>
                <p>
                  Over 20 years' experience in IT with a progressive work
                  history to date, I have been blessed to work in the industry I
                  love for such a long time, having the opportunity to work with
                  so many technologies watching them change, innovate and set
                  new standards over the years. I have also had the opportunity
                  to work with some great developers (SiFu) from which I have
                  learnt so much from. Starting out as a hobbyist in the late
                  80's working my way through college and university, scooping
                  some great contracts. I then had the oppertunity working in
                  technical support, web design, application and mobile app
                  development within a single employer for 15 years. I enjoyed
                  many learning experiences moving roles and teams as my career
                  progressed, adapting to new people, technologies and
                  methodologies as the company strategy evolved.
                </p>
                <p>
                  When I moved on in 2019, I wanted to be able to carry on full
                  stack development but did not have the resources to continue
                  with a full blow VS DevOps setup with premium services. For
                  the first time in a long while I was no longer bound by
                  technologies, and strategies of a company but had the new
                  opportunity research the latest trends, standards and the
                  world we live in today. Now coming back full circle creating
                  full-stack applications with headless CMS like strapi, Rest
                  APIs, GraphQL APIs and the new standards being set by static
                  site generators like Gatsby and Next JS and JavaScript
                  libraries like react, I'm Innovating one project at a time,
                  life is great, It's been refreshing to be able to expand my
                  capabilities beyond the constraints of my previous employer's
                  directives, and I'm excited to be using a more progressive,
                  less time consuming framework of technologies.
                </p>
                <p>
                  Much Love to all those who have help and belived in me all
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
