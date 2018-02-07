import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

export default class Images extends Component {
  render() {
  const { src, href } = this.props
    return (<Image src={src} href={href} fluid/>)
  }
}
