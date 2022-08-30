import { Container, Grid, Header, List, Segment, SegmentGroup } from "semantic-ui-react"
import Banner from "../components/Banner"
import './AboutMe.sass'

const AboutMe = (props) => {
  return (
    <div id="about">
      <Banner bgImgSrc="/images/analytics.jpeg" roundedImgSrc='/images/avatar.jpg' caption='About Me' />
      <Header as="h1">
        David Taylor
        <Header.Subheader>Austin TX since 2009</Header.Subheader>
      </Header>
      <SegmentGroup>
        <Segment>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={6}>
                <Header as='h2'>Life Experience</Header>
              </Grid.Column>
              <Grid.Column width={10}>
                <List horizontal>
                  <List.Item icon="desktop" content="Full Stack Coding Bootcamp, University of Texas" />
                  <List.Item icon="medkit" content="Self employed for 7 years as an acupuncturist" />
                  <List.Item icon="code" content="Self taught for over 5 years in web development" />
                  <List.Item icon="thumbs up outline" content="Demonstrated history of cooperation and leadership" />
                  <List.Item icon="graduation cap" content="Background in math, science, and medicine (BS & MS)" />
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={6}>
                <Header as="h2">Professional Interests</Header>
              </Grid.Column>
              <Grid.Column width={10}>
                <List >
                  <List.Item icon="user" content="User focused development" />
                  <List.Item icon='share square' content="Creating packages and tools for full stack developers" />
                  <List.Item icon="tasks" content="Tackling difficult issues" />
                  <List.Item icon='zoom-in' content="Applying critical thinking skills" />
                  <List.Item icon='american sign language interpreting' content="Effective technical communication" />
                  <List.Item icon='comments' content="Sharing knowledge" />
                  <List.Item icon='users' content="Collaborative problem solving" />
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={6}>
                <Header as="h2">Personal Interests</Header>
              </Grid.Column>
              <Grid.Column width={10}>
                <List >
                  <List.Item icon='cloud' content="Quantum physics and consciousness" />
                  <List.Item icon='eye' content="Mind Body connection" />
                  <List.Item icon='universal access' content="Well rounded physical fitness" />
                  <List.Item icon='tint' content="Sustainability and moral consumption" />
                  <List.Item icon='globe' content="Giving back to community" />
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>

        </Segment>
      </SegmentGroup>
    </div>
  )
}

export default AboutMe