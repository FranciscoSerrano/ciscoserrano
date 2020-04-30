import React from "react"
import styled from "styled-components"

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 2px solid var(--grayLight);
  padding-right: 160px;
  margin-right: 80px;
`

const leftColumn = (props, title, subTitle, description) => {
  return (
    <LeftColumn
      className="col-9"
      title={title}
      subTitle={subTitle}
      description={description}
    >
      {props.children}
    </LeftColumn>
  )
}

export default leftColumn
