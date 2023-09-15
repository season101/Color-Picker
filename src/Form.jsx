import { useEffect, useState } from 'react';
import Values from 'values.js';
import ColorList from './ColorList';
const Form = () => {
  const [color, setColor] = useState('#000000');
  const [colorList, setColorList] = useState([]);

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  useEffect(() => {
    setColorList(new Values(color).all(10));
    console.log(colorList);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const colors = new Values(color).all(10);
  };

  return (
    <>
      <form className="color-form" onSubmit={handleSubmit}>
        <input type="color" value={color} onChange={handleChange} />
        <input type="text" value={color} />

        <button type="submit" className="btn" style={{ background: color }}>
          submit
        </button>
      </form>
      <ColorList colorList={colorList} />
    </>
  );
};

export default Form;
