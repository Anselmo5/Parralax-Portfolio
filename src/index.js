import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import "./index.css";
import App from "./App";
import App2 from "./parallax/Parrallaxsegundapagina/Materias";

const home = createBrowserRouter([
    {
      path: "/",
      element: App()
    },
  ]);

  const materia = createBrowserRouter([
    {
      path: "/materiais",
      element: App2()
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={home} />
        <RouterProvider router={materia} />
    </React.StrictMode>
);
