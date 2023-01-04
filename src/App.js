import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './components/Routes/Routes';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    Aos.init();
    Aos.refresh();
  },[])
 
  return (
    <div className="App" >
      <RouterProvider router={routes}> </RouterProvider>
    </div>
  );
}

export default App;
