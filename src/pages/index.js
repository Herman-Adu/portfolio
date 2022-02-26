import * as React from "react"

import {
  Layout,
  Seo,
  BackgroundAnimation,
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

import technologies from "../constants/technologies"
import heroImage from "../images/hero.jpg"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero image={heroImage} title="AduDev Personal portfolio" />
    <About />

    <Technologies technologies={technologies} />

    <Timeline />
    <Experience />
    <Education />
    <Achievements />
    <Projects />
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

export default IndexPage
