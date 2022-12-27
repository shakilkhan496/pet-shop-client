
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './routes/routes';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';



function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='max-w-[1920px] mx-auto'>
      <RouterProvider router={route}></RouterProvider>

    </div>
  );
}

export default App;
