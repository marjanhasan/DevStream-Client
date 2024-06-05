import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../pages/Profile";
import SinglePostById from "../pages/SinglePostById";

const token = localStorage.getItem("token");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/posts/:id",
        element: (
          <PrivateRoutes>
            <SinglePostById />
          </PrivateRoutes>
        ),
        loader: async ({ params }) => {
          const response = await fetch(
            `https://devstream-server.onrender.com/posts/${params.id}`,
            {
              method: "GET",
              headers: {
                "content-type": "application/json",
                authorization: `Bearer ${token}`,
              },
            }
          );
          if (!response.ok) {
            throw new Error("Failed to fetch post");
          }
          return response.json();
        },
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
]);
