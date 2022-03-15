import React from "react"
//import { StaticImage } from "gatsby-plugin-image"
//import { GatsbyImage, getImage } from "gatsby-plugin-image"
//import Markdown from "react-markdown"

const Project = ({ projects, image, styleClass }) => {
  //console.log("projects:", projects)
  //console.log("Image path:", projects.node.ImagePath)

  return (
    <div className={styleClass}>
      {/* <!-- card --> */}
      <div className="uk-card uk-card-small uk-card-default">
        <div className="uk-card-header">
          <div className="uk-grid uk-grid-small uk-text-small" uk-grid="true">
            <div className="uk-width-expand">
              <span className="cat-txt uk-flex">{projects.node.Type}</span>
            </div>
            <div className="uk-width-auto uk-text-right uk-text-muted">
              <span uk-icon="icon: clock; ratio: 1"></span> {projects.node.Time}
            </div>
          </div>
        </div>
        <div className="uk-card-media">
          <div className="uk-inline-clip uk-transition-toggle" tabIndex="-1">
            <div className="uk-width-auto">
              {/* <GatsbyImage alt="text" image={image} /> */}
              {/* image && (
                  <GatsbyImage
                    alt={headerTitle}
                    image={getImage(
                      image.localFile.childImageSharp.gatsbyImageData
                    )}
                  />
                ) */}
              {/*  <StaticImage
                  src={`${projects.node.ImagePath}`}
                  //src={`${projects.node.ImagePath.toString()}`}
                  //src="../../images/gpt3.png"
                  //src={[projects.node.ImagePath]}
                  placeholder="blurred"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="GPT-3 Open AI Website"
                  loading="eager"
                /> */}
              <img src={image} alt="" />
            </div>
            <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-primary">
              <a
                href={projects.node.Link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="preview-button"
                alt="preview-button"
                text="preview-button"
                className="uk-button uk-button-default uk-button-small uk-margin uk-margin-medium-top"
              >
                Preview
              </a>
              <div />
              <span uk-icon="icon: heart; ratio: 1"></span> 225{" "}
              <span uk-icon="icon: comment; ratio: 1"></span>35
            </div>
          </div>
        </div>

        <div className="uk-card-body uk-text-left">
          <h6 className="uk-margin-small-bottom  uk-text-bold">
            {projects.node.Title}
          </h6>
          <p className="uk-text-small uk-text-muted">
            {projects.node.Description}
          </p>
          <div className="project-stack">
            {projects.node.Stack.map(item => {
              //console.log("Item:", item)
              return <span key={item.id}>{item.name}</span>
            })}
          </div>
        </div>

        <div className="uk-card-footer">
          <div
            className="uk-grid uk-grid-small uk-grid-divider uk-flex uk-flex-middle"
            uk-grid="true"
          >
            <div className="uk-width-expand uk-text-small">Herman Adu</div>
            <div className="uk-width-auto uk-text-right">
              <div className="uk-flex uk-dark">
                <a
                  uk-tooltip="title: Twitter; pos: bottom-center"
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="twitter"
                  alt="twitter"
                  text="twitter"
                  className="uk-icon-button uk-margin-small-right"
                  uk-icon="icon: twitter; ratio: 1"
                >
                  {null}
                </a>
                <a
                  uk-tooltip="title: Linkedin; pos: bottom-center"
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="linkedin"
                  alt="linkedin"
                  text="linkedin"
                  className="uk-icon-button uk-margin-small-right"
                  uk-icon="icon: linkedin; ratio: 1"
                >
                  {null}
                </a>
                <a
                  uk-tooltip="title: Facebook; pos: bottom-center"
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="facebook"
                  alt="facebook"
                  text="facebook"
                  className="uk-icon-button uk-margin-small-right"
                  uk-icon="icon: facebook; ratio: 1"
                >
                  {null}
                </a>
              </div>
            </div>
            <div className="uk-width-auto uk-text-right">
              {projects.node.GitHub !== "Private Repository" ? (
                <a
                  uk-tooltip="title: GitHub; pos: bottom-center"
                  href={projects.node.GitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github"
                  alt="github"
                  text="github"
                  className="uk-icon-button uk-margin-small-right"
                  uk-icon="icon: github; ratio: 1"
                >
                  {null}
                </a>
              ) : (
                <span
                  className="uk-dark"
                  uk-tooltip="title: Private Repository; pos: bottom-center"
                  uk-icon="icon: github; ratio: 1.2"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- /card --> */}
    </div>
  )
}

export default Project
