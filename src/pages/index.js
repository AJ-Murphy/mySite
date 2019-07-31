import React from "react"
import * as Icon from "react-feather"

import Layout from "../components/layout"
import Nav from "../components/nav"
import NavLinks from "../components/navLinks"
import Hero from "../components/hero"

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
  </Layout>
)

export default IndexPage
