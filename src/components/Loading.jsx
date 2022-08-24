import { Loader, Message } from "semantic-ui-react"

const Loading = ({ message = "Loading", children }) => {
  return (
    <Message>
      <Loader active>
        {message}
        {children}
      </Loader>
    </Message>
  )
}

export default Loading