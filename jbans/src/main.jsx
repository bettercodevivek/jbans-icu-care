import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Home from './Components/Home'
import About from './Components/About'
import Products from './Components/Products'
import Contact from './Components/Contact.jsx'
import Quality from './Components/Quality.jsx'
import Gallery from './Components/Gallery.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
      index:true,
      element:<Home/>
    },
    {
      path:'home',
      element:<Home/>
    },
    {
      path:'about',
      element:<About/>
    },
    {
      path:'quality',
      element:<Quality/>
    },
  ,{
      path:'products',
      element:<Products/>
    },
    {
      path:'contact',
      element:<Contact/>
    },
    {
      path:'gallery',
      element:<Gallery/>
    }
]
}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
