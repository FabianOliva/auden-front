import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./assets/Pages/log-in/index.jsx";
import "./index.css";
import Home from "./assets/Pages/home/index.jsx";
import { Register } from "./assets/Pages/sign-up/index.jsx";
import { Registeruser } from "./assets/Pages/sign-up/register-next.jsx";
import { Recuperarcuenta } from "./assets/Pages/rec-cuenta/index.jsx";

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
    path: "/register",
    element: <Register />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/Registeruser",
    element: <Registeruser />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/recuperarcuenta",
    element: <Recuperarcuenta />,
    // errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
