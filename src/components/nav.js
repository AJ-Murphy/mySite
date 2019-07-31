import React from "react"
import PropTypes from "prop-types"

const Nav = ({ children }) => {
  return (
    <nav className="w-10 h-screen bg-black fixed">
      <ul className="container h-full text-white justify-center items-center flex flex-col ">
        {children}
      </ul>
    </nav>
  )
}

Nav.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Nav
