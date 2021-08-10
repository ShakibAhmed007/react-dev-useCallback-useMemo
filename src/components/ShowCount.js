import React from 'react';

const ShowCount = props => {
  console.log('rendering swhowcount');

  const { count, title } = props;
  return (
    <h2>
      {title} is {count}
    </h2>
  );
};

export default ShowCount;
