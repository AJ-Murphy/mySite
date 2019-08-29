import React from "react"
import PropTypes from "prop-types"

const Cards = ({ children }) => (
  <div className="flex justify-content items-center self-center">
    {children}
  </div>
)

Cards.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Cards
