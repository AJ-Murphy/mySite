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
  // const battleship = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: { eq: "battleship.jpg" }) {
  //       childImageSharp {
  //         # Specify a fixed image and fragment.
  //         # The default width is 400 pixels
  //         fixed(width: 400, height: 300) {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <Layout>
      <SEO title="Home" />
      <Nav>
        <NavLinks link="#hero" icon={<Icon.Home />} />
        <NavLinks link="#about" icon={<Icon.User />} />
        <NavLinks link="#portfolio" icon={<Icon.Code />} />
        <NavLinks link="#contact" icon={<Icon.Mail />} />
      </Nav>
      <Hero
        headingText="Adam J Murphy"
        subHeadingText="Full-stack web developer"
        buttonText="Contact"
        buttonLink="#contact"
      />
      <Section
        headingText="About"
        paragraphText="Web developer with 2 years experiance"
      />
      <Section headingText="Portfolio">
        <Cards>
          <Card
            headingText="Battleships"
            paragraphText="Small game of Battleships made with CSS Grid and JavaScript!"
            // image={battleship.file.childImageSharp.fixed}
            image="https://via.placeholder.com/400"
          />
        </Cards>
      </Section>
      <Section headingText="Contact">
        <Contact />
      </Section>
    </Layout>
  )
}

export default IndexPage
