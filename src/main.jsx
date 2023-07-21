import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from "./assets/Pages/search/index.jsx";

import "./index.css";
import Home from "./assets/Pages/home/index.jsx";
import { Register } from "./assets/Pages/sign-up/index.jsx";
import { Registeruser } from "./assets/Pages/sign-up/register-next.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/search",
    element: <Search />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/Registeruser",
    element: <Registeruser />,
    // errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
