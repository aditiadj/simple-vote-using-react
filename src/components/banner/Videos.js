import React, { Component } from 'react'
import { Grid, Embed } from 'semantic-ui-react'

export default class Videos extends Component {
  render() {
    return (
      <Grid centered columns={1}>
        <Grid.Column>
          <Embed
            autoplay={false}
            active={true}
            brandedUI
            color='white'
            hd={true}
            iframe={{
              allowFullScreen: true,
            }}
            id='LIFnWMHNmxs'
            source='youtube'
          />
        </Grid.Column>
      </Grid>
    )
  }
}
