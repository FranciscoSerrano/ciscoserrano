import React, { Component } from "react"
import styled from "styled-components"

import icon from "../../images/icons/moon.svg"

// Import desired stylesheets
import "../../styles/colors.css"
import "../../styles/global.scss"

const Moon = styled.svg`
  background-color: var(--black);
  -webkit-mask: url(${(props) => props.src}) no-repeat center;
  mask: url(${(props) => props.src}) no-repeat center;
  cursor: pointer;
`

export default class moon extends Component {
  render() {
    return <Moon src={icon} className="icon" />
  }
}
