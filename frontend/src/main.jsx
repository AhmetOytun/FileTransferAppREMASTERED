import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import SendPage from './pages/SendPage';
import ReceivePage from './pages/ReceivePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage errorValue="WHAT ARE YOU TRING TO DO?" />,
  },{
    path: "/send",
    element: <SendPage />,
    errorElement: <ErrorPage errorValue="WHAT ARE YOU TRING TO DO?" />,
  },{
    path: "/receive",
    element: <ReceivePage />,
    errorElement: <ErrorPage errorValue="WHAT ARE YOU TRING TO DO?" />,
  },
  {
    path: "*",
    element: <ErrorPage errorValue="404 NOT FOUND"/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
