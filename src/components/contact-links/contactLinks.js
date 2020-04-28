import React from "react"
import styled from "styled-components"

// Import desired stylesheets
import "../../styles/colors.css"
import "../../styles/global.scss"

// Import icons
import { Envelope, LinkedIn, GitHub, Instagram } from "./icons"

const ContactLinks = styled.div`
  &.contact-links {
    display: flex;
    flex-direction: column;

    a {
      height: 24px;
      width: 24px;
      margin-bottom: 24px;
    }

    .icon {
      -webkit-transition: all 200ms ease-in-out;
      -mox-transition: all 200ms ease-in-out;
      -o-transition: all 200ms ease-in-out;
      transition: all 200ms ease-in-out;
    }
  }
`

const contactLinks = () => {
  return (
    <ContactLinks className="contact-links">
      {/* Email */}
      <a
        href="mailto:email@email.com?subject=Hello!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
      >
        <Envelope />
      </a>
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <LinkedIn />
      </a>
      {/* GitHub */}
      <a
        href="apple.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <GitHub />
      </a>
      {/* Instagram */}
      <a
        href="apple.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <Instagram />
      </a>
    </ContactLinks>
  )
}

export default contactLinks
