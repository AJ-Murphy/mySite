import React, { Fragment } from "react"
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
  const data = useStaticQuery(graphql`
    query {
      battleships: file(relativePath: { eq: "battleships.png" }) {
        childImageSharp {
          # The default width is 400 pixels
          fluid(maxWidth: 400, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      simplebonds: file(relativePath: { eq: "simplebonds.png" }) {
        childImageSharp {
          # The default width is 400 pixels
          fluid(maxWidth: 400, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      weather: file(relativePath: { eq: "weather.png" }) {
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
        paragraphText={
          <Fragment>
            <p className="my-3">
              I’m Adam Murphy, a full stack web developer from Durham with two
              years working in the industry.
            </p>

            <p className="my-3">
              During my two years at IT Success I have worked on a multitude of
              projects for a range of clients providing Web Design (photo
              editing and flat designs) and Development (PHP, HTML, CSS,
              JavaScript, WordPress and responsive layouts). I have a keen
              understanding of a projects life cycles and meeting deadlines.
            </p>

            <p className="my-3">
              I have a wide range of skills including problem solving,
              particularly troubleshooting issues on a website and I am
              passionate about learning and enjoy building sites from start to
              finish.
            </p>

            <p className="my-3">
              I am currently looking for a full time position as a web developer
              in the North East of England.
            </p>
          </Fragment>
        }
      />
      <Section headingText="Portfolio" id="portfolio">
        <Cards>
          <Card
            headingText="Battleships"
            link="https://www.battleships.ajmurphy.co.uk"
            paragraphText="A basic game of Battleships made with JavaScript and CSS Grid!"
            image={data.battleships.childImageSharp.fluid}
            title="Battleships"
          />
          <Card
            headingText="Simple Bonds"
            link="https://www.simple-bonds.ajmurphy.co.uk"
            paragraphText="A JavaScript based web application that allows a user to record investments into bonds by their investors."
            image={data.simplebonds.childImageSharp.fluid}
            title="Simple Bonds"
          />
          <Card
            headingText="Weather App"
            link="https://www.weather.ajmurphy.co.uk"
            paragraphText="A React app to get the weather."
            image={data.weather.childImageSharp.fluid}
            title="Weather app"
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
