import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'
import Root from './component/Root.jsx'
import Authprovider from './assets/Authprovider.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Login from './component/Login.jsx';
import UpdateCard from './component/UpdateCard.jsx';
import App from './App.jsx';
import Register from './component/Register.jsx';
import Update from './component/Update.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App></App>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/update",
        element: <UpdateCard></UpdateCard>,
        loader: () => fetch('http://localhost:5000/coffee')
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/updateinfo/:id",
        element: <Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5000/updateinfo/${params.id}`)
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>


  </React.StrictMode>,
)
