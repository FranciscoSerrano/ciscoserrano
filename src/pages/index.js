import React, { Component } from "react"
import styled from "styled-components"

// Import any Components
import SEO from "../components/seo" // SEO is only necessary for rendered pages
import Buttons from "../components/buttons"
import Hero from "../components/hero"

// Import all Stylesheets
import "../styles/layout.css"
import "../styles/colors.css"
import "../styles/global.scss"

const Layout = styled.main``

export default class index extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Francisco Serrano" />
        <Buttons>
        </Buttons>
        <Hero />
      </Layout>
    )
  }
}
