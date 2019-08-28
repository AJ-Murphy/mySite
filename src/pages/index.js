import React from "react"
import * as Icon from "react-feather"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Nav from "../components/nav"
import NavLinks from "../components/navLinks"
import Hero from "../components/hero"
import Section from "../components/section"
import Cards from "../components/cards"
import Card from "../components/card"
import Contact from "../components/contactForm"

import SEO from "../components/seo"

const IndexPage = () => {
  const battleship = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "battleships.png" }) {
        childImageSharp {
          # The default width is 400 pixels
          fluid(maxWidth: 400, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Nav>
        <NavLinks link="#top" icon={<Icon.Home />} />
        <NavLinks link="#about" icon={<Icon.User />} />
        <NavLinks link="#portfolio" icon={<Icon.Code />} />
        <NavLinks link="#contact" icon={<Icon.Mail />} />
      </Nav>
      <Hero
        headingText="Adam J Murphy"
        subHeadingText="Full-stack web developer"
        buttonText="Contact"
        buttonLink="#contact"
        id="#top"
        chevronLink="#about"
        linkedin="https://www.linkedin.com/in/aj-murphy/"
        github="https://github.com/AJ-Murphy"
      />
      <Section
        headingText="About"
        id="about"
        paragraphText="I’m Adam Murphy, a full stack web developer from Durham with 2 years working in the industry. I am passionate about learning anything web related and creating responsive websites. I’m looking for a full time position as a web developer in the Durham and Newcastle area."
      />
      <Section headingText="Portfolio" id="portfolio">
        <Cards>
          <Card
            headingText="Battleships"
            paragraphText="A basic game of Battleships made with JavaScript and CSS Grid!"
            image={battleship.file.childImageSharp.fluid}
            title="Battleships"
          />
        </Cards>
      </Section>
      <Section headingText="Contact" id="contact">
        <Contact />
      </Section>
    </Layout>
  )
}

export default IndexPage
