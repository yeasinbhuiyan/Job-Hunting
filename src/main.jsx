import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Banner from './Components/Banner/Banner';

const router = createBrowserRouter([
  {
    path : '/',
    element: <App></App>,
    children: [
      {
        path : '/',
        element: <Banner></Banner>,
        loader :()=>fetch('jobCategory.json'),

      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
