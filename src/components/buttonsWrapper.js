import React from "react"
import styled from "styled-components"

// Import desired stylesheets
import "../styles/colors.css"
import "../styles/global.scss"

// Import relevant components
import ContactLinks from '../components/contact-links/contactLinks'

const ButtonsWrapper = styled.div`
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 80px;

  .icon {
    height: 24px;
    width: 24px;
  }

  .toggle-switcher {
    margin-bottom: 64px;

    > :nth-child(n) {
      -webkit-transition: all 200ms ease-in-out;
      -mox-transition: all 200ms ease-in-out;
      -o-transition: all 200ms ease-in-out;
      transition: all 200ms ease-in-out;
    }
  }
`

const buttonsWrapper = ({ children }) => {
  return (
    <ButtonsWrapper className="container">
      {children}
      <ContactLinks />
    </ButtonsWrapper>
  )
}

export default buttonsWrapper
