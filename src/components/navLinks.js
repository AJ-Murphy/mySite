import React from "react"
import PropTypes from "prop-types"

const NavLinks = ({ link, icon }) => {
  return (
    <li className="my-3">
      <a href={link}>{icon}</a>
    </li>
  )
}

NavLinks.propTypes = {
  link: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
}

export default NavLinks
