import React from "react"
import PropTypes from "prop-types"

import { Mail } from "react-feather"

import "../styles/hero.scss"

const Hero = ({ headingText, subHeadingText, buttonText, buttonLink }) => (
  <div
    id="hero"
    className="container h-screen flex flex-col justify-center items-center text-white text-center"
  >
    <h1 className="m-4 text-3xl sm:text-6xl">{headingText}</h1>
    <p className="m4 text-lg sm:text-2xl">{subHeadingText}</p>
    <a href={buttonLink}>
      <button
        type="button"
        className="font-bold text-white text-xs bg-blue m-4 py-2 px-4 inline-flex items-center sm:text-base  hover:bg-darkBlue"
      >
        <Mail />
        <span className="ml-1">{buttonText}</span>
      </button>
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
