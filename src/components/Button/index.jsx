import React from 'react';

import './style.css';

function Button({ text }) {
  return (
    <button className="actionButton">{text}</button>
  );
}

export default Button;
