import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"

// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero
      headingText="Adam J Murphy"
      subHeadingText="Full-stack web developer"
      buttonText="Contact"
      buttonLink="#"
    />
  </Layout>
)

export default IndexPage
