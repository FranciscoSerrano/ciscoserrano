import React from "react"
import styled from "styled-components"

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 7.5%;
  padding-right: 10%;

  @media (min-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }
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
