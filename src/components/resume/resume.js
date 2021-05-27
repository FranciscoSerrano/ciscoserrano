import React, { Component } from "react"
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

export default class resume extends Component {
  render() {
    return (
      <Resume className="container">
        <LeftColumn>
          <Experience sectionTitle="Experience">
          <ExperienceItem
              title="Software Engineer Intern - Apple, Inc"
              subTitle="Jan 2021 – June 2021"
              description="Part of the Weather Forecasting team within Apple, I collaborated on design and development for products through the following:"
            >
              <li>Developed server-side pipelines in Node.js to retrieve and process hundreds of thousands of weather station observations from a MySQL database to test hypotheses and understand trends in accuracy assessments for the Weather Forecasting team</li>
              <li>Designed and implemented an in-house charting library backed by D3.js to visualize the results of my project as histograms, box-and-whisker plots, and calibration curves on the front-end</li>
              <li>Extended an existing Express.js web application to display a dashboard of my results using the charting library I developed.</li>
            </ExperienceItem>

            <ExperienceItem
              title="Analytical Chemistry Intern - Apple, Inc"
              subTitle="Jan 2019 – June 2019"
              description="Part of the Environmental Technologies group within Apple, I collaborated on design and development for products through the following:"
            >
              <li>Designed and implemented a workflow management tool using Python and pandas that processed raw Yokogawa power meter data output in 86,000 line CSV files into a lightweight, one page, formatted Excel report. This automated the reporting which was done manually before and allowed us to increase our lab output.</li>
              <li>Operated and programmed laboratory instruments for environmental testing: X-ray Fluorescence Spectrometer, Ion Chromatography, Laser Induced Breakdown Spectrometer.</li>
              <li>Performed material testing on development products to ensure they meet environmental regulations across the United States, United Kingdom, and Canada.</li>
              <li>Developed a hardware stress testing methodology for a last minute project with successful results.</li>
              <li>Collaborate with experts to collect documentation and quality control</li>
            </ExperienceItem>

            <ExperienceItem
              title="Genuis - Apple, Inc"
              subTitle="August 2019 – Current"
              description="The Genius performs hands-on repairs of desktop and mobile devices. They also provide critical frontline customer support, creates experience that promote excitement about Mac ownership, and build long-term relationships with Apple customers."
            >
              <li>Wrote a stress testing script using Python and Beautiful Soup to replicate intermittent shut down issues that customers say happen during heavy use of their computers. The script allowed for multitasking on the floor, increasing our appointment on-time percentage at the Genius Bar.</li>
              <li>Submitted detailed bug reports to IS&T for our internal retail applications such as Mobile Genius and Concierge to improve the customer experience on the floor.</li>
              <li>Ability to effectively engage in high level, self-directed time management and prioritization of workload.</li>
              <li>Strong interpersonal skills and experience navigating customer service issues with empathy.</li>
              <li>Ability to work in a fast-paced environment and make decisions quickly, sometimes under tight deadlines and pressure.</li>
              <li>Authored technical training documentation for the Genius Bar used by three stores in the market.</li>
            </ExperienceItem>

          <ExperienceItem
            title="Technical Expert - Apple, Inc"
            subTitle="March 2017 – August 2019"
            description="The Technical Expert combines extensive functional troubleshooting skills with an ability to inspire excitement around ownership across the Apple ecosystem — with a focus on iPhone."
          >
            <li>Certified to repair iOS devices.</li>
            <li>Ability to listen and provide feedback and guidance to others.</li>
            <li>Ability to identify patterns based upon prior troubleshooting experience to diagnose symptoms and causes.</li>
            <li>Excellent verbal and written communications skills with ability to tailor communication and style to differing audiences.</li>
          </ExperienceItem>

          <ExperienceItem
            title="Technical Specialist - Apple, Inc"
            subTitle="January 2016 – March 2017"
            description="The Technical Specialist offers technical support and skilled troubleshooting for all customers while also generating excitement for our products and services. The Technical Specialist delivers exceptional service and ensures customers are empowered to get the most out of their Apple products and services. In addition, the Technical Specialist ensures customers are educated about all available ownership options."
          >
            <li>Ability to analyze and solve technical problems.</li>
            <li>Experience troubleshooting hardware and software issues in a customer service environment.</li>
            <li>Strong interpersonal skills and experience navigating customer service issues with empathy. </li>
            <li>Action-oriented and motivated to do what’s best for the customer and Apple, often anticipating and adjusting for problems and roadblocks.</li>
          </ExperienceItem>

          <ExperienceItem
            title="Product Specialist - Apple, Inc"
            subTitle="Nov 2015 – January 2016"
            description="The Specialist builds brand loyalty and creates owners of Apple products. The Specialist is approachable and curious, and engages customers before, during, and after a purchase. They ask questions and actively listen to our customers’ needs in order to demonstrate how Apple can enrich their lives. The Specialist is dedicated to delivering a customer service experience that is unlike any other."
          >
            <li>Sales experience in a fast-paced environment.</li>
            <li>Strong teamwork, interpersonal, and customer service skills.</li>
            <li>Ability to prioritize tasks effectively.</li>
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
            <ListItem text="JavaScipt" />
            <ListItem text="HTML" />
            <ListItem text="CSS" />
            <ListItem text="Node.js" />
            <ListItem text="Python" />
            <ListItem text="macOS" />
            <ListItem text="iOS" />
            <ListItem text="Troubleshooting" />
            <ListItem text="Git & GitHub" />
            <ListItem text="MySQL" />
            <ListItem text="Command Line" />
          </List>
          <List sectionTitle="Tools">
            <ListItem text="VS Code" />
            <ListItem text="XCode" />
            <ListItem text="Final Cut" />
            <ListItem text="Logic" />
            <ListItem text="Keynote" />
            <ListItem text="Terminal" />
            <ListItem text="Jira" />
            <ListItem text="Jamf MDM" />
            <ListItem text="Affinity Photo" />
            <ListItem text="Affinity Designer" />
            <ListItem text="Affinity Publisher" />
            <ListItem text="Pen & Paper" />
          </List>
        </RightColumn>
      </Resume>
    )
  }
}
