import React from "react"
import PropTypes from "prop-types"

const Section = ({ children, id, headingText, paragraphText }) => (
  <section>
    <div
      id={id}
      className="container max-w-full flex flex-col justify-content items-baseline py-24 lg:px-64 md:px-32 px-16"
    >
      <h2 className="mb-12 self-center">{headingText}</h2>
      {paragraphText}
      {children}
    </div>
  </section>
)

Section.propTypes = {
  id: PropTypes.node.isRequired,
  headingText: PropTypes.node.isRequired,
  paragraphText: PropTypes.node,
  children: PropTypes.node,
}

Section.defaultProps = {
  paragraphText: "",
  children: "",
}

export default Section
