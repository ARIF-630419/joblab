import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./Componet/Main/Main.jsx";
import Home from "./Componet/Home/Home.jsx";
import Statistics from "./Componet/Statistics/Statistics.jsx";
import AppliedJob from "./Componet/AppliedJob/AppliedJob.jsx";
import Blog from "./Componet/Blog/Blog.jsx";
import FeaturesJob from "./Componet/FeaturesJob/FeaturesJob";
import ViewDetais from "./Componet/ViewDetails/ViewDetais";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "appliedJob",
        element: <AppliedJob></AppliedJob>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "feature",
        element: <FeaturesJob></FeaturesJob>,
      },
      {
        path: "/:id",
        element: <ViewDetais></ViewDetais>,
        loader: async ({ params }) => params,
      },
      {
        path: "*",
        element: <p>Page Not Fount</p>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
