import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from './Form';

const App = () => {
  const addColor = (color) => {
    toast.success('Color copied successfully !!!');
  };
  return (
    <main>
      <ToastContainer position="top-center" />
      <Form addColor={addColor} />
    </main>
  );
};
export default App;
