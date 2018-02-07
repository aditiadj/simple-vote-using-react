import React, { Component } from 'react'
import Cards from './Card'
import { Grid } from 'semantic-ui-react'

export default class App extends Component {
  render() {
    return (
     <div>
      <Grid centered columns={6} padded>
        <Grid.Column mobile={16} tablet={8} computer={4}>
          <Cards
            src='/images/girls/chelsea.jpg'
            name='Chelsea Islan'
            age={22}
          >
          </Cards>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={4}>
          <Cards
            src='/images/girls/maudy.jpg'
            name='Maudy Ayunda'
            age={23}
          >
          </Cards>
        </Grid.Column>

        <Grid.Column mobile={16} tablet={8} computer={4}>
          <Cards
            src='/images/girls/tatjana.jpg'
            name='Tatjana Saphira'
            age={20}
          >
          </Cards>
        </Grid.Column>
      </Grid>

      <Grid centered columns={6} padded>
        <Grid.Column mobile={16} tablet={8} computer={4}>
          <Cards
            src='/images/girls/ariel.jpg'
            name='Ariel Tatum'
            age={21}
          >
          </Cards>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={4}>
          <Cards
            src='/images/girls/vanesha.jpg'
            name='Vanesha Priscillia'
            age={18}
          >
          </Cards>
        </Grid.Column>

        <Grid.Column mobile={16} tablet={8} computer={4}>
          <Cards
            src='/images/girls/pevita.jpg'
            name='Pevita Pearce'
            age={25}
          >
          </Cards>
        </Grid.Column>
      </Grid>
     </div>
    )
  }
}
