import React from "react"
import { Title } from ".."

const Contact = () => {
  return (
    <section id="contact" className="uk-section uk-section-muted ">
      <div className="uk-container uk-container-center">
        <div className="uk-container uk-container-xsmall uk-text-center uk-section uk-padding-remove-top uk-padding-remove-bottom">
          <Title title="Contact Me" styleClass="underline" />
        </div>
        <div
          className="uk-section uk-section-muted"
          uk-height-viewport="expand: true"
        >
          <div className="uk-container uk-container-large">
            <div className="uk-grid-large uk-margin" uk-grid="true">
              <div className="uk-grid-item-match uk-flex-middle uk-width-expand@m">
                <div className="uk-panel">
                  <h1 className="uk-heading-hero">Let's talk</h1>
                  <div className="uk-divider-small"></div>
                  <div className="uk-margin uk-width-xlarge">
                    <p>
                      If you need more information about any of our services, do
                      not hesitate to contact us.
                    </p>
                    <p>
                      Phone: (907) 230-0259
                      <br />
                      Email: info@yourdomain.com
                      <br />
                      <br />
                    </p>
                    <p>
                      8263 Courtland Dr.
                      <br />
                      Romeoville, IL 60446
                    </p>
                  </div>
                  <div className="uk-margin">
                    <div
                      className="uk-flex-middle uk-grid-small uk-child-width-auto"
                      uk-grid="true"
                    >
                      <div>
                        <a
                          href="/"
                          target="_blank"
                          title="Facebook"
                          className="uk-button uk-button-text"
                        >
                          <span uk-icon="facebook"></span>
                        </a>
                      </div>
                      <div>
                        <a
                          href="/"
                          target="_blank"
                          title="Instagram"
                          className="uk-button uk-button-text"
                        >
                          <span uk-icon="instagram"></span>
                        </a>
                      </div>
                      <div>
                        <a
                          href="/"
                          target="_blank"
                          title="Pinterest"
                          className="uk-button uk-button-text"
                        >
                          <span uk-icon="pinterest"></span>
                        </a>
                      </div>
                      <div>
                        <a
                          href="/"
                          target="_blank"
                          title="LinkedIn"
                          className="uk-button uk-button-text"
                        >
                          <span uk-icon="linkedin"></span>
                        </a>
                      </div>
                      <div>
                        <a
                          href="/"
                          target="_blank"
                          title="Yelp!"
                          className="uk-button uk-button-text"
                        >
                          <span uk-icon="yelp"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="uk-grid-item-match uk-flex-middle uk-width-expand@m">
                <div className="uk-panel">
                  <div className="uk-margin">
                    <form
                      name="contact-form"
                      method="post"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                    >
                      <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="name">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="form-s-text"
                          placeholder="Enter your name..."
                          className="uk-input"
                        />
                      </div>
                      <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="email">
                          E-Mail
                        </label>
                        <input
                          type="text"
                          name="email"
                          id="form-s-text"
                          placeholder="Enter your E-Mail address..."
                          className="uk-input"
                        />
                      </div>
                      <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="subject">
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          id="form-s-text"
                          placeholder="Enter your subject..."
                          className="uk-input"
                        />
                      </div>
                      <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="message">
                          Message
                        </label>
                        <textarea
                          name="message"
                          id="messafe"
                          rows="5"
                          placeholder="Enter your message..."
                          className="uk-textarea"
                        ></textarea>
                        <button class="uk-button uk-button-secondary uk-margin">
                          Button
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
