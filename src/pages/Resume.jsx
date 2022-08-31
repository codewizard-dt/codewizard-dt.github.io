import { Button, Card, Header, List, Modal, Segment } from "semantic-ui-react"
import { Document, Page } from 'react-pdf'
import './Resume.sass'
import { useState } from "react"

const Resume = ({ projects }) => {
  const [open, setOpen] = useState(false)

  const toggleModalBtn = (
    <Modal
      id="resume-modal"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button primary floated="right" icon='file pdf outline' content="PDF" />}
    >
      <Modal.Header as="h1">
        Resume PDF
        <Button icon='x' color="red" floated="right" onClick={() => setOpen(false)} />
        <Button as="a" href="/assets/resume-david-taylor.pdf" download primary floated="right" icon='download' content='Download' />
      </Modal.Header>
      <Modal.Content>
        <Document file="/assets/resume-david-taylor.pdf">
          <Page pageNumber={1} w />
        </Document>
      </Modal.Content>
    </Modal>
  )

  return (
    <div id="resume">
      <Header as='h1'>
        Professional Resumé
        {toggleModalBtn}
      </Header>
      <Segment id="personal-statement" basic>
        <p>Ambitious and flexible problem solver with over 5 years experience in analyzing complex systems and building solutions. Seeking a developer role to apply my attention to detail and to collaborate with the goal of creating innovative and reliable solutions to technical problems.</p>
        <List>
          <List.Header as='h3'>Education</List.Header>
          <List.Item><b>University of Texas Coding Bootcamp</b> - Rigorous full stack courses and agile collaborative teamwork</List.Item>
          <List.Item><b>Udemy (online)</b> - Full courses on Typescript, React, Angular, and MERN stack</List.Item>
        </List>
      </Segment>
      <Card.Group itemsPerRow={2} stackable>
        <Card>
          <Card.Content>
            <Card.Header>Modern State of Design</Card.Header>
            <Card.Description>
              <List>
                <List.Item>Mastery of responsive design using CSS flexboxes, grids, transformation, and animations</List.Item>
                <List.Item>Expertise with React, Express, and Node</List.Item>
                <List.Item>Command of bundling tools including Webpack, Babel, RollUp, and Storybook</List.Item>
              </List>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Routes and APIs</Card.Header>
            <Card.Description>
              <List>
                <List.Item>Building and utilizing RESTful and GraphQL APIs</List.Item>
                <List.Item>Handling data persistence and state management within an app</List.Item>
                <List.Item>Integrating multiple data sources to streamline and enhance user experience</List.Item>
              </List>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Database Management</Card.Header>
            <Card.Description>
              <List>
                <List.Item>Creating MySQL and NoSQL database models</List.Item>
                <List.Item>Securely accessing and managing local and cloud databases</List.Item>
                <List.Item>Querying and aggregating complex relationships between models</List.Item>
              </List>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Teamwork</Card.Header>
            <Card.Description>
              <List>
                <List.Item>Firm yet gentle hand when leading a team</List.Item>
                <List.Item>Strong interpersonal and technical communication skills</List.Item>
                <List.Item>Collaborative and enthusiastic in any team setting</List.Item>
              </List>
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  )
}

export default Resume