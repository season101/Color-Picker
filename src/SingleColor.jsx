import React from 'react';

const SingleColor = ({ color }) => {
  console.log(color);
  const [r, g, b] = color.rgb;
  return (
    <article
      className="color false"
      style={{ backgroundColor: `rgb(${r},${g},${b})` }}
    ></article>
  );
};

export default SingleColor;
