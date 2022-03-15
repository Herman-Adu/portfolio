import React, { useState } from "react"
import { Title } from ".."
import useForm from "../../hooks/useForm"
import validate from "../../constants/validateContact"

const Contact = () => {
  const [username, setUsername] = useState("")
  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    data,
    success,
    serverError,
  } = useForm(Submit, validate)

  function Submit() {
    if (success) {
      setUsername(data.name)
    } else {
      setUsername("")
    }
  }

  return (
    <section className="uk-section uk-section-muted ">
      <div className="uk-container uk-container-center">
        <div
          id="contact"
          className="uk-container uk-container-xsmall uk-text-center uk-section uk-padding-remove-top uk-padding-remove-bottom"
        >
          <Title title="Contact Me" styleClass="underline" />
        </div>
        <div className="uk-section uk-section-muted">
          <div className="uk-container uk-container-large">
            <div className="uk-grid-large uk-margin" uk-grid="true">
              <div className="uk-grid-item-match uk-flex-middle uk-width-expand@m">
                <div className="uk-panel">
                  <h1 className="uk-heading-hero">Let's talk</h1>
                  <div className="uk-divider-small"></div>
                  <div className="uk-margin-medium-top" />
                  <div className="uk-margin uk-width-xlarge">
                    <p>
                      If you need more information about me, my experience,
                      education or projects, do not hesitate to contact me.
                    </p>
                    <p>
                      Phone: (07850) 153-097
                      <br />
                      Email: herman@adudev.co.uk
                      <br />
                      <br />
                    </p>
                    <p>
                      4 Farm Close, Taplow.
                      <br />
                      Maidenhead, SL6 0QF
                    </p>
                  </div>
                  <div className="uk-margin">
                    <div
                      className="uk-flex-middle uk-grid-small uk-child-width-auto uk-margin-medium-top"
                      uk-grid="true"
                    >
                      <div>
                        <a
                          href="/"
                          target="_blank"
                          title="Twitter!"
                          className="uk-button uk-button-text"
                        >
                          <span uk-icon="twitter"></span>
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
                          title="Facebook"
                          className="uk-button uk-button-text"
                        >
                          <span uk-icon="facebook"></span>
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
                      //onSubmit={handleSubmit}
                      name="contact"
                      method="post"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                    >
                      <input type="hidden" name="form-name" value="contact" />
                      <label className="uk-form-label" htmlFor="name">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Enter your name..."
                        onChange={handleChange}
                        value={values.name}
                        className="uk-input uk-margin-small-bottom"
                      />
                      {errors.name && (
                        <div className="uk-alert-danger" uk-alert="true">
                          <p className="uk-form-danger">{errors.name}</p>
                        </div>
                      )}
                      <label className="uk-form-label" htmlFor="name">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        onChange={handleChange}
                        value={values.subject}
                        placeholder="Enter a subject..."
                        className="uk-input uk-margin-small-bottom"
                      />
                      {errors.subject && (
                        <div className="uk-alert-danger" uk-alert="true">
                          <p className="uk-form-danger">{errors.subject}</p>
                        </div>
                      )}
                      <label className="uk-form-label" htmlFor="name">
                        email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                        placeholder="Enter your email..."
                        className="uk-input uk-margin-small-bottom"
                      />
                      {errors.email && (
                        <div className="uk-alert-danger" uk-alert="true">
                          <p className="uk-form-danger">{errors.email}</p>
                        </div>
                      )}
                      <label className="uk-form-label" htmlFor="name">
                        message
                      </label>
                      <textarea
                        id="message"
                        type="text"
                        name="message"
                        rows="5"
                        onChange={handleChange}
                        value={values.message}
                        placeholder="Enter your message..."
                        className="uk-textarea"
                      />
                      {errors.message && (
                        <div className="uk-alert-danger" uk-alert="true">
                          <p className="uk-form-danger">{errors.message}</p>
                        </div>
                      )}
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        className="uk-button uk-button-secondary uk-margin"
                      >
                        submit
                      </button>
                      <br />
                      {success && (
                        <div className="uk-alert-success" uk-alert="true">
                          <a
                            href="/"
                            className="uk-alert-close"
                            uk-close="true"
                          >
                            {null}
                          </a>
                          <p>
                            Thank you {username}, your message has been sent
                            successfully!
                          </p>
                        </div>
                      )}
                      {serverError.error && (
                        <div className="uk-alert-danger" uk-alert="true">
                          <a
                            href="/"
                            className="uk-alert-close"
                            uk-close="true"
                          >
                            {null}
                          </a>
                          <p>Sorry {username}, please try again later!</p>
                        </div>
                      )}
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
