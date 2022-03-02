export default function validateContact(values) {
  let errors = {}

  if (!values.name) {
    errors.name = "Name required"
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.email) {
    errors.email = "Email required"
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid"
  }

  if (!values.subject) {
    errors.subject = "subject is required"
  } else if (values.subject.length > 20) {
    errors.subject = "subject cant be more than 20 characters"
  }

  if (!values.message) {
    errors.message = "message required"
  } else if (values.message.length > 500) {
    errors.message = "Message cant be more than 500 characters"
  }

  return errors
}
