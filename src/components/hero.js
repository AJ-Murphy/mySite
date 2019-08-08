import React from "react"
import PropTypes from "prop-types"

import * as Icon from "react-feather"

import "../styles/hero.scss"

const Hero = ({
  headingText,
  subHeadingText,
  linkedin,
  github,
  chevronLink,
}) => (
  <div
    id="hero"
    className="container h-screen flex flex-col justify-center items-center text-white text-center m-0"
  >
    <h1 className="mt-auto mb-4 text-3xl sm:text-6xl">{headingText}</h1>
    <p className="m-4 text-lg sm:text-2xl">{subHeadingText}</p>
    <div className="text-white text-xs inline-flex text-center">
      <a href={linkedin} className="m-2 cursor-pointer">
        <Icon.Linkedin />
      </a>
      <a href={github} className="m-2 cursor-pointer">
        <Icon.GitHub />
      </a>
    </div>

    <a href={chevronLink} className="mt-auto">
      <div className="text-white text-xs m-4 mt-auto">
        <Icon.ChevronDown />
      </div>
    </a>
  </div>
)

Hero.propTypes = {
  headingText: PropTypes.node.isRequired,
  subHeadingText: PropTypes.node.isRequired,
  buttonText: PropTypes.node.isRequired,
  buttonLink: PropTypes.node.isRequired,
}

export default Hero
