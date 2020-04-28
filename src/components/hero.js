import React from "react"
import styled from "styled-components"

// Import desired stylesheets
import "../styles/colors.css"
import "../styles/global.scss"

const Hero = styled.section`
  padding-top: 80px;

  h1 {
    margin-bottom: 40px;
  }

  h5 {
    padding-right: 17.5%;
  }
`

const hero = () => {
  return (
    <Hero className="container">
      <h1>
        Francisco
        <br />
        Serrano
      </h1>
      <h5>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit
        nisl neque turpis luctus interdum est. Lacus, ante pharetra eget auctor
        in elementum massa venenatis. Nunc aenean orci posuere faucibus
        vestibulum ut id netus. Metus enim, cursus tincidunt nulla.
      </h5>
    </Hero>
  )
}

export default hero
