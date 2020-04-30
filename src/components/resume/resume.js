import React from "react"
import styled from "styled-components"

// Import relevant components
import LeftColumn from "./leftColumn"
import RightColumn from "./rightColumn"
import Experience from "./experience/experience"
import ExperienceItem from "./experience/experienceItem"
import List from "./list/list"
import ListItem from "./list/listItem"

const Resume = styled.section`
  display: block;
  padding-top: 80px;

  .divider {
    display: none;
    height: auto;
    width: 2px;
    background-color: var(--grayLight);

    @media (min-width: 1024px) {
      display: block;
      margin-left: 80px;
      margin-right: 80px;
    }

    @media (min-width: 1280px) {
      display: block;
      margin-left: 160px;
      margin-right: 80px;
    }
  }

  @media (min-width: 1024px) {
    display: flex;
  }
`

const resume = () => {
  return (
    <Resume className="container">
      <LeftColumn>
        <Experience sectionTitle="Experience">
          <ExperienceItem
            title="Analytical Chemistry Intern - Apple, Inc"
            subTitle="Jan 2019 – June 2019"
            description="Part of the Environmental Technologies group within Apple, I collaborated on design and development for products through the following:"
          >
            <li>Perform material testing on development products</li>
            <li>Disassemble products and extract materials for chemical analysis</li>
            <li>Operate laboratory instruments (XRF, IC, LIBS)</li>
            <li>Use and improve workflow management tool (python)</li>
            <li>Collaborate with experts to collect documentation and quality control</li>
          </ExperienceItem>

          <ExperienceItem
            title="Genuis - Apple, Inc"
            subTitle="August 2019 – Current"
            description="The Genius performs hands-on repairs of desktop and mobile devices. They also provide critical frontline customer support,
            creates experience that promote excitement about Mac ownership, and build long-term relationships with Apple customers."
          >
            <li>Certified to troubleshoot, diagnose, and perform repairs of Macs, iOS devices, Apple TV, Apple Watch, Beats, AirPort, and other devices and their accompanying software.</li>
            <li>Advanced level of troubleshooting hardware and software issues across a broad range of products and services in a customer service environment.</li>
            <li>Ability to effectively engage in high level, self-directed time management and prioritization of workload. </li>
            <li>Strong interpersonal skills and experience navigating customer service issues with empathy.</li>
            <li>Ability to work in a fast-paced environment and make decisions quickly, sometimes under tight deadlines and pressure. </li>
            <li>Proven success in team environments demonstrating shared responsibility and accountability with other team members.</li>
          </ExperienceItem>

          <ExperienceItem
            title="Technical Expert - Apple, Inc"
            subTitle="January 2016 – August 2019"
            description="The Technical Specialist offers technical support and skilled troubleshooting for all customers while also generating
            excitement for our products and services. The Technical Specialist delivers exceptional service and ensures customers are empowered to
            get the most out of their Apple products and services. In addition, the Technical Specialist ensures customers are educated about all
            available ownership options."
            >
            <li>Certified to repair iOS devices. </li>
            <li>Ability to listen and provide feedback and guidance to others.</li>
            <li>Ability to identify patterns based upon prior troubleshooting experience to diagnose symptoms and causes.  </li>
            <li>Excellent verbal and written communications skills with ability to tailor communication and style to differing audiences.</li>
          </ExperienceItem>

          <ExperienceItem
            title="Product Specialist - Apple, Inc"
            subTitle="Nov 2015 – January 2016"
            description="The Specialist builds brand loyalty and creates owners of Apple products. The Specialist is approachable and curious,
            and engages customers before, during, and after a purchase. They ask questions and actively listen to our customers’ needs in order
            to demonstrate how Apple can enrich their lives. The Specialist is dedicated to delivering a customer service experience that is
            unlike any other."
            >
            <li>Sales experience in a fast-paced environment.  </li>
            <li>Strong teamwork, interpersonal, and customer service skills. </li>
            <li>Ability to prioritize tasks effectively.    </li>
            <li>Decisive, even under tight deadlines and pressure.</li>
          </ExperienceItem>

           <ExperienceItem
            title="iOS Development Intern - DS Media Labs"
            subTitle="May 2013 – January 2014"
            description="Design and build applications for the iOS platform. Unit-test code for robustness, including edge cases, usability, & general reliability."
          />
        </Experience>

        <Experience sectionTitle="Education">
          <ExperienceItem title="Bachelor of Science: Mathematics" subTitle="University of Central Florida" />
          <ExperienceItem title="Associates Degree: Liberal Arts" subTitle="Valencia College" />
          <ExperienceItem title="Apple ACIT Certified" subTitle="Mobile Device Repair" />
          <ExperienceItem title="Apple ACMT Certified" subTitle="Mac Repair" />
          <ExperienceItem title="Jamf Professional Certified" subTitle="MDM Software Solutions" />
        </Experience>
      </LeftColumn>

      <div className="divider"></div>

      <RightColumn>
        <List sectionTitle="Skills">
          <ListItem text="macOS"/>
          <ListItem text="iOS"/>
          <ListItem text="Troubleshooting"/>
          <ListItem text="Git & GitHub"/>
          <ListItem text="Python"/>
          <ListItem text="Bash"/>
        </List>
        <List sectionTitle="Tools">
          <ListItem text="VS Code"/>
          <ListItem text="XCode"/>
          <ListItem text="Final Cut"/>
          <ListItem text="Logic"/>
          <ListItem text="Keynote"/>
          <ListItem text="Terminal"/>
          <ListItem text="Jira"/>
          <ListItem text="Jamf MDM"/>
          <ListItem text="Affinity Photo"/>
          <ListItem text="Affinity Designer"/>
          <ListItem text="Affinity Publisher"/>
          <ListItem text="Pen & Paper"/>
        </List>
      </RightColumn>
    </Resume>
  )
}

export default resume
