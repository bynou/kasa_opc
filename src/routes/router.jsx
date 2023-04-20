import React from "react";
import ReactDOM from "react-dom/client";
import Home from "../pages/Home";
import About from "../pages/About";
import Error404 from "../pages/Error404";
import reportWebVitals from "../reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Logements from "../pages/Logements";
function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error404 />,
    },
    {
      path: "/logement",
      element: <Logements />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/404",
      element: <Error404 />,
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
