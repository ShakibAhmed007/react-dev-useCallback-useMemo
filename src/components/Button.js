import React from 'react';

const Button = props => {
  const { handleClick, children } = props;
  console.log(`rendering button ${children}`);
  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  );
};

export default React.memo(Button);
