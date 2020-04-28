import React, { Component } from "react"
import styled from "styled-components"

import icon from "../../images/icons/linkedin-in.svg"

// Import desired stylesheets
import "../../styles/colors.css"
import "../../styles/global.scss"

const LinkedIn = styled.svg`
  -webkit-mask: url(${(props) => props.src}) no-repeat center;
  mask: url(${(props) => props.src}) no-repeat center;
  cursor: pointer;
`

export default class linkedIn extends Component {
  render() {
    return <LinkedIn src={icon} className="icon" />
  }
}
