import React from "react"
import styled from "styled-components"

// Import relevant components

// Import desired stylesheets
import "../../../styles/colors.css"
import "../../../styles/global.scss"

const ExperienceItem = styled.div``

const experienceItem = (props) => {
  return (
    <ExperienceItem>
      <h3>{props.title}</h3>
      <h4>{props.subTitle}</h4>
      <p>{props.description}</p>
    </ExperienceItem>
  )
}

export default experienceItem
