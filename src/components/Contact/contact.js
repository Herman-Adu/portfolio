import React, { useState } from "react"
import { Title } from ".."
import useForm from "../../hooks/useForm"
import validate from "../../constants/validateContact"

const Contact = () => {
  /* const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const resetForm = () => {
    setValues({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values }),
    })
      .then(() => alert("Success!"))
      .then(resetForm())
      .catch(error => alert(error))

    e.preventDefault()
  } */

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

    // check if there were server errors and set the error below the success div uk-alert-danger
    //console.log("Submit function - success:", success)
    //console.log("Submit function - user:", user)
    //console.log("Submit function - data.name:", data.name)

    // if there is a server error return server error jsx under the form
    //console.log("Submit function - data:", data)
    //console.log("Submit function - data:", serverError)
    //console.log("Submit function: Submitted Successfully")
  }

  return (
    <section id="contact" className="uk-section uk-section-muted ">
      <div className="uk-container uk-container-center">
        <div className="uk-container uk-container-xsmall uk-text-center uk-section uk-padding-remove-top uk-padding-remove-bottom">
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
                      className="uk-flex-middle uk-grid-small uk-child-width-auto uk-margin-medium-top"
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
                        class="uk-button uk-button-secondary uk-margin"
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
