import * as React from "react"
import { graphql } from "gatsby"
//import { getImage } from "gatsby-plugin-image"

import {
  Layout,
  Seo,
  //BackgroundAnimation,
  Hero,
  About,
  Projects,
  Technologies,
  Achievements,
  Timeline,
  Education,
  Experience,
  Contact,
} from "../components"

import image from "../images/adudev-hero.jpeg"
import technologies from "../constants/technologies"
import timeline from "../constants/timeline"
import education from "../constants/education"
import achievements from "../constants/achievements"

const buttons = [
  {
    id: 1,
    text: `Articles`,
    slug: "/posts",
  },
]

const IndexPage = ({ data }) => {
  //console.log("Query data:", data)

  const homePage = data.allStrapiHomePage
  //const post = data.allStrapiPost
  const projects = data.allStrapiProject
  //console.log("Home Page - homePage:", homePage)
  //console.log("Home Page - post:", post)
  //console.log("Home Page - Projects:", projects)

  const aboutSection = homePage.edges.map(function (section) {
    const {
      node: { AboutSection },
    } = section

    //console.log("AboutSection:", AboutSection)
    return AboutSection
  })

  return (
    <Layout>
      <Seo title="Home" />
      <Hero
        image={image}
        welcome="AduDev Personal portfolio"
        callToAction="A full-stack developer innovating one project at a time!"
        buttons={buttons}
      />
      <About aboutSection={aboutSection} />
      <Technologies technologies={technologies} />
      <Timeline timeline={timeline} />
      <Experience />
      <Education education={education} />
      <Achievements achievements={achievements} />
      <Projects projects={projects} />
      <Contact />
      {/* <section>
      <div className="uk-container uk-container-large uk-margin-top ">
        <div class="uk-child-width-expand@s" uk-grid="true">
          <div class="uk-card uk-card-body " style={{ width: "100%" }}>
            <h1 className="">
              Welcome To
              <br />
              My Personal Portfolio
            </h1>

            <h3>
              The purpose of JavaScript Mastery is to help aspiring and
              established developers to take their development skills to the
              next level and build awesome apps.
            </h3>
            <button className="uk-margin-xlarge-top">Learn More</button>
          </div>
          <BackgroundAnimation />
        </div>
      </div>
    </section> */}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allStrapiHomePage {
      edges {
        node {
          Title
          SeoInformation {
            SeoTitle
            SeoDescription
          }
          HomeHero {
            Images {
              file {
                id
                childImageSharp {
                  id
                  gatsbyImageData
                }
              }
            }
            CallToAction
            Buttons {
              Link
              Label
            }
          }
          AboutSection {
            SectionTitle
            title
            content
          }
        }
      }
    }
    allStrapiPost {
      edges {
        node {
          Title
          Cover {
            file {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          Content
          Slug
          PostSEO {
            SeoTitle
            SeoDescription
          }
        }
      }
    }
    allStrapiProject {
      edges {
        node {
          Type
          Time
          ImagePath
          Title
          Description
          GitHub
          Link
          Category
          Stack {
            name
            id
          }
        }
      }
    }
  }
`
