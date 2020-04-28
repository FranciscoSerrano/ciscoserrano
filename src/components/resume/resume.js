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
            description="Part of the Environmental Technologies group within Apple, I collaborated on design and development for products through the following:"
          >
            <li>Perform material testing on development products</li>
            <li>Disassemble products and extract materials for chemical analysis • Operate laboratory instruments (XRF, IC, LIBS)</li>
            <li>Use and improve workflow management tool (python)</li>
            <li>Collaborate with experts to collect documentation and quality control</li>
          </ExperienceItem>

          <ExperienceItem
            title="Genuis - Apple, Inc"
            subTitle="August 2019 – Current"
            description="The Genius performs hands-on repairs of desktop and mobile devices. They also provide critical frontline customer support,
            creates experience that promote excitement about Mac ownership, and build long-term relationships with Apple customers.
            The Genius shares his or her technical expertise with all their customers, regardless of the customer’s level of expertise.
            Additionally, the Genius supports the development of teammembers through mentoring and knowledge-sharing."
          />

          <ExperienceItem
            title="Technical Expert - Apple, Inc"
            subTitle="January 2016 – August 2019"
            description="The Technical Specialist offers technical support and skilled troubleshooting for all customers while also generating
            excitement for our products and services. The Technical Specialist delivers exceptional service and ensures customers are empowered to
            get the most out of their Apple products and services. In addition, the Technical Specialist ensures customers are educated about all
            available ownership options."
          />

          <ExperienceItem
            title="Product Specialist - Apple, Inc"
            subTitle="Nov 2015 – January 2016"
            description="The Specialist builds brand loyalty and creates owners of Apple products. The Specialist is approachable and curious,
            and engages customers before, during, and after a purchase. They ask questions and actively listen to our customers’ needs in order
            to demonstrate how Apple can enrich their lives. The Specialist is dedicated to delivering a customer service experience that is
            unlike any other."
          />

           <ExperienceItem
            title="iOS Developer Intern - DS Media Labs"
            subTitle="May 2013 – January 2014"
            description="Design and build applications for the iOS platform. Unit-test code for robustness, including edge cases, usability, & general reliability."
          />
        </Experience>

        <Experience>
          <h2>education</h2>
          <ExperienceItem title="Bachelor of Science: Mathematics" subTitle="University of Central Florida" />
          <ExperienceItem title="Associates Degree: General Studies" subTitle="Valencia College" />
          <ExperienceItem title="Apple ACIT Certified" subTitle="Mobile Device Repair" />
          <ExperienceItem title="Apple ACMT Certified" subTitle="Mac Repair" />
          <ExperienceItem title="Jamf Professional Certified" subTitle="MDM Software Solutions" />
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
