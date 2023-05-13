import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Personagens from './pages/Personagens.jsx'
import Home from './pages/Home.jsx'
import Mundos from './pages/Mundos.jsx'
import { Theme } from './Theme.jsx'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyle.jsx'
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
        path: '/Mundos',
        element: <Mundos />
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <RouterProvider router={router} ></RouterProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
