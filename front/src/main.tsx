import React from "react";
import ReactDOM from "react-dom/client";
import {
  Link as RouterLink,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import NewPost from "./pages/new-post/NewPost";
import AuthPage from "./pages/auth/AuthPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <RouterLink to="about">About Us</RouterLink>
      </div>
    ),
  },
  {
    path: "add",
    element: <NewPost />,
  },
  {
    path: "auth",
    element: <AuthPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
