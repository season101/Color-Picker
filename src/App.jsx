import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from './Form';

const App = () => {
  return (
    <main>
      <ToastContainer position="top-center" />
      <Form />
    </main>
  );
};
export default App;
