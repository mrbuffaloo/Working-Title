import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/app/app.tsx'
import Home from './pages/home/home.tsx'

import './index.css'

import Entry from './components/entry.js'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "app/entry/:entryID",
    element: <Entry />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
