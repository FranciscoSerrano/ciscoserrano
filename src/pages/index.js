import React, { Component } from "react"
import styled from "styled-components"

// Import all Stylesheets
import "../styles/layout.css"
import "../styles/colors.css"
import "../styles/global.scss"

// Import any Components
import SEO from "../components/seo" // SEO is only necessary for rendered pages
import Moon from "../components/theme-switcher/moon"
import Sun from "../components/theme-switcher/sun"
import Buttons from "../components/buttons"
import Hero from "../components/hero"
import Resume from "../components/resume/resume"

const Layout = styled.main`
  &.dark-mode {
    background-color: var(--black);

    * {
      color: var(--white);
    }
  }

  &.light-mode {
    background-color: var(--white);
    * {
      color: var(--black);
    }
  }

  .toggle-swtich {
    > :nth-child(1) {
      display: none;
    }

    > :nth-child(2) {
      display: block;
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
        <Buttons className="buttons">
          <div className="toggle-swtich" onClick={() => this.setState({ dark: !this.state.dark })}>
            <Moon className={this.state.dark ? "hidden" : "visible"} />
            <Sun className={this.state.dark ? "visible" : "hidden"} />
          </div>
        </Buttons>
        <Hero />
        <Resume />
      </Layout>
    )
  }
}
