import React, { Component } from "react"
import styled from "styled-components"

import icon from "../../images/icons/sun.svg"

// Import desired stylesheets
import "../../styles/colors.css"
import "../../styles/global.scss"

const Sun = styled.svg`
  background-color: var(--white);
  -webkit-mask: url(${(props) => props.src}) no-repeat center;
  mask: url(${(props) => props.src}) no-repeat center;
  cursor: pointer;
`

export default class sun extends Component {
  render() {
    return <Sun src={icon} className="icon" />
  }
}
