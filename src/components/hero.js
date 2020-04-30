import React from "react"
import styled from "styled-components"

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 40px;

  h1 {
    margin-bottom: 40px;
  }

  h5 {
    padding-right: 10%;
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    padding-top: 80px;

    h5 {
      padding-right: 17.5%;
      margin-bottom: 0;
    }
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
        Hello, I'm Francisco! I'm a mathematician interested in solving
        meaningful problems that make the world a better place.
        <br />
        <br />
        In my free time I enjoy reading, building small machines, tinkering with
        software, learn obscure skills, facilitate meandering philosophical
        conversations, debate, take pictures, draw, and dabble with 3D.
        <br />
        <br />
        Connect with me if you'd like to learn more.
      </h5>
    </Hero>
  )
}

export default hero
