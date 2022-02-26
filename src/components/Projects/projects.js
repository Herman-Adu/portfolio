import React from "react"
import { Link } from "gatsby"
import { Title } from ".."

const Projects = () => {
  return (
    <section
      id="featured-projects"
      className="uk-section uk-section-default uk-padding-remove-top"
    >
      <div className="uk-container uk-container-xsmall uk-text-center uk-section uk-padding-remove-bottom">
        <Title title="Featured Projects" styleclassName="underline" />
      </div>

      <div className="uk-container">
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
              <div className="uk-card uk-card-default uk-card-body">Item</div>
            </li>
            <li data-color="muted">
              <div className="uk-card uk-background-muted uk-card-body">
                Item
              </div>
            </li>
            <li data-color="blue">
              <div className="uk-card uk-card-primary uk-card-body">Item</div>
            </li>
            <li data-color="white">
              <div className="uk-card uk-card-default uk-card-body">Item</div>
            </li>
            <li data-color="muted">
              <div className="uk-card uk-background-muted uk-card-body">
                Item
              </div>
            </li>
            <li data-color="white">
              <div className="uk-card uk-card-default uk-card-body">Item</div>
            </li>
            <li data-color="black">
              <div className="uk-card uk-card-secondary uk-card-body">Item</div>
            </li>
            <li data-color="black">
              <div className="uk-card uk-card-secondary uk-card-body">Item</div>
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
            <li data-color="blue">
              <div className="uk-card uk-card-primary uk-card-body">Item</div>
            </li>
            <li data-color="white">
              <div className="uk-card uk-card-default uk-card-body">Item</div>
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
