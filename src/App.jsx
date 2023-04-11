import React from 'react';
import Header from './Components/Header/Header';
import { Outlet } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const App = () => {

 
  return (
    <>

  
<Outlet></Outlet>

      
    </>
  );
};

export default App;