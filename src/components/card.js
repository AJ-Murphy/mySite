import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Card = ({ headingText, paragraphText, image, imageText, link }) => {
  return (
    <div className="max-w-xs bg-white text-initial rounded overflow-hidden shadow-lg mx-6">
      <Img fluid={image} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            title={imageText}
          >
            {headingText}
          </a>
        </div>
        <p className="text-sm mb-2">{paragraphText}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  headingText: PropTypes.node.isRequired,
  paragraphText: PropTypes.node.isRequired,
  image: PropTypes.node.isRequired,
  imageText: PropTypes.node.isRequired,
  link: PropTypes.node.isRequired,
}

export default Card
