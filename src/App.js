// import logo from './logo.svg';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './utilities/routes';

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
