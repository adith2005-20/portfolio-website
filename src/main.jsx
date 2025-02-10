import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Projects from './components/Projects';
import PhotoGallery from './components/PhotoGallery'

const Router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[{
      path:'',
      element:<Hero/>
    },
    {
      path:'PhotoGallery',
      element:<PhotoGallery/>
    },
    {
      path:'Contact',
      element:<Contact/>
    },
    {
      path:'Projects',
      element:<Projects/>
    }
  ]
  }
]);



createRoot(document.getElementById('root')).render(
    <StrictMode>
    <RouterProvider router={Router}/>
  </StrictMode>,
)
