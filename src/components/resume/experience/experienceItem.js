import React from "react"
import styled from "styled-components"

// Import relevant components

// Import desired stylesheets
import "../../../styles/colors.css"
import "../../../styles/global.scss"

const ExperienceItem = styled.div`
  &:nth-child(n) {
    margin-bottom: 40px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const experienceItem = (props) => {
  return (
    <ExperienceItem>
      <h3>{props.title}</h3>
      <h4>{props.subTitle}</h4>
      <p>{props.description}</p>
      <ul>{props.children}</ul>
    </ExperienceItem>
  )
}

export default experienceItem
