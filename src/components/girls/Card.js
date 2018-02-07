import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import Profile from './Profile'
import Images from './Image'

export default class Cards extends Component {
  render() {
    const {src, href, name, age} = this.props
    return (
      <Card fluid>
        <Images src={src}/>
        <Card.Content>
          <Card.Header textAlign='center'>
            <a href={href} target='_blank'>
              {name}
            </a>
          </Card.Header>
          <Card.Description textAlign='center'>
            <Profile name={name} age={age}/>
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}
