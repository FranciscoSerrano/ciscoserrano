import React, { Component } from "react"
import styled from "styled-components"

// Import all Stylesheets (It's important this comes prior to any components)
import "../styles/layout.css"
import "../styles/colors.css"
import "../styles/global.scss"

// Import any Components
import SEO from "../components/seo" // SEO is only necessary for rendered pages
import ButtonsWrapper from "../components/buttonsWrapper"
import { Sun, Moon } from "../components/theme-switcher/icons" // Import icons for theme-switcher
import Hero from "../components/hero"
import Resume from "../components/resume/resume"

const Layout = styled.main`
  ${"" /* Dark Mode styles */}
  &.dark-mode {
    background-color: var(--black);

    .toggle-switcher {
      > :nth-child(1) {
        display: none;
        visibility: hidden;
      }

      > :nth-child(2) {
        display: block;
        visibility: visible;

        &:hover {
          background-color: var(--green);
        }
      }
    }

    .contact-links {
      .icon {
        background-color: var(--grayDark);

        &:hover {
          background-color: var(--white);
        }
      }
    }

    * {
      color: var(--white);
    }
  }

  ${"" /* Light Mode styles */}
  &.light-mode {
    background-color: var(--white);

    .toggle-switcher {
      > :nth-child(1) {
        display: block;
        visibility: visible;

        &:hover {
          background-color: var(--green);
        }
      }

      > :nth-child(2) {
        display: none;
        visibility: hidden;
      }
    }

    .contact-links {
      .icon {
        background-color: var(--gray);

        &:hover {
          background-color: var(--black);
        }
      }
    }

    * {
      color: var(--black);
    }
  }
`

export default class index extends Component {
  state = {
    dark: false,
  }

  render() {
    return (
      <Layout className={this.state.dark ? "dark-mode" : "light-mode"}>
        <SEO title="Francisco Serrano" />
        <ButtonsWrapper className="buttons">
          <div
            className="toggle-switcher"
            onClick={() => this.setState({ dark: !this.state.dark })}
          >
            <Moon className={this.state.dark ? "hidden" : "visible"} />
            <Sun className={this.state.dark ? "visible" : "hidden"} />
          </div>
          <div className="contact-links">
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
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHub />
            </a>
            {/* Instagram */}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
          </div>
        </ButtonsWrapper>
        <Hero />
        <Resume />
      </Layout>
    )
  }
}
