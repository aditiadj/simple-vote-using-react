import React from 'react'
import { Grid } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route } from 'react-router-dom'
import Nav from './components/nav/Navigation'
import Ex from './components/girls/Ex'
import Gallery from './components/gallery/Galleries'
import Banner from './components/banner/Videos'

const Exm = () => (
  <Ex/>
)

const Galleries = () => (
  <Grid centered columns={1}>
    <Grid.Column>
      <Gallery/>
    </Grid.Column>
  </Grid>
)

const Video = () => (
  <Banner/>
)

const BasicExample = () => (
<Router>
  <Grid columns={1}>
    <Grid.Row>
      <Nav/>
    </Grid.Row>
    <Grid.Column >
      <Route exact path='/home' component={Exm}/>
      <Route path='/photo' component={Galleries}/>
      <Route path='/video' component={Video}/>
    </Grid.Column>
</Grid>
</Router>
)

export default BasicExample
