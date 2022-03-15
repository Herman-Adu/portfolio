import React from "react"
import { Title } from ".."

const Technologies = ({ technologies }) => {
  return (
    <section
      id="technologies"
      className="uk-section uk-section-muted  uk-padding-remove-top uk-margin-medium-bottom"
    >
      <div className="uk-container uk-container-xsmall uk-text-center uk-section uk-padding-remove-bottom">
        <Title title="Featured Technologies" styleClass="underline" />
      </div>

      <div className="uk-container uk-margin-top">
        <hr className="uk-divider-icon" />
        <div
          className="uk-grid uk-grid-large uk-child-width-1-3@m"
          data-uk-grid
          data-uk-scrollspy="target: > div; delay: 150; cls: uk-animation-slide-bottom-medium"
        >
          {technologies.map(item => {
            const { id, image, title, text } = item

            return (
              <div
                key={id}
                alt={title}
                title={title}
                className="uk-text-center"
              >
                <span className="uk-text-large" style={{ color: "#ff7f00" }}>
                  <img
                    src={image}
                    style={{ height: "100px", marginBottom: "10px" }}
                    alt=""
                  />
                </span>
                <h3 className="uk-card-title uk-margin-remove-top">{title}</h3>
                <p>{text}</p>
              </div>
            )
          })}
        </div>
        <hr className="uk-divider-icon" />
      </div>
    </section>
  )
}

export default Technologies
