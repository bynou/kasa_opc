import React from "react";
import ReactDOM from "react-dom/client";
import Home from "../pages/Home";
import About from "../pages/About";
import Error404 from "../pages/Error404";
import reportWebVitals from "../reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Logement from "../pages/Logement";
import Layout from "../Layouts/Layout";

function Routes() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Error404 />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/logement",
          element: <Logement />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
reportWebVitals();
export default Routes;
