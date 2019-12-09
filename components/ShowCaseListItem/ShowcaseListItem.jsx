import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import ListItemHoverContent from '../ListItemHoverContent/ListItemHoverContent';

function ShowcaseListItem({ data }) {
  const {
    name,
    src,
    headline,
    website,
  } = data;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="c-ShowcaseListItem"
    >
      <ListItemHoverContent
        headline={headline}
        website={website}
        hoverState={isHovered}
      />
      <Link
        href="/detail/email/[name]"
        as={`/detail/email/${name}`}
      >
        <a>
          <img src={src} alt="" />
        </a>
      </Link>
    </motion.div>
  );
}


export default ShowcaseListItem;
