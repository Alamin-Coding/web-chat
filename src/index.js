import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import firebaseConfig from './firebaseConfig';
import Registration from './component/pages/registration';
import Login from './component/pages/login';
import Home from './component/pages/home';
import Forgotpassword from './component/pages/forgotPassword';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/registration",
    element: <Registration/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/forgot-password",
    element: <Forgotpassword/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
