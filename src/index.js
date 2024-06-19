import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Reservations from "./pages/Reservations";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./assets/css/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/reservations",
    element: <Reservations />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
