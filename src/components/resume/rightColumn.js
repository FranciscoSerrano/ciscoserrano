import React from "react"
import styled from "styled-components"

// Import relevant components

// Import desired stylesheets
import "../../styles/colors.css"
import "../../styles/global.scss"

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const rightColumn = (props, title, subTitle, description) => {
  return (
    <RightColumn
      className="col-3"
      title={title}
      subTitle={subTitle}
      description={description}
    >
      {props.children}
    </RightColumn>
  )
}

export default rightColumn
