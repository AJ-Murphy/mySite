/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useSpring, animated } from "react-spring"

import "../styles/global.scss"

const Layout = ({ children }) => {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } })

  return <animated.div style={fade}>{children}</animated.div>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
