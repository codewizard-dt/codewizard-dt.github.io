import { Container, Header, List, Segment, SegmentGroup } from "semantic-ui-react"
import Banner from "../components/Banner"
import './AboutMe.sass'

const AboutMe = (props) => {
  return (
    <Container id="about">
      <Banner bgImgSrc="/images/analytics.jpeg" roundedImgSrc='/images/avatar.jpg' caption='About Me' />
      <Header as="h1">
        David Taylor
        <Header.Subheader>Austin TX since 2009</Header.Subheader>
      </Header>
      <SegmentGroup>
        <Segment>
          <Header>Life Experience</Header>
          <List horizontal>
            <List.Item content="University of Texas Full Stack Coding Bootcamp" />
            <List.Item content="Self employed for 7 years as an acupuncturist" />
            <List.Item content="Self taught for over 5 years in web development" />
            <List.Item content="Demonstrated history of cooperation and leadership" />
            <List.Item content="Background in math, science, and medicine (BS & MS)" />
          </List>
        </Segment>
        <Segment>
          <Header>Professional Interests</Header>
          <List horizontal>
            <List.Item content="User focused development" />
            <List.Item content="Creating packages and tools for full stack developers" />
            <List.Item content="Tackling difficult issues" />
            <List.Item content="Applying critical thinking skills" />
            <List.Item content="Effective technical communication" />
            <List.Item content="Sharing knowledge" />
            <List.Item content="Collaborative problem solving" />
          </List>
        </Segment>
        <Segment>
          <Header>Personal Interests</Header>
          <List horizontal>
            <List.Item content="Quantum physics and consciousness" />
            <List.Item content="Mind Body connection" />
            <List.Item content="Well rounded physical fitness" />
            <List.Item content="Sustainability and moral consumption" />
            <List.Item content="Giving back to community" />
          </List>
        </Segment>
      </SegmentGroup>
    </Container>
  )
}

export default AboutMe