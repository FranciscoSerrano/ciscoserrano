import React, { Component } from "react"
import styled from "styled-components"

import icon from "../../images/icons/envelope.svg"

// Import desired stylesheets
import "../../styles/colors.css"
import "../../styles/global.scss"

const Envelope = styled.svg`
  -webkit-mask: url(${(props) => props.src}) no-repeat center;
  mask: url(${(props) => props.src}) no-repeat center;
  cursor: pointer;
`

export default class envelope extends Component {
  render() {
    return <Envelope src={icon} className="icon" />
  }
}
