import React from "react";
import PropTypes from 'prop-types';
import {CardHeader} from './CardHeader';
import { CardImage } from "./CardImage";
import { CardBody } from "./CardBody";
import {motion} from 'framer-motion'




export const Card = ({post}) => {

  return (
    <motion.div
    initial={{y:112, scale: 0 }}
    animate={{ y:0, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }}

    className="post-card card mt-4" style={{ width: "26rem",justifySelf:'center' }}>
      <div className="card-body">
        <CardHeader postedBy={post.postedBy}/>
      </div>
     <CardImage src={post.image} />
    <CardBody postedBy={post.postedBy} comments={post.comments} caption={post.caption} likes={post.likes} postId={post._id}/>
    </motion.div>
  );
};



Card.propTypes = {
post:PropTypes.object
}