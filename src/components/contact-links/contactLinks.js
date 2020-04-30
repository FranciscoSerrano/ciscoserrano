import React from "react"
import styled from "styled-components"

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
        href="mailto:hello@ciscoserrano.com?subject=Hello!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
      >
        <Envelope />
      </a>
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/ciscoserrano/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <LinkedIn />
      </a>
      {/* GitHub */}
      <a
        href="https://github.com/FranciscoSerrano"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <GitHub />
      </a>
      {/* Instagram */}
      <a
        href="https://www.instagram.com/ciscoserrano"
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
