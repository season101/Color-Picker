import React from 'react';
import { toast } from 'react-toastify';

const SingleColor = ({ color }) => {
  const { rgb, weight, hex, type } = color;
  const [r, g, b] = rgb;

  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(`#${hex}`);
      toast.success(`#${hex} Color Copied to Clipboard`);
    } else {
      toast.error('Clipboard not available');
    }
  };

  return (
    <article
      onClick={saveToClipboard}
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
