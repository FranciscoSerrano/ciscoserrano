import React, { Component } from "react"
import styled from "styled-components"

// Import desired stylesheets
import "../../styles/colors.css"
import "../../styles/global.scss"

// Import relevant components
import icon from "../../images/icons/sun.svg"

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
