import React from "react"
import styled from "styled-components"

// Import relevant components

// Import desired stylesheets
import "../../../styles/colors.css"
import "../../../styles/global.scss"

const List = styled.div``

const list = ({ children }, props) => {
  return <List>{children}</List>
}

export default list
