import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Theme from "./pages/theme/theme.tsx";
import Login from "./pages/login";
import GrapesJSEditor from "./pages/GrapesJSEditor.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      // Add other child routes for the root path here if needed
    ],
  },
  {
    path: "theme",
    element: <Theme />,
  },
  {
    path: "page/:id",
    element: <GrapesJSEditor />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
