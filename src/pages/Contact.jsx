import { FormProvider, useForm } from "@codewizard-dt/use-form-hook"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Header } from "semantic-ui-react"
import contactFormPost from "../utils/contactFormPost"


const Contact = (props) => {
  const { Form } = useForm()
  const [submitted, setSubmitted] = useState(false)
  const submit = async (data) => {
    const result = await contactFormPost(data)
    if (result.ok) {
      setSubmitted(true)
      return { data }
    } else {
      return { error: 'Form error' }
    }
  }
  return (
    <div>
      <FormProvider>
        <Header as="h1">
          Contact Form
          <Header.Subheader>Created with my <Link to="/projects/react-form-handler-package">React Forms package</Link>  </Header.Subheader>
        </Header>
        <Form submit={submit} display={submitted ? 'disabled' : 'edit'} successMessage="Thank you! Message sent!" fields={[
          { name: 'name', required: true },
          { name: 'email', required: true },
          { name: 'message', control: 'textarea', required: true }
        ]} />

      </FormProvider>
    </div>
  )
}

export default Contact