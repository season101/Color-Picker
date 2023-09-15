import React from 'react';

const SingleColor = ({ color }) => {
  const { rgb, weight, hex, type } = color;
  const [r, g, b] = rgb;
  return (
    <article
      className="color false"
      style={{ backgroundColor: `rgb(${r},${g},${b})` }}
    >
      <p
        className="percent-value"
        style={type === 'shade' ? { color: 'white' } : { color: 'black' }}
      >
        {weight}%
      </p>
      <p
        className="color-value"
        style={type === 'shade' ? { color: 'white' } : { color: 'black' }}
      >
        #{hex}
      </p>
    </article>
  );
};

export default SingleColor;
