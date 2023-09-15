import { nanoid } from 'nanoid';
import React from 'react';
import SingleColor from './SingleColor';

const ColorList = ({ colorList }) => {
  return (
    <section className="colors">
      {colorList.map((color) => {
        return <SingleColor key={nanoid()} color={color} />;
      })}
    </section>
  );
};

export default ColorList;
