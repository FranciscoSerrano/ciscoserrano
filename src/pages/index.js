import React, { Component } from "react"
import styled from "styled-components"

// Import all Stylesheets (It's important this comes prior to any components)
import "../styles/layout.css"
import "../styles/colors.css"
import "../styles/global.scss"

// Import components
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

    h1,
    h2,
    h3,
    h5,
    p,
    li {
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
  }
`

export default class index extends Component {
  constructor() {
    super()
    this.state = {
      theme: "",
    }
  }

  changeTheme() {
    if (this.state.theme === "dark") {
      this.setState({ theme: "light" })
      localStorage.setItem("theme", "light")
    } else {
      this.setState({ theme: "dark" })
      localStorage.setItem("theme", "dark")
    }
  }

  componentDidMount() {
    this.setState({ theme: localStorage.theme })
  }

  render() {
    return (
      <Layout
        className={this.state.theme === "dark" ? "dark-mode" : "light-mode"}
      >
        <SEO title="Francisco Serrano" />
        <ButtonsWrapper className="buttons">
          <div
            className="toggle-switcher"
            onClick={this.changeTheme.bind(this)}
          >
            <Moon
              className={this.state.theme === "light" ? "visible" : "hidden"}
            />
            <Sun
              className={this.state.theme === "dark" ? "visible" : "hidden"}
            />
          </div>
        </ButtonsWrapper>
        <Hero />
        <Resume />
      </Layout>
    )
  }
}
