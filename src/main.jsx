import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Layout/Main';
import Home from './Components/Home.jsx/Home';
import Login from './Components/Login.jsx/Login';
import Contact from './Components/Contact.jsx/Contact';

let router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "Login",
        element: <Login></Login>
      },
      {
        path: "Contact",
        element: <Contact></Contact>
      },

    ]
  }
])








ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
