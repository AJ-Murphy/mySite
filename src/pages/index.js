import React from "react"
import * as Icon from "react-feather"

import Layout from "../components/layout"
import Nav from "../components/nav"
import NavLinks from "../components/navLinks"
import Hero from "../components/hero"
import Section from "../components/section"

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
  </Layout>
)

export default IndexPage
