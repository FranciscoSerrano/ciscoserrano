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
            title="Analytical Chemistry Intern - Apple, Inc"
            subTitle="Jan 2019 – June 2019"
            description="Part of the Environmental Technologies group within Apple, I collaborated on design and development for products through the following:
            • Perform material testing on development products
            • Disassemble products and extract materials for chemical analysis • Operate laboratory instruments (XRF, IC, LIBS)
            • Use and improve workflow management tool (python)
            • Collaborate with experts to collect documentation and quality control"
          />
          <ExperienceItem
            title="Genuis - Apple, Inc"
            subTitle="August 2019 – Current"
            description="Support customers with hardware & software, repair iPhones, and mentor technicians."
          />
          <ExperienceItem
            title="Technical Expert - Apple, Inc"
            subTitle="January 2016 – August 2019"
            description="Assisted customers in troubleshooting their hardware and software and managed the appointment system."
          />
          <ExperienceItem
            title="Product Specialist - Apple, Inc"
            subTitle="Nov 2015 – January 2016"
            description="Provide customized solutions based on each customerʼs specific needs, including business, education, and creative professionals."
          />
           <ExperienceItem
            title="iOS Developer Intern - DS Media Labs"
            subTitle="May 2013 – January 2014"
            description="Design and build applications for the iOS platform. Unit-test code for robustness, including edge cases, usability, & general reliability."
          />
        </Experience>
        <Experience>
          <h2>education</h2>
          <ExperienceItem title="Associates Degree General Studies" subTitle="Valencia College" />
          <ExperienceItem title="Bachelor of Science Mathematics" subTitle="University of Central Florida" />
        </Experience>
      </LeftColumn>

      <RightColumn>
        <List>
          <h2>skills</h2>
          <ListItem text="macOS"/>
          <ListItem text="iOS"/>
          <ListItem text="Troubleshooting"/>
          <ListItem text="Git & GitHub"/>
          <ListItem text="Python"/>
          <ListItem text="Bash"/>
        </List>
        <List>
          <h2>tools</h2>
          <ListItem text="VS Code"/>
          <ListItem text="XCode"/>
          <ListItem text="Terminal"/>
          <ListItem text="Jira"/>
          <ListItem text="Jamf MDM"/>
          <ListItem text="Affinity Photo"/>
          <ListItem text="Affinity Designer"/>
          <ListItem text="Affinity Publisher"/>
          <ListItem text="Jira"/>
        </List>
      </RightColumn>
    </Resume>
  )
}

export default resume
