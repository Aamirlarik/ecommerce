import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './auth/sign-up/SignUp';
import SignIn from './auth/sign-in/SignIn';
import ErrorPage from './ErrorPage';
import ProductDetails from "./ProductDetails/ProductDetails"
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './store';





const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/ProductDetails/:product_id",
    element: <ProductDetails />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

    <RouterProvider router={router} />

  </Provider>


);