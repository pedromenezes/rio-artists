import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.tsx'
import { neighborhoodLoader } from './loaders/neighborhoodLoader'

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: neighborhoodLoader
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
