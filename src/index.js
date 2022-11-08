import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import firebaseConfig from './firebaseConfig';
import Registration from './pages/registration';
import Login from './pages/login';
import Home from './pages/home';
import Forgotpassword from './pages/forgotPassword';
// Redux
import store from './store'
import { Provider } from 'react-redux'

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
    <Provider store={store}>
     <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
