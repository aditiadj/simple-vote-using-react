import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {
  Link
} from 'react-router-dom'

export default class Links extends Component {
  state = { activeItem : 'VOTE' }
  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem : name
    })
  }

  render() {
    const { activeItem } = this.state
    return (
      <Menu.Menu>
        <Link to='/home'><Menu.Item name='VOTE' active={activeItem === 'VOTE'} onClick={this.handleItemClick}/></Link>
        <Link to='/photo'><Menu.Item name='GALLERY' active={activeItem === 'GALLERY'} onClick={this.handleItemClick}/></Link>
        <Link to='/video'><Menu.Item name='VIDEO' active={activeItem === 'VIDEO'} onClick={this.handleItemClick}/></Link>
      </Menu.Menu>
    )
  }
}
