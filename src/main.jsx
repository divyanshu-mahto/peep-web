import './index.css'
import App from './App.jsx'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx'

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