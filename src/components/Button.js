import React from 'react';

const Button = props => {
  console.log('rendering button');

  const { handleClick, children } = props;
  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
