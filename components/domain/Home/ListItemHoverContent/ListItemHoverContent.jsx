import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';


const variants = {
  inactive: {
    y: '-100%',
  },
  active: {
    y: '0',
  },
};


function ListItemHoverContent({ headline, website, hoverState }) {
  return (
    <motion.div
      className="ListItemHoverContent--container"
      variants={variants}
      initial="inactive"
      animate={hoverState ? 'active' : 'inactive'}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 40,
      }}
    >
      <h3>{headline}</h3>
      <a href={website} target="_blank" rel="noopener noreferrer">{website}</a>
    </motion.div>
  );
}

export default ListItemHoverContent;
