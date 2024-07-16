import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Toaster } from "sonner";
import Header from "./components/custom/Header.tsx";
import CreateTrail from "./create-trail/index.tsx";
import App from "./App.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-trail",
    element: <CreateTrail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <Toaster />
    <RouterProvider router={router} />
  </React.StrictMode>
);
