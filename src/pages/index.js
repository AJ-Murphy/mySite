import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero
      headingText="Adam J Murphy"
      subHeadingText="Full-stack web developer"
      buttonText="Contact"
      buttonLink="#contact"
    />
  </Layout>
)

export default IndexPage
