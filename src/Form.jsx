import { useEffect, useState } from 'react';
import Values from 'values.js';
import ColorList from './ColorList';
const Form = () => {
  const [color, setColor] = useState('#f15025');
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    setColorList(new Values(color).all(10));
    console.log(colorList);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setColor(e.target.value);
    setColorList(new Values(color).all(10));
  };

  return (
    <>
      <section className="container">
        <h4>Color Picker</h4>
        <form className="color-form" onSubmit={handleSubmit}>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <input
            type="text"
            value={color}
            placeholder="#f15025"
            onChange={(e) => setColor(e.target.value)}
          />

          <button type="submit" className="btn" style={{ background: color }}>
            submit
          </button>
        </form>
      </section>
      <ColorList colorList={colorList} />
    </>
  );
};

export default Form;
