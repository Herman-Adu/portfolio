import React from "react"
import { Title } from ".."

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="uk-section uk-section-muted uk-padding-remove-top"
    >
      <div className="uk-container uk-container-xsmall uk-text-center uk-section ">
        <Title title="Achievements" styleClass="underline" />
      </div>
      <div className="uk-container">
        <div class="uk-child-width-expand@s  uk-grid-match" uk-grid="true">
          <div>
            <div class="uk-card uk-card-default uk-card-body uk-border-rounded">
              <h3>BSC 2:1 Hons</h3>
              Bachelor of science degree, Computer communications with applied
              computing
            </div>
          </div>
          <div>
            <div class="uk-card uk-card-default uk-card-body uk-border-rounded">
              <h3>20+</h3>
              Open Source Projects encouraging knolwdge sharing
            </div>
          </div>
          <div>
            <div class="uk-card uk-card-default uk-card-body uk-border-rounded">
              <h3>AduDev</h3>
              IT Development Service Platform for my company
            </div>
          </div>
          <div>
            <div class="uk-card uk-card-default uk-card-body uk-border-rounded">
              <h3>H&S Peppers Co</h3>
              On-Line E-Commerce platform selling home grown, home made pepper
              sauce
            </div>
          </div>
          {/* <div>
            <div class="uk-card uk-card-default uk-card-body uk-border-rounded">
              My own clients & peace of mind
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Achievements
