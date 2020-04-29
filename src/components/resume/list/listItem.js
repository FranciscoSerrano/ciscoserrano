import React from "react"
import styled from "styled-components"

// Import relevant components

// Import desired stylesheets
import "../../../styles/colors.css"
import "../../../styles/global.scss"

const ListItem = styled.li`
  list-style: none;

  &:nth-child(n) {
    margin-bottom: 4px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const listItem = (props) => {
  return <ListItem>{props.text}</ListItem>
}

export default listItem
