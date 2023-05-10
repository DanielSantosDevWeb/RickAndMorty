import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Personagens from './pages/Personagens.jsx'
import Home from './pages/Home.jsx'
import Episodios from './pages/Episodios.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/personagens',
        element: <Personagens />,
      },
      {
        path: '/episodios',
        element: <Episodios />
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
