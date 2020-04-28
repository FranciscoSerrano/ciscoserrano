import React from "react"
import styled from "styled-components"

// Import relevant components
import LeftColumn from "./leftColumn"
import RightColumn from "./rightColumn"
import Experience from "./experience/experience"
import ExperienceItem from "./experience/experienceItem"
import List from "./list/list"
import ListItem from "./list/listItem"

// Import desired stylesheets
import "../../styles/colors.css"
import "../../styles/global.scss"

const Resume = styled.section`
  display: flex;
`

const resume = () => {
  return (
    <Resume className="container">
      <LeftColumn>
        <Experience>
          <h2>experience</h2>
          <ExperienceItem
            title="Apple"
            subTitle="Jan 2019 – June 2019"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit nisl neque turpis luctus interdum est. Lacus, ante pharetra eget auctor in elementum massa venenatis. Nunc aenean orci posuere faucibus vestibulum ut id netus. Metus enim, cursus tincidunt nulla."
          />
          <ExperienceItem
            title="Apple"
            subTitle="Jan 2019 – June 2019"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit nisl neque turpis luctus interdum est. Lacus, ante pharetra eget auctor in elementum massa venenatis. Nunc aenean orci posuere faucibus vestibulum ut id netus. Metus enim, cursus tincidunt nulla."
          />
          <ExperienceItem
            title="Apple"
            subTitle="Jan 2019 – June 2019"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit nisl neque turpis luctus interdum est. Lacus, ante pharetra eget auctor in elementum massa venenatis. Nunc aenean orci posuere faucibus vestibulum ut id netus. Metus enim, cursus tincidunt nulla."
          />
        </Experience>
        <Experience>
          <h2>education</h2>
          <ExperienceItem title="Degree" subTitle="University" />
          <ExperienceItem title="Degree" subTitle="University" />
        </Experience>
      </LeftColumn>

      <RightColumn>
        <List>
          <h2>skills</h2>
          <ListItem text="macOS"/>
          <ListItem text="iOS"/>
          <ListItem text="macOS"/>
          <ListItem text="iOS"/>
        </List>
        <List>
          <h2>tools</h2>
          <ListItem text="VS Code"/>
          <ListItem text="XCode"/>
          <ListItem text="VS Code"/>
          <ListItem text="XCode"/>
        </List>
      </RightColumn>
    </Resume>
  )
}

export default resume
