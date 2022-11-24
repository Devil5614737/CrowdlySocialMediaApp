import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import PropTypes from 'prop-types';




export const CardImage = ({src}) => {
  return (
    <LazyLoadImage
    width={"100%"}
    height={300}
    style={{objectFit:'cover'}}
      src={src}
      alt="Mountains"
      effect="blur"
    />
  )
}

CardImage.propTypes = {
  src:PropTypes.string
  }