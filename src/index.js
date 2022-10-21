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
import Registration from './component/registartion';
import Login from './component/login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
