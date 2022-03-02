import { useState, useEffect } from "react"
import { navigate } from "gatsby"
const axios = require("axios").default

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [data, setData] = useState({
    id: 0,
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [serverError, setServerError] = useState({
    error: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleChange = event => {
    const { name, value } = event.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = async event => {
    event.preventDefault()
    setErrors(validate(values))

    // async axios call and post the values to strapi
    try {
      let response = await axios.post("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...values }),
      })
      // navigate back to contact and clear history
      //navigate("/contact")

      // set data, success and reset the form
      setData(response.data)
      console.log("Data", response.data)
      setSuccess(true)
      resetFormValues()
      setIsSubmitting(true)
    } catch (err) {
      setServerError(err)
    }
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    }
  }, [errors, isSubmitting, callback])

  const resetFormValues = () => {
    values.name = ""
    values.email = ""
    values.subject = ""
    values.message = ""
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    data,
    success,
    serverError,
  }
}

export default useForm
