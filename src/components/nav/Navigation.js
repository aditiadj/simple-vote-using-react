import React, { Component } from 'react'
import { Grid, Menu } from 'semantic-ui-react'
import Link from './Link'


export default class Navigation extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column>
            <Menu color='red' pointing secondary>
              <Menu.Menu position='center'>
              </Menu.Menu>
              <Link />
            </Menu>
        </Grid.Column>
      </Grid>
    )
  }
}
