import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Title, Project } from ".."

import Gpt3Image from "../../images/gpt3.png"
import GerichtImage from "../../images/gericht-restaurant.png"
import DPayImage from "../../images/react-support-project-2.png"
import DollaImage from "../../images/dolla-finance-project.png"

import ExplorixImage from "../../images/explorix-hero.png"
import PortfolioImage from "../../images/portflio-project.png"

const Projects = ({ projects }) => {
  console.log("Projects:", projects)

  let reactProj = projects.edges.filter(function (project) {
    //console.log("projects.edges:", project)
    return project.node.Type === "react"
  })
  console.log("React Projects:", reactProj)

  let staticProj = projects.edges.filter(function (project) {
    return project.node.Type === "static"
  })
  console.log("Static Projects:", staticProj)

  let fullStackProj = projects.edges.filter(function (project) {
    return project.node.Type === "fullstack"
  })
  console.log("Static Projects:", fullStackProj)

  let HeadlessProj = projects.edges.filter(function (project) {
    return project.node.Type === "fullstack"
  })
  //console.log("Static Projects:", HeadlessProj)

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
                className="uk-active uk-margin-small-bottom orange-subnav"
                uk-filter-control="[data-color='white'], [data-color='blue'], [data-color='black'], [data-color='muted']"
              >
                <Link className="uk-border-pill orange-subnav" to="/">
                  All
                </Link>
              </li>
              <li
                className="uk-margin-small-bottom"
                uk-filter-control="[data-color='white']"
              >
                <Link to="/">React</Link>
              </li>
              <li
                className="uk-margin-small-bottom"
                uk-filter-control="[data-color='blue']"
              >
                <Link to="/">Static</Link>
              </li>
              <li
                className="uk-margin-small-bottom"
                uk-filter-control="[data-color='black']"
              >
                <Link to="/">Full-Stack</Link>
              </li>
              <li
                className="uk-margin-small-bottom"
                uk-filter-control="[data-color='muted']"
              >
                <Link to="/">Headless CMS</Link>
              </li>
            </ul>
          </div>

          <ul
            className="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center"
            uk-grid="true"
          >
            <li data-color="white">
              <Project
                projects={reactProj[0]}
                image={Gpt3Image}
                style="design-card"
              />
            </li>
            <li data-color="muted">
              <div className="uk-card uk-background-muted uk-card-body">
                Item
              </div>
            </li>
            <li data-color="blue">
              <Project
                projects={staticProj[0]}
                image={ExplorixImage}
                style="nature-card"
              />
            </li>
            <li data-color="white">
              <Project
                projects={reactProj[1]}
                image={GerichtImage}
                style="design-card"
              />
            </li>
            <li data-color="muted">
              <div className="uk-card uk-background-muted uk-card-body">
                Item
              </div>
            </li>
            <li data-color="white">
              <Project
                projects={reactProj[2]}
                image={DollaImage}
                style="design-card"
              />
            </li>
            <li data-color="black">
              <div className="uk-card uk-card-secondary uk-card-body">Item</div>
            </li>
            <li data-color="black">
              <div className="uk-card uk-card-secondary uk-card-body">Item</div>
            </li>
            <li data-color="blue">
              <Project
                projects={staticProj[1]}
                image={PortfolioImage}
                style="nature-card"
              />
            </li>
            <li data-color="muted">
              <div className="uk-card uk-background-muted uk-card-body">
                Item
              </div>
            </li>
            <li data-color="black">
              <div className="uk-card uk-card-secondary uk-card-body">Item</div>
            </li>
            <li data-color="blue">
              <div className="uk-card uk-card-primary uk-card-body">Item</div>
            </li>
            <li data-color="white">
              <Project
                projects={reactProj[3]}
                image={DPayImage}
                style="design-card"
              />
            </li>
            <li data-color="blue">
              <div className="uk-card uk-card-primary uk-card-body">Item</div>
            </li>
            <li data-color="muted">
              <div className="uk-card uk-background-muted uk-card-body">
                Item
              </div>
            </li>
            <li data-color="black">
              <div className="uk-card uk-card-secondary uk-card-body">Item</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Projects
