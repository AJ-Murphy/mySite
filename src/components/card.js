import React from "react"
import PropTypes from "prop-types"

const Card = ({ headingText, paragraphText, image, imageText }) => {
  return (
    <div className="max-w-sm bg-white text-initial rounded overflow-hidden shadow-lg mx-6">
      <img className="w-full" src={image} alt={imageText} />
      <div className="px-6 py-4">
        <div className="font-bold mb-2">{headingText}</div>
        <p className="text-base">{paragraphText}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  headingText: PropTypes.node.isRequired,
  paragraphText: PropTypes.node.isRequired,
  image: PropTypes.node.isRequired,
  imageText: PropTypes.node.isRequired,
}

export default Card
