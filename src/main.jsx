import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./assets/Pages/home/index.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from "./assets/Pages/search/index.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
