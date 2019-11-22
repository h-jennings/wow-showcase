import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

function Button({ href, text }) {
  return (
    <a
      className="c-Button"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}

export default Button;
