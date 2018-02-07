import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import Gallery from 'react-photo-gallery'

export default class Galleries extends Component {
  render() {
    const photos = [
      { src: 'https://images.unsplash.com/photo-1495277493816-4c359911b7f1?ixlib=rb-0.3.5&s=d8c35ba419abc34c46ebfea04fd5055c&auto=format&fit=crop&w=1492&q=80', width: 4, height: 3 },
      { src: 'https://images.unsplash.com/photo-1497892597262-2983614aa886?ixlib=rb-0.3.5&s=642a314a6f1945e25692b532e9e71019&auto=format&fit=crop&w=750&q=80', width: 1, height: 1 },
      { src: 'https://images.unsplash.com/photo-1513303100732-4f7f7ae402ea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1604ff6a28207bd553e4b088ba23c1c4&auto=format&fit=crop&w=334&q=80', width: 3, height: 4 },
    ];

    return (
    <div>
      <Grid centered columns={1} padded>
        <Grid.Column>
          <Gallery photos={photos} onClick={this.openLightbox} />
        </Grid.Column>
      </Grid>
    </div>
    )
  }
}
