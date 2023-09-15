import { useState } from 'react';

const Form = () => {
  const [color, setColor] = useState('#000000');

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <>
      <form className="color-form" onSubmit={handleSubmit}>
        <input type="color" value={color} onChange={handleChange} />
        <input type="text" value={color} />

        <button type="button" className="btn" style={{ background: color }}>
          submit
        </button>
      </form>
    </>
  );
};

export default Form;
