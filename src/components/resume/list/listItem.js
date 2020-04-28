import React from "react"
import styled from "styled-components"

// Import relevant components

// Import desired stylesheets
import "../../../styles/colors.css"
import "../../../styles/global.scss"

const ListItem = styled.li``

const listItem = (props) => {
  return <ListItem>{props.text}</ListItem>
}

export default listItem
