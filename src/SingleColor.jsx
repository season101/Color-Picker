import React from 'react';

const SingleColor = ({ color }) => {
  const style = {
    backgroundColor: `rgb(${[color]})`,
  };
  return <article className="color false" style={style}></article>;
};

export default SingleColor;
