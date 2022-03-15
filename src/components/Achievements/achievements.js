import React from "react"
import { Title } from ".."

import Marketing1 from "../../images/marketing-1.svg"
import Marketing2 from "../../images/marketing-1.svg"
import Marketing3 from "../../images/marketing-1.svg"
import Marketing4 from "../../images/marketing-1.svg"
import Marketing5 from "../../images/marketing-1.svg"
//import Marketing6 from "../../images/marketing-1.svg"
//import Marketing7 from "../../images/marketing-1.svg"
import Marketing8 from "../../images/marketing-8.svg"
import Marketing9 from "../../images/marketing-9.svg"
import Testimonial from "../../images/testimonial.jpg"

const Achievements = ({ achievements }) => {
  return (
    <section
      id="achievements"
      className="uk-section uk-section-muted uk-padding-remove-top"
    >
      <div className="uk-container uk-container-center uk-margin-medium-top">
        <div className="uk-container uk-container-xsmall uk-text-center">
          <Title title="Achievements" styleClass="underline" />
        </div>

        <div className="uk-container">
          <div
            className="uk-grid uk-grid-large uk-child-width-1-3@s "
            uk-grid="true"
            uk-scrollspy="target: > div; delay: 150; cls: uk-animation-slide-bottom-medium"
          >
            {achievements.map((item, index) => {
              const { id, image, title, text } = item

              return (
                <div key={id} className="uk-text-center uk-margin-medium-top">
                  <div>
                    <img
                      src={image}
                      uk-img="true"
                      alt="Marketing one"
                      style={{ height: "100px", marginBottom: "10px" }}
                    />
                  </div>

                  <h4 className="uk-margin-small-bottom uk-margin-top uk-margin-remove-adjacent gradient-text">
                    {title}
                  </h4>
                  <p>{text}</p>
                </div>
              )
            })}

            {/* <div className="uk-text-center">
              <img src={Marketing3} uk-img="true" alt="Marketing three" />
              <h4 className="uk-margin-small-bottom uk-margin-top uk-margin-remove-adjacent">
                20+ Projects
              </h4>
              <p>Open Source Projects encouraging knolwdge sharing</p>
            </div>
            <div className="uk-text-center">
              <img src={Marketing5} uk-img="true" alt="Marketing five" />
              <h4 className="uk-margin-small-bottom uk-margin-top uk-margin-remove-adjacent">
                AduDev
              </h4>
              <p>
                Full Stack IT Development & Consulting Services Platform for my
                company
              </p>
            </div>
            <div className="uk-text-center">
              <img src={Marketing5} uk-img="true" alt="Marketing five" />
              <h4 className="uk-margin-small-bottom uk-margin-top uk-margin-remove-adjacent">
                H&S Pepper Co
              </h4>
              <p>
                24/7 support. We're always here for you no matter what time of
                day.
              </p>
            </div>
            <div className="uk-text-center">
              <img src={Marketing4} uk-img="true" alt="Marketing four" />
              <h4 className="uk-margin-small-bottom uk-margin-top uk-margin-remove-adjacent">
                Clients
              </h4>
              <p>Builds new relationships one client at a time</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
