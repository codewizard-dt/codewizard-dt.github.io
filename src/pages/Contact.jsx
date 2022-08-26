import { FormProvider, useForm } from "@codewizard-dt/use-form-hook"
import { useState } from "react"
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
        <Header as="h1">Contact Me</Header>
        <Form submit={submit} display={submitted ? 'disabled' : 'edit'} successMessage="Thank you! Message sent!" fields={[
          { name: 'name' },
          { name: 'email' },
          { name: 'message', control: 'textarea' }
        ]} />

      </FormProvider>
    </div>
  )
}

export default Contact