import React from "react"
import { Title, Project } from ".."

import Gpt3Image from "../../images/gpt3.png"
import GerichtImage from "../../images/gericht-restaurant.png"
import DollaImage from "../../images/dolla-finance-project.png"

import ExplorixImage from "../../images/explorix-hero.png"
import PortfolioImage from "../../images/portflio-project.png"

import DPayImage from "../../images/react-support-project-2.png"
import CrwnImage from "../../images/crwn-clothing-project.png"
import ChatImage from "../../images/chap-app-project.png"
import ShopfyImage from "../../images/shopify-prototype.png"

import RegularJoeImage from "../../images/reguler-joes.png"
import BlogImage from "../../images/Gatsby-blog-v2-project.png"

const Projects = ({ projects }) => {
  //console.log("Projects:", projects)

  let reactProj = projects.edges.filter(function (project) {
    //console.log("projects.edges:", project)
    return project.node.Type === "react"
  })

  let staticProj = projects.edges.filter(function (project) {
    //console.log("Static Projects:", staticProj)
    return project.node.Type === "static"
  })

  let fullStackProj = projects.edges.filter(function (project) {
    //console.log("Full Stack Projects:", fullStackProj)
    return project.node.Type === "fullstack"
  })

  let HeadlessProj = projects.edges.filter(function (project) {
    //console.log("Headless CMS Projects:", HeadlessProj)
    return project.node.Type === "headless"
  })

  return (
    <section
      id="featured-projects"
      className="uk-section uk-section-default uk-padding-remove-top"
    >
      <div className="uk-container uk-container-xsmall uk-text-center uk-section uk-padding-remove-bottom">
        <Title title="Featured Projects" styleclassName="underline" />
      </div>

      <div className="uk-container uk-container-large">
        <div uk-filter="target: .js-filter">
          <div className="uk-text-center">
            <ul className="uk-subnav uk-subnav-pill orange-subnav uk-flex uk-flex-center uk-margin-medium-top">
              <li
                className="uk-active uk-margin-small-bottom"
                uk-filter-control="[data-color='white'], [data-color='blue'], [data-color='black'], [data-color='muted']"
              >
                <a className="uk-border-pill" href="/">
                  All
                </a>
              </li>
              <li
                className="uk-margin-small-bottom"
                uk-filter-control="[data-color='white']"
              >
                <a className="uk-border-pill" href="/">
                  React
                </a>
              </li>
              <li
                className="uk-margin-small-bottom"
                uk-filter-control="[data-color='blue']"
              >
                <a className="uk-border-pill" href="/">
                  Static
                </a>
              </li>
              <li
                className="uk-margin-small-bottom"
                uk-filter-control="[data-color='black']"
              >
                <a className="uk-border-pill" href="/">
                  Full-Stack
                </a>
              </li>
              <li
                className="uk-margin-small-bottom"
                uk-filter-control="[data-color='muted']"
              >
                <a className="uk-border-pill" href="/">
                  Headless CMS
                </a>
              </li>
            </ul>
          </div>

          <ul
            className="js-filter uk-child-width-1-1@s uk-child-width-1-2@m  uk-child-width-1-3@l uk-text-center"
            uk-grid="true"
          >
            <li data-color="white">
              <Project
                projects={reactProj[0]}
                image={Gpt3Image}
                styleClass="design-card"
              />
            </li>
            <li data-color="muted">
              <Project
                projects={HeadlessProj[0]}
                image={RegularJoeImage}
                styleClass="music-card"
              />
            </li>
            <li data-color="blue">
              <Project
                projects={staticProj[0]}
                image={ExplorixImage}
                styleClass="photo-card"
              />
            </li>
            <li data-color="white">
              <Project
                projects={reactProj[1]}
                image={GerichtImage}
                styleClass="design-card"
              />
            </li>
            <li data-color="muted">
              <Project
                projects={HeadlessProj[1]}
                image={BlogImage}
                styleClass="music-card"
              />
            </li>
            <li data-color="white">
              <Project
                projects={reactProj[2]}
                image={DollaImage}
                styleClass="design-card"
              />
            </li>
            <li data-color="black">
              <Project
                projects={fullStackProj[0]}
                image={DPayImage}
                styleClass="nature-card"
              />
            </li>
            <li data-color="black">
              <Project
                projects={fullStackProj[1]}
                image={CrwnImage}
                styleClass="nature-card"
              />
            </li>
            <li data-color="blue">
              <Project
                projects={staticProj[1]}
                image={PortfolioImage}
                styleClass="photo-card"
              />
            </li>
            {/* <li data-color="muted">
              <div className="uk-card uk-background-muted uk-card-body">
                Item
              </div> 
            </li>*/}
            <li data-color="black">
              <Project
                projects={fullStackProj[2]}
                image={ChatImage}
                styleClass="nature-card"
              />
            </li>
            {/* <li data-color="blue">
              <div className="uk-card uk-card-primary uk-card-body">Item</div>
            </li> */}
            {/* <li data-color="white">
              <div className="uk-card uk-card-primary uk-card-body">Item</div>
            </li> */}
            {/* <li data-color="blue">
              <div className="uk-card uk-card-primary uk-card-body">Item</div>
            </li> */}
            {/* <li data-color="muted">
              <div className="uk-card uk-background-muted uk-card-body">
                Item
              </div>
            </li> */}
            <li data-color="black">
              <Project
                projects={fullStackProj[3]}
                image={ShopfyImage}
                styleClass="nature-card"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Projects
