import React from "react"
import * as Icon from "react-feather"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Nav from "../components/nav"
import NavLinks from "../components/navLinks"
import Hero from "../components/hero"
import Section from "../components/section"
import Cards from "../components/cards"
import Card from "../components/card"

import SEO from "../components/seo"

const IndexPage = () => (
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
          paragraphText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non autem hoc: igitur ne illud quidem. Si enim ad populum me vocas, eum. Zenonis est, inquam, hoc Stoici. Sed ad bona praeterita redeamus. Duo Reges: constructio interrete. Summum ením bonum exposuit vacuitatem doloris; "
          image="https://via.placeholder.com/450x250"
        />
      </Cards>
    </Section>
  </Layout>
)

export default IndexPage
