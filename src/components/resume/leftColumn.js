import React from "react"
import styled from "styled-components"

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 7.5%;
  padding-right: 10%;

  @media (min-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }
`

const leftColumn = (props, title, subTitle, dateRange, description) => {
  return (
    <LeftColumn
      className="col-9"
      title={title}
      subTitle={subTitle}
      dateRange={dateRange}
      description={description}
    >
      {props.children}
    </LeftColumn>
  )
}

export default leftColumn
