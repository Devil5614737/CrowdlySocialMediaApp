import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import PropTypes from 'prop-types';


export const CardHeader = ({postedBy}) => {
  return (
    <div className="d-flex align-items-center gap-2">
    <LazyLoadImage
    effect="blur"
      src={postedBy.pic}
      alt="user "
      style={{
        width: 35,
        height: 35,
        borderRadius: "100%",
        objectFit: "cover",
      }}
    />
    <a
      href="#!"
      className="card-text"
      style={{ textDecoration: "none", color: "black" }}
    >
{postedBy.username}
    </a>
  </div>
  )
}


CardHeader.propTypes = {
  postedBy:PropTypes.object
  }