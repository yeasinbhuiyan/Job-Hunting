import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Banner from './Components/Banner/Banner';
import JobDetails from './Components/JobDetails/JobDetails';
import {  productsAndCartData } from './LoaderData/LoaderData';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Statics from './Components/Statics/Statics';
import Blog from './Components/Question/Blog';

const router = createBrowserRouter([
  {
    path : '/',
    element: <App></App>,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
      {
        path : '/',
        element: <Banner></Banner>,
        loader :()=>fetch('/jobCategory.json'),

      },
      {
        path : '/jobDetails/:id',
        element: <JobDetails></JobDetails>,
        loader : ()=>fetch('/jobFeatures.json'),

      },
      {
        path : '/applyJob',
        element: <AppliedJobs></AppliedJobs>,
        loader : ()=>fetch('/jobFeatures.json'),

      },
      {
        path: '/statics',
        element: <Statics></Statics>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
