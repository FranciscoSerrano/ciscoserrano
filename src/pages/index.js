import React, { Component } from "react"
import styled from "styled-components"

// Import all Stylesheets
import "../styles/layout.css"
import "../styles/colors.css"
import "../styles/global.scss"

// Import any Components
import SEO from "../components/seo" // SEO is only necessary for rendered pages
import ThemeSwticher from "../components/themeSwitcher"
import Buttons from "../components/buttons"
import Hero from "../components/hero"

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
`

export default class index extends Component {
  state = {
    dark: false,
  }

  render() {
    return (
      <Layout className={this.state.dark ? "dark-mode" : "light-mode"}>
        <SEO title="Francisco Serrano" />
        <Buttons>
          <div onClick={() => this.setState({ dark: !this.state.dark })}>
            <ThemeSwticher />
          </div>
        </Buttons>
        <Hero />
      </Layout>
    )
  }
}
