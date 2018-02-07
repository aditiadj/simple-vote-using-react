import React, { Component } from 'react'
import { List, Button } from 'semantic-ui-react'
import VoteCount from "./VoteCount"

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.increaseVote = this.increaseVote.bind(this)
  }

  increaseVote() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }

  render() {
    const {name, age} = this.props
    return (
      <List>
        <List.Item>
          <List.Icon name='user circle'/>
          <List.Content>{name}</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='male'/>
          <List.Content>{age}</List.Content>
        </List.Item>
        <Button color='teal' onClick={this.increaseVote}>VOTE</Button>
        <VoteCount count={this.state.count} />
      </List>

    )
  }
}
