import './index.css'
import App from './App.jsx'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx'
import Login from './components/Login.jsx'
import InviteSuccess from './components/InviteSuccess.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <App />
  
    ),
    errorElement: (
        <App />
    )
  },
  {
    path: '/dashboard',
    element: (
        <Dashboard />
    ),
  },
  {
    path: '/login',
    element: (
        <Login />
    ),
  },
  {
    path: '/success',
    element: (
        <InviteSuccess />
    ),
  },

],
{
  basename: "/"
},
{
  scrollBehavior: "auto"
}
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)