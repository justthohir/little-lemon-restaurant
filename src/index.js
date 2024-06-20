import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import BookingPage from "./pages/BookingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import "./assets/css/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/booking",
    element: <BookingPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode> <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider> </React.StrictMode>
);
